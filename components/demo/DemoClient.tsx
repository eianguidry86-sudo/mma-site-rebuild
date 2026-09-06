"use client";

import React, { useState } from "react";
import { ButtonLink } from "@/components/shared/Button";
import Icon from "@/components/shared/Icon";

type Industry = {
  id: string;
  name: string;
  icon: "pin" | "radar" | "storefront" | "groups";
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
    icon: "pin" as const,
    blurb:
      "Seasonal demand mapping, property value correlation, and service area optimization for landscaping businesses.",
    mapImage: "/img/map-landscaping.svg",
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
    icon: "radar" as const,
    blurb:
      "Climate zone analysis, emergency service mapping, and residential density targeting for HVAC companies.",
    mapImage: "/img/map-hvac.svg",
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
    icon: "storefront" as const,
    blurb:
      "Foot traffic analysis, competitor proximity mapping, and demographic targeting for retail coffee.",
    mapImage: "/img/map-coffee.svg",
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
    icon: "groups" as const,
    blurb:
      "Family demographic targeting, facility accessibility analysis, and program expansion opportunities.",
    mapImage: "/img/map-youth-sports.svg",
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
                  <div className="w-12 h-12 mb-4 rounded-lg bg-surface-container-highest flex items-center justify-center">
                    <Icon name={industry.icon} size={24} className="text-secondary" />
                  </div>
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
                alt={`Customer density heatmap for a ${active.name.toLowerCase()} business`}
                className="w-full h-full object-cover"
                width={800}
                height={600}
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
