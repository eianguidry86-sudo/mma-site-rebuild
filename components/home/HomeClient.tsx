import React from "react";
import Link from "next/link";

export default function HomeClient() {
  return (
    <section
      className="flex-1 flex flex-col justify-center px-gutter py-16 md:py-24 relative bg-midnight-navy overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.92) 20%, rgba(15, 23, 42, 0.45) 100%), url("https://lh3.googleusercontent.com/aida/AP1WRLuutwCx9t7BRAAVKk1QF0i4AgFtIIMDIESoaeGTGHYHYDzwrCDOBcV806lt3_ZJAkNKVbx07ByrjASLTRJFpOyXYCWxIBZyaDlt_u2y5pWNNE5rJSGc7iI1M_mXCUlqqK1gw-wY20V687iagO3Q0qbDaUdsov009-MzsC0ruackqEso_VMCN3jBE2pIJ8pWfQ0hP2mxEFd2-3bgQZqwsPAdpJ7hOxQPkEDhws7RAq9bg6TFqp-rSavBHtE")`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
      }}
    >
      <div className="w-full max-w-container-max mx-auto">
        <div className="relative z-10 max-w-xl">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-label-sm font-label-sm border border-white/20 mb-6 backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
            Next-gen GIS platform
          </span>

          <h1
            className="text-display-lg font-display-lg text-white mb-6 font-bold"
            style={{ textShadow: "rgba(0, 0, 0, 0.8) 0px 2px 4px" }}
          >
            Data-driven location strategy for local businesses
          </h1>

          <p className="text-body-lg font-body-lg text-primary-fixed-dim mb-10 leading-relaxed">
            Transform your customer data into geographic insight. We help small
            businesses make smarter location decisions through interactive
            mapping, demographic analysis, and competitor intelligence.
          </p>

          <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md mb-8">
            <h2 className="text-headline-md font-headline-md text-white mb-2">
              Curious what growth opportunities are hiding in your data?
            </h2>
            <p className="text-body-md font-body-md text-primary-fixed-dim mb-6">
              Send us your customer list and we&apos;ll show you where your next
              customers are — before you spend a dollar finding out.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="bg-secondary hover:bg-[#93000b] text-white px-8 py-3 rounded-lg text-label-md font-label-md font-bold inline-flex items-center justify-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(187,1,18,0.39)] hover:shadow-[0_6px_20px_rgba(187,1,18,0.5)] hover:-translate-y-px"
              >
                Book a consultation
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/demo"
                className="border border-white/40 hover:bg-white/10 text-white px-8 py-3 rounded-lg text-label-md font-label-md font-bold inline-flex items-center justify-center gap-2 transition-colors"
              >
                See a live demo
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-primary-fixed-dim text-label-sm font-label-sm">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-secondary">
                check_circle
              </span>
              No software to install
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-secondary">
                check_circle
              </span>
              Free first map
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
