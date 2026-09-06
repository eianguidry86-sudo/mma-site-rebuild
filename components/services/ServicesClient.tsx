import React from "react";
import { ButtonLink } from "@/components/shared/Button";
import Icon from "@/components/shared/Icon";

const SERVICES = [
  {
    icon: "map" as const,
    title: "Interactive customer maps",
    body: "Visualize customer density and distribution patterns with dynamic maps that reveal opportunities hiding in your service area.",
    detail: [
      "Every customer geocoded and plotted",
      "Density heatmaps by revenue, not just count",
      "Service-radius and drive-time coverage",
    ],
  },
  {
    icon: "groups" as const,
    title: "Demographic targeting",
    body: "Overlay income levels and household data to identify high-value customer segments and stop spending on the wrong neighborhoods.",
    detail: [
      "Census and household income overlays",
      "Segment profiles built from your actual customers",
      "Look-alike areas you haven't reached yet",
    ],
  },
  {
    icon: "trendingUp" as const,
    title: "Expansion zone analysis",
    body: "Find where the next location or service area should go, scored on revenue clustering, demographic fit, and market opportunity.",
    detail: [
      "Candidate zones ranked, not just listed",
      "Cannibalization risk against your current base",
      "Drive-time modeling from proposed sites",
    ],
  },
  {
    icon: "radar" as const,
    title: "Competitor intelligence",
    body: "Map competitor locations and market positioning using public data sources to find the gaps they've left open.",
    detail: [
      "Competitor locations mapped against yours",
      "Underserved pockets inside your radius",
      "Saturation scoring by area",
    ],
  },
];

export default function ServicesClient() {
  return (
    <>
      {/* ---------- Header ---------- */}
      <section className="px-gutter py-20 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60 z-10" />
          <img
            src="https://lh3.googleusercontent.com/aida/AP1WRLvovg4WAHxO5kzAdCWjXJy4r4IFQVx-ogQv8LY-mehc9itARaQH04dK7H-LMgAcf5JIqYkupr3FWbNxlyavPu0vG6HKFVOsWX5GMZyAGyV0YE6law7ET3GNT2lwBn9uINuaZLh7MjZ8slSVvDF_GKjnnIQ1LfuR_2X-w0ktcTyLTxGQX2OXavg6vs-F0xumqtM8zggiO6i0QHnEBX-NirCnQlzgkq5fMDthoFWHdNLph_BZz_6cgCKogHQu"
            className="w-full h-full object-cover opacity-30"
            alt=""
          />
        </div>

        <div className="w-full max-w-container-max mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-display-lg font-display-lg text-on-surface mb-4">
              Our services
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Four analyses that turn the customer data you already have into
              decisions about where to work, where to spend, and where to grow.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Service cards ---------- */}
      <section className="px-gutter pb-20 md:pb-24 bg-background">
        <div className="w-full max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="soft-ui-card rounded-xl p-8 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
<Icon name={service.icon} size={24} className="text-secondary" />
                </div>
                <h2 className="text-headline-md font-headline-md text-on-surface">
                  {service.title}
                </h2>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  {service.body}
                </p>
                <ul className="flex flex-col gap-2 mt-1 pt-4 border-t border-outline-variant/30">
                  {service.detail.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2 text-body-md font-body-md text-on-surface-variant"
                    >
<Icon name="check" size={18} className="text-secondary mt-0.5" />
                      {line}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <section className="px-gutter py-20 md:py-24 bg-midnight-navy">
        <div className="w-full max-w-container-max mx-auto text-center max-w-2xl">
          <h2 className="text-headline-lg font-headline-lg text-white mb-4">
            Not sure which one you need?
          </h2>
          <p className="text-body-lg font-body-lg text-white/75 mb-10">
            Most engagements start with a single map and a conversation about
            what it shows. Tell us what you&apos;re trying to figure out.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink href="/contact" size="lg">
              Book a consultation
<Icon name="arrowRight" size={18} />
            </ButtonLink>
            <ButtonLink href="/demo" variant="onDark" size="lg">
              See the live demo
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
