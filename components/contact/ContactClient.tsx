"use client";

import React, { useState } from "react";
import { Button } from "@/components/shared/Button";
import Icon from "@/components/shared/Icon";

const FIELD_CLASS =
  "w-full bg-[#0b1c30]/50 border border-white/20 rounded-lg px-4 py-3 text-body-md font-body-md text-white placeholder:text-white/40 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-colors";

export default function ContactClient() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as string[][]).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex-1 flex relative w-full overflow-hidden bg-[#0b1c30]">
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <img
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-right"
          src="/img/backdrop-contact.svg"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c30] via-[#0b1c30]/80 to-transparent" />
      </div>

      {/* Foreground content */}
      <div className="flex-1 overflow-y-auto px-gutter py-12 flex flex-col z-10 relative">
        <div className="w-full max-w-3xl ml-0 lg:ml-12">
          <div className="mb-10">
            <h1 className="text-display-lg font-display-lg text-white mb-4 drop-shadow-md">
              Get started today
            </h1>
            <p className="text-body-lg font-body-lg text-primary-fixed-dim">
              Tell us about your business and we&apos;ll show you what your
              customer data looks like on a map. We reply within one business
              day.
            </p>
          </div>

          <div className="rounded-2xl p-8 lg:p-10 bg-[#0b1c30]/40 backdrop-blur-md border border-white/10 shadow-2xl">
            {status === "sent" ? (
              <div className="py-8 text-center">
<Icon name="checkCircle" size={48} className="text-secondary mb-4 mx-auto block" />
                <h2 className="text-headline-md font-headline-md text-white mb-2">
                  Your inquiry is on its way
                </h2>
                <p className="text-body-md font-body-md text-primary-fixed-dim mb-6">
                  We&apos;ll be in touch within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="text-label-md font-label-md text-secondary hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-stack-lg"
              >
                {/* Netlify Forms plumbing */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Leave this field empty
                    <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
                  <div className="space-y-stack-sm">
                    <label
                      className="block text-label-md font-label-md text-primary-fixed-dim"
                      htmlFor="fullName"
                    >
                      Full name
                    </label>
                    <input
                      className={FIELD_CLASS}
                      id="fullName"
                      name="fullName"
                      placeholder="Jordan Reyes"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-stack-sm">
                    <label
                      className="block text-label-md font-label-md text-primary-fixed-dim"
                      htmlFor="emailAddress"
                    >
                      Email address
                    </label>
                    <input
                      className={FIELD_CLASS}
                      id="emailAddress"
                      name="emailAddress"
                      placeholder="jordan@business.com"
                      type="email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-stack-sm">
                  <label
                    className="block text-label-md font-label-md text-primary-fixed-dim"
                    htmlFor="businessName"
                  >
                    Business name
                  </label>
                  <input
                    className={FIELD_CLASS}
                    id="businessName"
                    name="businessName"
                    placeholder="Reyes Landscaping"
                    type="text"
                    required
                  />
                </div>

                <div className="space-y-stack-sm">
                  <label
                    className="block text-label-md font-label-md text-primary-fixed-dim"
                    htmlFor="crmSystem"
                  >
                    Where your customer data lives{" "}
                    <span className="text-white/40">(optional)</span>
                  </label>
                  <input
                    className={FIELD_CLASS}
                    id="crmSystem"
                    name="crmSystem"
                    placeholder="Spreadsheet, QuickBooks, Jobber, Salesforce…"
                    type="text"
                  />
                </div>

                <div className="space-y-stack-sm">
                  <label
                    className="block text-label-md font-label-md text-primary-fixed-dim"
                    htmlFor="challenges"
                  >
                    What are you trying to figure out?
                  </label>
                  <textarea
                    className={`${FIELD_CLASS} resize-y`}
                    id="challenges"
                    name="challenges"
                    placeholder="Where should I expand? Which neighborhoods are worth the marketing spend? Who are my best customers and where do they live?"
                    rows={4}
                    required
                  />
                </div>

                {status === "error" && (
                  <p
                    role="alert"
                    className="text-body-md font-body-md text-white bg-secondary/20 border border-secondary/40 rounded-lg px-4 py-3"
                  >
                    That didn&apos;t send. Try again, or email us directly at{" "}
                    <a
                      className="underline font-semibold"
                      href="mailto:hello@marketmapanalytics.com"
                    >
                      hello@marketmapanalytics.com
                    </a>
                    .
                  </p>
                )}

                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Send inquiry"}
<Icon
                      name={status === "sending" ? "spinner" : "send"}
                      size={16}
                      className={status === "sending" ? "animate-spin" : ""}
                    />
                  </Button>
                </div>
              </form>
            )}
          </div>

            <ul className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 text-white/70 text-label-sm font-label-sm">
              <li className="flex items-center gap-2">
                <Icon name="check" size={16} className="text-white/40" />
                We reply within one business day
              </li>
              <li className="flex items-center gap-2">
                <Icon name="check" size={16} className="text-white/40" />
                No obligation and no sales sequence
              </li>
              <li className="flex items-center gap-2">
                <Icon name="check" size={16} className="text-white/40" />
                Your data stays yours
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
}
