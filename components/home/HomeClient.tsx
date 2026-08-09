"use client";

import React from 'react';

export default function HomeClient() {
  return (
    <main className="flex-grow grid grid-cols-1 md:grid-cols-12 max-w-container-max mx-auto w-full relative">
      {/* Left Column: Hero Section */}
      <section 
        className="md:col-span-12 flex flex-col justify-center px-gutter py-16 md:py-24 relative z-10 bg-midnight-navy overflow-hidden" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.9) 20%, rgba(15, 23, 42, 0.4) 100%), url("https://lh3.googleusercontent.com/aida/AP1WRLuutwCx9t7BRAAVKk1QF0i4AgFtIIMDIESoaeGTGHYHYDzwrCDOBcV806lt3_ZJAkNKVbx07ByrjASLTRJFpOyXYCWxIBZyaDlt_u2y5pWNNE5rJSGc7iI1M_mXCUlqqK1gw-wY20V687iagO3Q0qbDaUdsov009-MzsC0ruackqEso_VMCN3jBE2pIJ8pWfQ0hP2mxEFd2-3bgQZqwsPAdpJ7hOxQPkEDhws7RAq9bg6TFqp-rSavBHtE")`,
          backgroundSize: "cover",
          backgroundPosition: "right center"
        }}
      >
        {/* Background pattern for Hero */}
        <div className="relative z-10 max-w-xl mx-auto md:mx-0">
          <span className="inline-block px-3 py-1 rounded-full bg-surface-container-high/20 text-white text-label-sm font-label-sm border border-white/20 mb-6 backdrop-blur-md hidden md:inline-block shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
            Next-Gen GIS Platform
          </span>
          <h1 
            className="text-display-lg font-display-lg text-white mb-6 shadow-sm font-bold shadow-[0_2px_4px_rgba(0,0,0,0.5)]" 
            style={{ textShadow: "rgba(0, 0, 0, 0.8) 0px 2px 4px" }}
          >
            Data-Driven Location Strategy for Local Businesses
          </h1>
          <p className="text-body-lg font-body-lg text-primary-fixed-dim mb-10 leading-relaxed">
            Transform your CRM data into powerful geographic insights. We help small businesses make smarter location decisions through interactive mapping, demographic analysis, and competitor intelligence.
          </p>
          <div className="p-6 rounded-2xl bg-white/10 md:bg-surface-container-low border border-white/20 md:border-outline-variant/30 backdrop-blur-md mb-8">
            <h3 className="text-headline-md font-headline-md text-white md:text-on-surface mb-2">Curious what growth opportunities are hiding in your data?</h3>
            <p className="text-body-md font-body-md text-primary-fixed-dim md:text-on-surface-variant mb-6">
              Let's create a road
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAX8-HAnbKADe8_IqIIO2U4Y9ileMRVae3SYBu1D_wL6eTjlDPErqFM2mh9Vua7O3lbogNrgAGPF1Xi96KST-eOaWHnos9xA0cE1LFuzIpKp0E4JsC6dzHrtbDVZUaahAF3Rcwf6wYC774vWIgW6cTMsxwO8tTXkQ2c5tK7nyL5K3vSaqhNKuVMGMm-PjhXj1QfKsOr1T4uhZuSkg13jkcJ2mfm9Y7dAmm1gizn0mFCa2sOWfpm33gYbMWTRoAa0CbZ1Y" 
                alt="MAP" 
                className="inline-block h-6 align-middle mx-1" 
                style={{ filter: "brightness(0) saturate(100%) invert(36%) sepia(84%) saturate(2000%) hue-rotate(335deg) brightness(95%) contrast(95%)" }} 
              /> 
              to the hidden gems together.
            </p>
            <button className="btn-primary text-white px-8 py-3 rounded-lg text-label-md font-label-md font-bold inline-flex items-center gap-2">
              Book a Consultation
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
          <div className="flex items-center gap-4 text-primary-fixed-dim text-label-sm font-label-sm">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-ruby-red">check_circle</span> No credit card required
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-ruby-red">check_circle</span> 14-day free trial
            </span>
          </div>
        </div>
      </section>
      {/* Right Column: Demo Panel (Glassmorphism Dashboard Teaser) */}
    </main>
  );
}
