"use client";

import React, { useState } from "react";
import { ButtonLink } from "@/components/shared/Button";
import Icon from "@/components/shared/Icon";

type Industry = {
  id: string;
  name: string;
  icon: string;
  blurb: string;
  mapImage: string;
  layers: [string, string, string];
  kpis: [string, string][];
  chartLabel: string;
  bars: { label: string; value: string; height: number }[];
  peakIndex: number;
};

const INDUSTRIES: Industry[] = [
  {
    id: "landscaping",
    name: "Landscaping Services",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1FuiAfMXYycpwtBQd9ONKDCDobegtuv1vEcL42lEV8hmOi02QpkuGLj55-PVk1ILfmLMFmWCQ_5Rn1Tzm3oso4cDCM1cP-qJcfECVgR8189ve8V3f2fZ9X9AQH4BJjodeeclpRgAxx7EGed49M5TgAlElB_mufyf2YycJsxh-9xNXC4lh92awv8-9VY_nTmfYY-IgxFpZglw6VfsOyHJhF0ApRrL0wG6Kj8LDxF85dEY0LC4CqxqLZg",
    blurb:
      "Seasonal demand mapping, property value correlation, and service area optimization for landscaping businesses.",
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkAzUA7VykixeNcnz6HfeXCaNQRBJoXzdZJeLNYWnSWUDov7tjCEmUrgkmK0moWDW6259Lx_FUd4U6sKxIltbzsbhEnx0HYVvk8h9VDHKXcEnUAPVRYVs_yYf9uc6APXUdukGzJuRAvyLBOLnw3SCjM9snBvsP6cX6jUknR3aNlpGza1K4KOBi6aZC_-TvRjxSzc3hoZkUE16_rG9N_OfEMGQi7b0q1i80cda8itCjYN7ycIH58BkZ3g",
    layers: ["Customer density", "Property values", "Seasonal demand"],
    kpis: [
      ["Active customers", "1,242"],
      ["Service radius", "15 miles"],
      ["Peak season", "Spring/Summer"],
    ],
    chartLabel: "Monthly revenue trends",
    bars: [
      { label: "Mar", value: "$28K", height: 48 },
      { label: "Apr", value: "$42K", height: 80 },
      { label: "May", value: "$51K", height: 112 },
      { label: "Jun", value: "$48K", height: 96 },
      { label: "Jul", value: "$36K", height: 64 },
    ],
    peakIndex: 2,
  },
  {
    id: "hvac",
    name: "HVAC Services",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIBVNbvyAYeCv3avTMEyVXef5t0zWH0fpzGLgYnw3RDXvSePS-bE5yNnRjfues6nQqjz3arDvstL4eSEbjBd6d5zOYw1UMZKesu4m9wej7sxX_cw89iD0I1VWrSWv7Czwwc3N3088IDmn5fbVIjLevUKkn5CBooFlARf1VWKQjGLqH3FcUHpEo52rXWpXxGD8PaF1MS0kUrfxhlImeYpLwvtdNFEwTBh43YBx8i6uheZmfseFfE3AZ4Q",
    blurb:
      "Climate zone analysis, emergency service mapping, and residential density targeting for HVAC companies.",
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkAzUA7VykixeNcnz6HfeXCaNQRBJoXzdZJeLNYWnSWUDov7tjCEmUrgkmK0moWDW6259Lx_FUd4U6sKxIltbzsbhEnx0HYVvk8h9VDHKXcEnUAPVRYVs_yYf9uc6APXUdukGzJuRAvyLBOLnw3SCjM9snBvsP6cX6jUknR3aNlpGza1K4KOBi6aZC_-TvRjxSzc3hoZkUE16_rG9N_OfEMGQi7b0q1i80cda8itCjYN7ycIH58BkZ3g",
    layers: ["Service calls", "Home age", "Emergency response"],
    kpis: [
      ["Active accounts", "2,870"],
      ["Avg. response time", "42 min"],
      ["Peak season", "Summer/Winter"],
    ],
    chartLabel: "Monthly service volume",
    bars: [
      { label: "May", value: "310", height: 56 },
      { label: "Jun", value: "480", height: 88 },
      { label: "Jul", value: "615", height: 116 },
      { label: "Aug", value: "590", height: 104 },
      { label: "Sep", value: "395", height: 68 },
    ],
    peakIndex: 2,
  },
  {
    id: "coffee",
    name: "Coffee Shop",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdXFXsYuFVu6XBMMGuwevoAzFgwVengDj58-dMqQitDFAViruzdLKH3xckjRnVCpYD7W0klOI4Xb3ADrW_Rxt8_bBG32txjPH3B-ZGr1NeOXgW3SIaOYYBdNvFmw5Sz62rfnh97Eki2U9681G4_Ki2aEBx2R-za6tI1fnBF6nh5iJn57DZwe_l_eGIgtHlLkpokFqLM8sqM0BqZeqRzppgkbLvmXP0-2ChpiRnjnCmNI6ec6nYu8nVPA",
    blurb:
      "Foot traffic analysis, competitor proximity mapping, and demographic targeting for retail coffee.",
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkAzUA7VykixeNcnz6HfeXCaNQRBJoXzdZJeLNYWnSWUDov7tjCEmUrgkmK0moWDW6259Lx_FUd4U6sKxIltbzsbhEnx0HYVvk8h9VDHKXcEnUAPVRYVs_yYf9uc6APXUdukGzJuRAvyLBOLnw3SCjM9snBvsP6cX6jUknR3aNlpGza1K4KOBi6aZC_-TvRjxSzc3hoZkUE16_rG9N_OfEMGQi7b0q1i80cda8itCjYN7ycIH58BkZ3g",
    layers: ["Foot traffic", "Competitors", "Daytime population"],
    kpis: [
      ["Daily transactions", "684"],
      ["Competitors within 1 mi", "7"],
      ["Peak hours", "7–10 AM"],
    ],
    chartLabel: "Average daily traffic by weekday",
    bars: [
      { label: "Mon", value: "540", height: 64 },
      { label: "Tue", value: "610", height: 76 },
      { label: "Wed", value: "655", height: 84 },
      { label: "Thu", value: "690", height: 92 },
      { label: "Fri", value: "845", height: 116 },
    ],
    peakIndex: 4,
  },
  {
    id: "youth-sports",
    name: "Youth Sports",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjtviHzZBflKl4Tjt0UyfLZ_oWm9woWTUD1S-YoSC1zvfvqWIBcUfnBQNkIbS8pI02NdGevezb3hr7r_IlzcZvid53ir-gZQH8gBI_-R8pSTYReP35mJW7SJNVtLSUIdhts_WWmf0YFCIavvQFTLcDgN5AHbQDL1wSfFxNg6pMgYd155fxB97l1BcnnNnl-PPBLALfQwA1IFXimg0weKxndf_0hZOcezFn_8_ZC8nq89X9-gMBNZeAVQ",
    blurb:
      "Family demographic targeting, facility accessibility analysis, and program expansion opportunities.",
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkAzUA7VykixeNcnz6HfeXCaNQRBJoXzdZJeLNYWnSWUDov7tjCEmUrgkmK0moWDW6259Lx_FUd4U6sKxIltbzsbhEnx0HYVvk8h9VDHKXcEnUAPVRYVs_yYf9uc6APXUdukGzJuRAvyLBOLnw3SCjM9snBvsP6cX6jUknR3aNlpGza1K4KOBi6aZC_-TvRjxSzc3hoZkUE16_rG9N_OfEMGQi7b0q1i80cda8itCjYN7ycIH58BkZ3g",
    layers: ["Family density", "Drive time", "Program gaps"],
    kpis: [
      ["Enrolled athletes", "418"],
      ["Families within 20 min", "6,300"],
      ["Peak season", "Fall/Spring"],
    ],
    chartLabel: "Enrollment by season",
    bars: [
      { label: "Win", value: "210", height: 48 },
      { label: "Spr", value: "365", height: 88 },
      { label: "Sum", value: "290", height: 68 },
      { label: "Fall", value: "418", height: 112 },
      { label: "Win", value: "245", height: 56 },
    ],
    peakIndex: 3,
  },
];

