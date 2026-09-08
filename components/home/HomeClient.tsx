import React from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/shared/Button";
import Icon from "@/components/shared/Icon";

const QUESTIONS = [
  {
    icon: "pin" as const,
    q: "Where do my best customers actually live?",
    a: "Your customer list already knows. Mapped, it shows the neighborhoods worth defending and the ones you are quietly winning.",
  },
  {
    icon: "explore" as const,
    q: "Which streets am I driving past?",
    a: "Service routes cluster around habit, not opportunity. We find the households inside your radius that you have never quoted.",
  },
  {
    icon: "storefront" as const,
    q: "Where should the next location go?",
    a: "Revenue clustering, drive-time coverage, and demographic fit — scored against real competitor positions, not a gut call.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Send us your customer list",
    body: "A spreadsheet export is enough. Names, addresses, and whatever revenue data you keep. No integration, no software to install.",
  },
  {
    n: "2",
    title: "We map and analyze it",
    body: "We geocode your customers and layer in demographics, property data, and competitor locations from public sources.",
  },
  {
    n: "3",
    title: "You get a decision, not a dashboard",
    body: "A walkthrough of what the map shows and where the opportunity is — in plain language, with the specific areas worth your next dollar.",
  },
];

const SERVICES = [
  {
    icon: "map" as const,
    title: "Interactive customer maps",
    body: "See density and distribution patterns that a spreadsheet cannot show you.",
  },
  {
    icon: "groups" as const,
    title: "Demographic targeting",
    body: "Overlay income and household data to find your high-value segments.",
  },
  {
    icon: "trendingUp" as const,
    title: "Expansion zone analysis",
    body: "Score potential locations on revenue clustering and market fit.",
  },
  {
    icon: "radar" as const,
    title: "Competitor intelligence",
    body: "Map competitor positions and find the gaps they have left open.",
  },
];

export default function HomeClient() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section
        className="flex flex-col justify-center px-gutter py-20 md:py-28 relative bg-midnight-navy overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.94) 20%, rgba(15, 23, 42, 0.5) 100%), url("/images/home-hero-map.png")`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        <div className="w-full max-w-container-max mx-auto">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-label-sm font-label-sm border border-white/20 mb-6 backdrop-blur-md">
              Location intelligence for local business
            </span>

            <h1
              className="text-display-lg font-display-lg text-white mb-6"
              style={{ textShadow: "rgba(0, 0, 0, 0.8) 0px 2px 4px" }}
            >
              Your customer list is a map. You just haven&apos;t seen it yet.
            </h1>

            <p className="text-body-lg font-body-lg text-white/80 mb-10 leading-relaxed max-w-xl">
              We turn the customer data you already have into geographic
              insight — so you know which neighborhoods to work, where to
              expand, and where your marketing money is being wasted.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <ButtonLink href="/contact" size="lg">
                Book a consultation
<Icon name="arrowRight" size={18} />
              </ButtonLink>
              <ButtonLink href="/demo" variant="onDark" size="lg">
                See a live demo
              </ButtonLink>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/70 text-label-sm font-label-sm">
              <span className="flex items-center gap-1.5">
<Icon name="check" size={16} className="text-white/50" />
                No software to install
              </span>
              <span className="flex items-center gap-1.5">
<Icon name="check" size={16} className="text-white/50" />
                Works with a spreadsheet export
              </span>
              <span className="flex items-center gap-1.5">
<Icon name="check" size={16} className="text-white/50" />
                Built for small operators
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Questions we answer ---------- */}
      <section className="px-gutter py-20 md:py-24 bg-background">
        <div className="w-full max-w-container-max mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4">
              The questions your spreadsheet can&apos;t answer
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Most local businesses are sitting on years of address data and
              have never once looked at it geographically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {QUESTIONS.map((item) => (
              <div
                key={item.q}
                className="soft-ui-card rounded-xl p-8 flex flex-col gap-4"
              >
<Icon name={item.icon} size={32} className="text-secondary" />
                <h3 className="text-headline-md font-headline-md text-on-surface">
                  {item.q}
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="px-gutter py-20 md:py-24 bg-surface-container-low border-y border-outline-variant/30">
        <div className="w-full max-w-container-max mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4">
              How it works
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Three steps, and none of them are your problem to solve.
            </p>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {STEPS.map((step) => (
              <li key={step.n} className="flex flex-col gap-3">
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-9 h-9 shrink-0 rounded-full bg-secondary text-white flex items-center justify-center text-label-md font-label-md font-bold">
                    {step.n}
                  </span>
                  <div className="h-px flex-1 bg-outline-variant/50" />
                </div>
                <h3 className="text-headline-md font-headline-md text-on-surface">
                  {step.title}
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Services teaser ---------- */}
      <section className="px-gutter py-20 md:py-24 bg-background">
        <div className="w-full max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div className="max-w-2xl">
              <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4">
                What we build for you
              </h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant">
                Four analyses that turn location into a decision you can act on
                this quarter.
              </p>
            </div>
            <Link
              href="/services"
              className="text-label-md font-label-md font-bold text-secondary hover:underline whitespace-nowrap shrink-0"
            >
              All services
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="soft-ui-card rounded-xl p-6 flex flex-col gap-3"
              >
<Icon name={service.icon} size={28} className="text-secondary" />
                <h3 className="text-headline-md font-headline-md text-on-surface">
                  {service.title}
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  {service.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <section className="px-gutter py-20 md:py-24 bg-midnight-navy">
        <div className="w-full max-w-container-max mx-auto text-center max-w-2xl">
          <h2 className="text-headline-lg font-headline-lg text-white mb-4">
            See what your data looks like on a map
          </h2>
          <p className="text-body-lg font-body-lg text-white/75 mb-10">
            Tell us about your business and what you&apos;re trying to figure
            out. We reply within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink href="/contact" size="lg">
              Book a consultation
<Icon name="arrowRight" size={18} />
            </ButtonLink>
            <ButtonLink href="/demo" variant="onDark" size="lg">
              Explore the demo first
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
