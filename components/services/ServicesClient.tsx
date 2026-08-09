"use client";

import React from 'react';

export default function ServicesClient() {
  return (
    <main className="flex-grow flex flex-col lg:flex-row w-full max-w-container-max mx-auto px-gutter py-8 gap-8 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
        <img 
          src="https://lh3.googleusercontent.com/aida/AP1WRLvovg4WAHxO5kzAdCWjXJy4r4IFQVx-ogQv8LY-mehc9itARaQH04dK7H-LMgAcf5JIqYkupr3FWbNxlyavPu0vG6HKFVOsWX5GMZyAGyV0YE6law7ET3GNT2lwBn9uINuaZLh7MjZ8slSVvDF_GKjnnIQ1LfuR_2X-w0ktcTyLTxGQX2OXavg6vs-F0xumqtM8zggiO6i0QHnEBX-NirCnQlzgkq5fMDthoFWHdNLph_BZz_6cgCKogHQu" 
          className="w-full h-full object-cover opacity-40" 
          alt="Spatial Analytics Background" 
        />
      </div>
      {/* Left Column: Services Canvas */}
      <section className="flex-1 flex flex-col gap-8 w-full lg:w-2/3">
        <div className="text-center lg:text-left mb-4">
          <h1 className="text-display-lg font-display-lg text-primary mb-2">Our Services</h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">Advanced spatial intelligence solutions designed to accelerate growth and optimize market positioning.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="soft-ui-card rounded-xl p-8 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary mb-2">
              <img src="https://lh3.googleusercontent.com/aida/AP1WRLtAT6siEuC87fhBlYnCrJ3Q4fTTsR5lgNHbjGhHtjpGHW0BK0UH-gccnRMxQleNDspuL5fJxwxPoWi1t6zjzD9uW_MJccmqkgeaYbjSY7cirGJioCH_BmUfAmLb2EiAtH1jcARUqa4Oq-Z1r0FunG9vfesspzmY2vpAGqAsJwhMXODEQ5dNBTS05n9eANACtU_1vgsD6ZOR7L8qbHay1D-HWkBukbZP_CEeikHNJE6fTisgDnBT2azhSD3H" className="w-8 h-8 object-contain" alt="Interactive Maps Icon" />
            </div>
            <h3 className="text-headline-md font-headline-md text-on-surface">Interactive Customer Maps</h3>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Visualize customer density and distribution patterns with dynamic, interactive maps that reveal hidden opportunities in your market area.
            </p>
          </div>
          {/* Card 2 */}
          <div className="soft-ui-card rounded-xl p-8 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary mb-2">
              <img src="https://lh3.googleusercontent.com/aida/AP1WRLuN8o0N8VWXs4pyJh_g5ShgujfBmReA6Ts-jC7ch3qnPRCCH2GfOA3kyLrNTBycZHJ__32mXOiVrO3W2Jwr1GFsKUNKNj9SqKD4SfXjQKh4KX11tXF0O-ZhYNoNEYCzsPQU01-8U49tKjLzn6AfNV7b64N5oS9GNW3FidhHjCD03vmXFJeEKVmj9bcxakbzSj0-GyA6-iqq3Db4U_PaKjUd6KHvpQ9U_tFgCwEUwx_nT4aIRB7spqr0ecA" className="w-8 h-8 object-contain" alt="Demographic Targeting Icon" />
            </div>
            <h3 className="text-headline-md font-headline-md text-on-surface">Demographic Targeting</h3>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Overlay income levels and demographic data to identify high-value customer segments and optimize your marketing efforts.
            </p>
          </div>
          {/* Card 3 */}
          <div className="soft-ui-card rounded-xl p-8 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary mb-2">
              <img src="https://lh3.googleusercontent.com/aida/AP1WRLumPpPDKKdW-Ze9val3X-HqGinnqPpGR_6FJL-2WssOorCS7Tz_TDyw_rSGeBUg2o_UdunFGbbwyLTSsX87eQDW2Cf5a5aM7luykpGgmisSyMXVgjV_-blUh2_KBVbsAbYPgu9SLf8PIUXO5nDu8MGsHurHZDRcP8Qe7lDWU6YXkfglbdK8NqoLL4HhDPax_VJDtb3cFGXvmfxkevp-1Zuh2MK0P80RnOipeOsGoPyIXLp8xgHsSEURHCM" className="w-8 h-8 object-contain" alt="Expansion Zone Icon" />
            </div>
            <h3 className="text-headline-md font-headline-md text-on-surface">Expansion Zone Analysis</h3>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Discover optimal locations for business expansion based on revenue clustering, demographic fit, and market opportunity analysis.
            </p>
          </div>
          {/* Card 4 */}
          <div className="soft-ui-card rounded-xl p-8 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary mb-2">
              <img src="https://lh3.googleusercontent.com/aida/AP1WRLttqxNBIRTdAldN7J4-ssRLWApds0BKtVO_WYk0PkvL5BrOe6OCVvKs5zVZybdiTbUb9utgukumMZnJygZhBdGhzOeexSeVFaoOPiWVKI-JpYv162WCQci35NiM3S0Kooi8UuAyPpUF4eVagVxrbriStu7bco-SAjGF9HAP2BT8qexEUJZ9wws_lrt50VFQ6ssQ0EGKCvsjmV0zKYhXxUjOWp-Y-1m3jQXIwaM4NByLjj0Th85dzWIjmCTv" className="w-8 h-8 object-contain" alt="Competitor Intelligence Icon" />
            </div>
            <h3 className="text-headline-md font-headline-md text-on-surface">Competitor Intelligence</h3>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Analyze competitor locations and market positioning using comprehensive public data sources and location intelligence.
            </p>
          </div>
        </div>
      </section>
      {/* Right Column: Demo Panel / Dashboard Teaser */}
      <aside className="w-full lg:w-1/3 hidden lg:flex flex-col relative overflow-hidden rounded-xl border border-outline-variant/30">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 mt-auto p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-headline-md font-headline-md text-on-surface mb-2 [text-shadow:_0_1px_2px_rgb(255_255_255_/_40%)]">Experience Spatial Intelligence</h3>
            <p className="text-body-md text-on-surface-variant mb-6 [text-shadow:_0_1px_1px_rgb(255_255_255_/_30%)]">Unlock deep market insights with our high-fidelity spatial analytics engine.</p>
            <button className="w-full py-4 bg-gradient-to-b from-secondary to-[#DC2626] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-label-md font-semibold flex items-center justify-center gap-2 active:scale-95">
              Request Full Demo
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </aside>
    </main>
  );
}
