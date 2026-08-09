"use client";

import React from 'react';

export default function ContactClient() {
  return (
    <div className="flex-1 flex relative w-full overflow-hidden bg-[#0b1c30]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Spatial Analytics Visual" 
          className="w-full h-full object-cover object-right" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnZzzg2hpreA-VDpJ8C8S-fSRQhyeyclNBK0V2E_5lvhrnMRbJfKeErpI2TkAG1djQKOApzR4nDUIvVfMsGOqmzVKL_GioOUHJkXvWg2IdlUGR-COSIGJ8SHDRBeaxucstOksqkt2yVH7NCdHhSCNoueYjV4OLQka3zUoCkt1X4nmPmr_899pWleiA4V8Ptr7HvuYerfErfa_AEUQunNWBB37hff-gxAfX0dkbIteqc_enkpvyORuGNw" 
        />
        {/* Fade from deep navy on left to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c30] via-[#0b1c30]/80 to-transparent"></div>
      </div>
      
      {/* Foreground Content */}
      <main className="flex-1 overflow-y-auto px-gutter py-12 flex flex-col z-10 relative">
        <div className="w-full max-w-3xl ml-0 lg:ml-12">
          <div className="mb-10">
            <h1 className="text-display-lg font-display-lg text-white mb-4 drop-shadow-md">Get Started Today</h1>
            <p className="text-body-lg font-body-lg text-primary-fixed-dim">Fill out the form below and our spatial data experts will be in touch.</p>
          </div>
          <div className="rounded-2xl p-8 lg:p-10 bg-[#0b1c30]/40 backdrop-blur-md border border-white/10 shadow-2xl">
            <form className="space-y-stack-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
                <div className="space-y-stack-sm">
                  <label className="block text-label-md font-label-md text-primary-fixed-dim" htmlFor="fullName">Full Name</label>
                  <input className="w-full bg-[#0b1c30]/50 border border-white/20 rounded-lg px-4 py-3 text-body-md font-body-md text-white focus:outline-none focus:border-secondary transition-colors" id="fullName" name="fullName" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-stack-sm">
                  <label className="block text-label-md font-label-md text-primary-fixed-dim" htmlFor="emailAddress">Email Address</label>
                  <input className="w-full bg-[#0b1c30]/50 border border-white/20 rounded-lg px-4 py-3 text-body-md font-body-md text-white focus:outline-none focus:border-secondary transition-colors" id="emailAddress" name="emailAddress" placeholder="john@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-stack-sm">
                <label className="block text-label-md font-label-md text-primary-fixed-dim" htmlFor="businessName">Business Name</label>
                <input className="w-full bg-[#0b1c30]/50 border border-white/20 rounded-lg px-4 py-3 text-body-md font-body-md text-white focus:outline-none focus:border-secondary transition-colors" id="businessName" name="businessName" placeholder="Acme Corp" type="text" />
              </div>
              <div className="space-y-stack-sm">
                <label className="block text-label-md font-label-md text-primary-fixed-dim" htmlFor="crmSystem">Current CRM System</label>
                <input className="w-full bg-[#0b1c30]/50 border border-white/20 rounded-lg px-4 py-3 text-body-md font-body-md text-white focus:outline-none focus:border-secondary transition-colors" id="crmSystem" name="crmSystem" placeholder="e.g., Salesforce, HubSpot" type="text" />
              </div>
              <div className="space-y-stack-sm">
                <label className="block text-label-md font-label-md text-primary-fixed-dim" htmlFor="challenges">Tell us about your location challenges</label>
                <textarea className="w-full bg-[#0b1c30]/50 border border-white/20 rounded-lg px-4 py-3 text-body-md font-body-md text-white focus:outline-none focus:border-secondary transition-colors resize-y" id="challenges" name="challenges" placeholder="Describe the spatial data problems you are trying to solve..." rows={4}></textarea>
              </div>
              <div className="pt-4">
                <button className="w-full md:w-auto px-8 py-4 rounded-lg bg-secondary hover:bg-[#93000b] text-white text-label-md font-label-md font-bold flex items-center justify-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(187,1,18,0.39)] hover:shadow-[0_6px_20px_rgba(187,1,18,0.5)] transform hover:-translate-y-px" type="submit">
                  Submit Inquiry
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
