"use client";

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function SettingsAndAdmin() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-4">
      <div className="relative" ref={menuRef}>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-black/5 active:scale-95 duration-150 flex items-center justify-center"
        >
          <span className="material-symbols-outlined">settings</span>
        </button>
        
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-surface-container rounded-lg shadow-xl py-2 border border-outline-variant z-50">
            <button 
              onClick={() => {
                setAdminModalOpen(true);
                setMenuOpen(false);
              }} 
              className="w-full text-left px-4 py-2 text-label-md font-label-md text-on-surface hover:bg-black/5 transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">admin_panel_settings</span>
              Admin Panel
            </button>
          </div>
        )}
      </div>

      {/* Admin Login Modal */}
      {adminModalOpen && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            onClick={() => setAdminModalOpen(false)} 
            className="absolute inset-0 bg-[#0b1c30]/80 backdrop-blur-sm"
          ></div>
          <div className="relative bg-primary-container text-on-primary-fixed w-full max-w-md p-8 rounded-2xl shadow-2xl border border-white/10 z-10">
            <button 
              onClick={() => setAdminModalOpen(false)} 
              className="absolute top-4 right-4 text-primary-fixed-dim hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield_person</span>
              <div>
                <h2 className="text-headline-md font-headline-md font-bold text-white">Admin Panel</h2>
                <p className="text-label-sm font-label-sm text-primary-fixed-dim">Secure System Access</p>
              </div>
            </div>
            <form className="space-y-5">
              <div>
                <label className="block text-label-md font-label-md text-primary-fixed-dim mb-1">Username</label>
                <input 
                  className="w-full bg-[#0b1c30]/50 border border-white/20 rounded-lg px-4 py-3 text-body-md font-body-md text-white focus:outline-none focus:border-secondary transition-colors" 
                  placeholder="Enter administrator ID" 
                  type="text" 
                />
              </div>
              <div>
                <label className="block text-label-md font-label-md text-primary-fixed-dim mb-1">Password</label>
                <input 
                  className="w-full bg-[#0b1c30]/50 border border-white/20 rounded-lg px-4 py-3 text-body-md font-body-md text-white focus:outline-none focus:border-secondary transition-colors" 
                  placeholder="••••••••" 
                  type="password" 
                />
              </div>
              <div className="pt-2">
                <button 
                  className="w-full bg-secondary hover:bg-[#93000b] text-white py-3 rounded-lg text-label-md font-label-md font-bold transition-all shadow-[0_4px_14px_0_rgba(187,1,18,0.39)] hover:shadow-[0_6px_20px_rgba(187,1,18,0.5)] transform hover:-translate-y-px" 
                  type="button"
                >
                  Login to Dashboard
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
