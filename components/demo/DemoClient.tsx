"use client";

import React from 'react';

export default function DemoClient() {
  return (
    <main className="flex-1 flex flex-col md:flex-row overflow-hidden min-h-[calc(100vh-80px)]">
      {/* Left Column: Interactive Demo Selection */}
      <section className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto no-scrollbar bg-surface flex flex-col items-center">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-display-lg font-display-lg text-on-surface mb-4">Interactive Demo</h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant">Click on any industry below to see a live demo of our analytics dashboard</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 (Active) */}
            <div className="soft-ui-card active rounded-xl p-6 cursor-pointer transform transition-transform hover:scale-[1.02] border-secondary shadow-[inset_0_2px_0_0_rgba(255,255,255,0.8),_0_12px_48px_0_rgba(239,68,68,0.1)]">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1FuiAfMXYycpwtBQd9ONKDCDobegtuv1vEcL42lEV8hmOi02QpkuGLj55-PVk1ILfmLMFmWCQ_5Rn1Tzm3oso4cDCM1cP-qJcfECVgR8189ve8V3f2fZ9X9AQH4BJjodeeclpRgAxx7EGed49M5TgAlElB_mufyf2YycJsxh-9xNXC4lh92awv8-9VY_nTmfYY-IgxFpZglw6VfsOyHJhF0ApRrL0wG6Kj8LDxF85dEY0LC4CqxqLZg" alt="Landscaping Services Icon" className="w-12 h-12 mb-4 block object-contain" />
              <h3 className="text-headline-md font-headline-md mb-2">Landscaping Services</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">Seasonal demand mapping, property value correlation, and service area optimization for landscaping businesses.</p>
            </div>
            {/* Card 2 */}
            <div className="soft-ui-card rounded-xl p-6 cursor-pointer transform transition-transform hover:scale-[1.02]">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIBVNbvyAYeCv3avTMEyVXef5t0zWH0fpzGLgYnw3RDXvSePS-bE5yNnRjfues6nQqjz3arDvstL4eSEbjBd6d5zOYw1UMZKesu4m9wej7sxX_cw89iD0I1VWrSWv7Czwwc3N3088IDmn5fbVIjLevUKkn5CBooFlARf1VWKQjGLqH3FcUHpEo52rXWpXxGD8PaF1MS0kUrfxhlImeYpLwvtdNFEwTBh43YBx8i6uheZmfseFfE3AZ4Q" alt="HVAC Services Icon" className="w-12 h-12 mb-4 block object-contain" />
              <h3 className="text-headline-md font-headline-md mb-2">HVAC Services</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">Climate zone analysis, emergency service mapping, and residential density targeting for HVAC companies.</p>
            </div>
            {/* Card 3 */}
            <div className="soft-ui-card rounded-xl p-6 cursor-pointer transform transition-transform hover:scale-[1.02]">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdXFXsYuFVu6XBMMGuwevoAzFgwVengDj58-dMqQitDFAViruzdLKH3xckjRnVCpYD7W0klOI4Xb3ADrW_Rxt8_bBG32txjPH3B-ZGr1NeOXgW3SIaOYYBdNvFmw5Sz62rfnh97Eki2U9681G4_Ki2aEBx2R-za6tI1fnBF6nh5iJn57DZwe_l_eGIgtHlLkpokFqLM8sqM0BqZeqRzppgkbLvmXP0-2ChpiRnjnCmNI6ec6nYu8nVPA" alt="Coffee Shop Icon" className="w-12 h-12 mb-4 block object-contain" />
              <h3 className="text-headline-md font-headline-md mb-2">Coffee Shop</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">Foot traffic analysis, competitor proximity mapping, and demographic targeting for retail coffee.</p>
            </div>
            {/* Card 4 */}
            <div className="soft-ui-card rounded-xl p-6 cursor-pointer transform transition-transform hover:scale-[1.02]">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjtviHzZBflKl4Tjt0UyfLZ_oWm9woWTUD1S-YoSC1zvfvqWIBcUfnBQNkIbS8pI02NdGevezb3hr7r_IlzcZvid53ir-gZQH8gBI_-R8pSTYReP35mJW7SJNVtLSUIdhts_WWmf0YFCIavvQFTLcDgN5AHbQDL1wSfFxNg6pMgYd155fxB97l1BcnnNnl-PPBLALfQwA1IFXimg0weKxndf_0hZOcezFn_8_ZC8nq89X9-gMBNZeAVQ" alt="Youth Sports Icon" className="w-12 h-12 mb-4 block object-contain" />
              <h3 className="text-headline-md font-headline-md mb-2">Youth Sports</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">Family demographic targeting, facility accessibility analysis, and program expansion opportunities.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Right Column: Demo Panel (Dashboard UI) */}
      <section className="w-full md:w-1/2 bg-surface-container-low border-l border-outline-variant/30 flex flex-col relative shadow-[-8px_0_32px_0_rgba(0,0,0,0.02)]">
        {/* Dashboard Header */}
        <div className="bg-primary-container text-on-primary-fixed py-4 px-6 border-b border-white/10 flex justify-center items-center shrink-0">
          <h2 className="text-label-md font-label-md font-bold tracking-wide">Landscaping Services Dashboard</h2>
        </div>
        {/* Dashboard Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-6 lg:p-8 flex flex-col gap-6">
          {/* Map Widget */}
          <div className="soft-ui-card rounded-xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined">map</span>
              <h3 className="text-headline-md font-headline-md text-on-surface">Customer Distribution Map</h3>
            </div>
            {/* Map Container (Simulated) */}
            <div className="relative w-full h-[300px] rounded-lg border border-outline-variant/50 overflow-hidden bg-primary-container">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkAzUA7VykixeNcnz6HfeXCaNQRBJoXzdZJeLNYWnSWUDov7tjCEmUrgkmK0moWDW6259Lx_FUd4U6sKxIltbzsbhEnx0HYVvk8h9VDHKXcEnUAPVRYVs_yYf9uc6APXUdukGzJuRAvyLBOLnw3SCjM9snBvsP6cX6jUknR3aNlpGza1K4KOBi6aZC_-TvRjxSzc3hoZkUE16_rG9N_OfEMGQi7b0q1i80cda8itCjYN7ycIH58BkZ3g" alt="Customer Density Heatmap" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 right-4 flex gap-2 z-10">
                <button className="bg-secondary text-on-secondary px-4 py-2 rounded text-label-sm font-label-sm shadow-md">Customer Density</button>
                <button className="glass-panel text-on-surface px-4 py-2 rounded text-label-sm font-label-sm hover:bg-surface-container-high transition-colors shadow-sm">Property Values</button>
                <button className="glass-panel text-on-surface px-4 py-2 rounded text-label-sm font-label-sm hover:bg-surface-container-high transition-colors shadow-sm">Seasonal Demand</button>
              </div>
            </div>
            {/* Map KPIs */}
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex justify-between items-center py-2 border-b border-outline-variant/20">
                <span className="text-body-md font-body-md text-on-surface-variant">Active Customers</span>
                <span className="text-label-md font-label-md text-secondary font-bold">1,242</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-outline-variant/20">
                <span className="text-body-md font-body-md text-on-surface-variant">Service Radius</span>
                <span className="text-label-md font-label-md text-secondary font-bold">15 miles</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-body-md font-body-md text-on-surface-variant">Peak Season</span>
                <span className="text-label-md font-label-md text-secondary font-bold">Spring/Summer</span>
              </div>
            </div>
          </div>
          {/* Revenue Widget */}
          <div className="soft-ui-card rounded-xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined">attach_money</span>
              <h3 className="text-headline-md font-headline-md text-on-surface">Revenue by ZIP Code</h3>
            </div>
            {/* Simulated Chart */}
            <div className="h-[200px] w-full flex flex-col justify-end pt-4">
              <div className="text-center text-label-sm font-label-sm text-on-surface-variant mb-4">Monthly Revenue Trends</div>
              <div className="flex justify-around items-end h-full w-full px-4 gap-2">
                {/* Bars */}
                <div className="flex flex-col items-center gap-1 w-full max-w-[40px]">
                  <span className="text-[10px] text-on-surface-variant">$28K</span>
                  <div className="w-full bg-surface-container-high rounded-t-md h-12"></div>
                  <span className="text-[10px] text-on-surface-variant">Mar</span>
                </div>
                <div className="flex flex-col items-center gap-1 w-full max-w-[40px]">
                  <span className="text-[10px] text-on-surface-variant">$42K</span>
                  <div className="w-full bg-secondary-fixed-dim rounded-t-md h-20"></div>
                  <span className="text-[10px] text-on-surface-variant">Apr</span>
                </div>
                <div className="flex flex-col items-center gap-1 w-full max-w-[40px]">
                  <span className="text-[10px] text-secondary font-bold">$51K</span>
                  <div className="w-full bg-secondary rounded-t-md h-28 shadow-[0_0_12px_rgba(239,68,68,0.3)]"></div>
                  <span className="text-[10px] text-on-surface-variant font-bold">May</span>
                </div>
                <div className="flex flex-col items-center gap-1 w-full max-w-[40px]">
                  <span className="text-[10px] text-on-surface-variant">$48K</span>
                  <div className="w-full bg-secondary-fixed-dim rounded-t-md h-24"></div>
                  <span className="text-[10px] text-on-surface-variant">Jun</span>
                </div>
                <div className="flex flex-col items-center gap-1 w-full max-w-[40px]">
                  <span className="text-[10px] text-on-surface-variant">$36K</span>
                  <div className="w-full bg-surface-container-high rounded-t-md h-16"></div>
                  <span className="text-[10px] text-on-surface-variant">Jul</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