export default function DemoClient() {
  const [activeId, setActiveId] = useState(INDUSTRIES[0].id);
  const [activeLayer, setActiveLayer] = useState(0);

  const active = INDUSTRIES.find((i) => i.id === activeId) ?? INDUSTRIES[0];

  function selectIndustry(id: string) {
    setActiveId(id);
    setActiveLayer(0);
  }

  return (
    <div className="flex-1 flex flex-col md:flex-row min-h-[calc(100vh-80px)]">
      {/* Left: industry picker */}
      <section className="w-full md:w-1/2 p-8 md:p-12 bg-surface flex flex-col items-center">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-display-lg font-display-lg text-on-surface mb-4">
              Interactive demo
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Pick an industry to see the kind of dashboard we build from your
              customer data.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            role="tablist"
            aria-label="Industries"
          >
            {INDUSTRIES.map((industry) => {
              const isActive = industry.id === activeId;
              return (
                <button
                  key={industry.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="demo-dashboard"
                  onClick={() => selectIndustry(industry.id)}
                  className={`soft-ui-card rounded-xl p-6 text-left cursor-pointer transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${
                    isActive
                      ? "ring-2 ring-secondary border-secondary shadow-[0_12px_48px_0_rgba(187,1,18,0.14)]"
                      : "hover:border-outline"
                  }`}
                >
                  <img
                    src={industry.icon}
                    alt=""
                    className="w-12 h-12 mb-4 block object-contain"
                  />
                  <h2 className="text-headline-md font-headline-md mb-2 text-on-surface">
                    {industry.name}
                  </h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    {industry.blurb}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Conversion path out of the demo */}
          <div className="mt-12 rounded-xl border border-outline-variant/40 bg-surface-container-low p-6 text-center">
            <h2 className="text-headline-md font-headline-md text-on-surface mb-2">
              Want this built from your own data?
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mb-5">
              Send us your customer list and we&apos;ll map it. No software to
              install.
            </p>
            <ButtonLink href="/contact" size="lg">
              Book a consultation
<Icon name="arrowRight" size={18} />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Right: dashboard */}
      <section
        id="demo-dashboard"
        role="tabpanel"
        aria-label={`${active.name} dashboard`}
        className="w-full md:w-1/2 bg-surface-container-low border-t md:border-t-0 md:border-l border-outline-variant/30 flex flex-col relative"
      >
        <div className="bg-midnight-navy text-white py-4 px-6 border-b border-white/10 flex justify-center items-center shrink-0 md:sticky md:top-[72px] z-10">
          <h2 className="text-label-md font-label-md font-bold tracking-wide">
            {active.name} dashboard
          </h2>
        </div>

        <div className="flex-1 p-6 lg:p-8 flex flex-col gap-6">
          {/* Map widget */}
          <div className="soft-ui-card rounded-xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-on-surface">
<Icon name="map" size={22} className="text-secondary" />
              <h3 className="text-headline-md font-headline-md text-on-surface">
                Customer distribution map
              </h3>
            </div>

            <div className="relative w-full h-[300px] rounded-lg border border-outline-variant/50 overflow-hidden bg-primary-container">
              <img
                src={active.mapImage}
                alt={`${active.name} customer density heatmap`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2 z-10">
                {active.layers.map((layer, i) => (
                  <button
                    key={layer}
                    onClick={() => setActiveLayer(i)}
                    aria-pressed={activeLayer === i}
                    className={
                      activeLayer === i
                        ? "bg-secondary text-white px-4 py-2 rounded text-label-sm font-label-sm shadow-md transition-colors"
                        : "glass-panel text-on-surface px-4 py-2 rounded text-label-sm font-label-sm hover:bg-surface-container-high transition-colors shadow-sm"
                    }
                  >
                    {layer}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              {active.kpis.map(([label, value], i) => (
                <div
                  key={label}
                  className={`flex justify-between items-center py-2 ${
                    i < active.kpis.length - 1
                      ? "border-b border-outline-variant/20"
                      : ""
                  }`}
                >
                  <span className="text-body-md font-body-md text-on-surface-variant">
                    {label}
                  </span>
                  <span className="text-label-md font-label-md text-secondary font-bold">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart widget */}
          <div className="soft-ui-card rounded-xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-on-surface">
<Icon name="barChart" size={22} className="text-secondary" />
              <h3 className="text-headline-md font-headline-md text-on-surface">
                {active.chartLabel}
              </h3>
            </div>

            <div className="h-[200px] w-full flex flex-col justify-end pt-4">
              <div className="flex justify-around items-end h-full w-full px-4 gap-2">
                {active.bars.map((bar, i) => {
                  const isPeak = i === active.peakIndex;
                  return (
                    <div
                      key={`${bar.label}-${i}`}
                      className="flex flex-col items-center gap-1 w-full max-w-[40px]"
                    >
                      <span
                        className={`text-[10px] ${
                          isPeak
                            ? "text-secondary font-bold"
                            : "text-on-surface-variant"
                        }`}
                      >
                        {bar.value}
                      </span>
                      <div
                        className={`w-full rounded-t-md transition-all duration-500 ${
                          isPeak
                            ? "bg-secondary shadow-[0_0_12px_rgba(187,1,18,0.3)]"
                            : "bg-secondary/30"
                        }`}
                        style={{ height: `${bar.height}px` }}
                      />
                      <span
                        className={`text-[10px] text-on-surface-variant ${
                          isPeak ? "font-bold" : ""
                        }`}
                      >
                        {bar.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-label-sm font-label-sm text-on-surface-variant text-center pt-2 border-t border-outline-variant/20">
              Sample data shown for illustration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
