import { CheckCircle2, Radio, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ChatDemo } from "@/components/chat-demo";
import { Reveal } from "@/components/reveal";

const metrics = [
  { value: "24/7", label: "Always answering" },
  { value: "< 2s", label: "Average reply time" },
  { value: "3×", label: "More leads captured" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background pt-12 pb-20 sm:pt-16 sm:pb-28"
    >
      {/* Ambient brand glow + grid backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        {/* Left — copy */}
        <div className="flex flex-col items-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-tint px-4 py-1.5 text-sm font-semibold text-brand-deep">
              Built for Salons, Clinics &amp; Gyms 🇮🇳
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.5rem]">
              Never Miss a Customer Because You Were{" "}
              <span className="text-gradient-brand">Too Busy to Reply.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              AutoReception turns your existing WhatsApp number into a 24/7 AI
              receptionist. It answers FAQs, quotes prices, captures every lead,
              and books appointments — automatically, in your own voice.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="xl">
                <a href="#lead-form">Get Your Free AI Demo</a>
              </Button>
              <Button asChild size="xl" variant="outline">
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <p className="mt-5 flex items-center gap-2 text-sm font-medium text-muted">
              <CheckCircle2 className="h-4 w-4 text-brand-deep" />
              No technical setup required. Works with your existing number.
            </p>
          </Reveal>

          {/* Metrics strip */}
          <Reveal delay={0.4}>
            <dl className="mt-10 grid w-full max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
              {metrics.map((m) => (
                <div key={m.label}>
                  <dt className="text-2xl font-extrabold tracking-tight text-navy">
                    {m.value}
                  </dt>
                  <dd className="mt-0.5 text-xs font-medium leading-tight text-muted">
                    {m.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Right — live WhatsApp demo */}
        <Reveal delay={0.2} className="relative">
          {/* "Live demo" label */}
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">
              <Radio className="h-3.5 w-3.5 text-brand animate-live-dot" />
              Live demo
            </span>
            <span className="flex items-center gap-0.5 text-xs font-medium text-muted">
              <Star className="h-3.5 w-3.5 fill-brand text-brand" />
              Real conversation, automated
            </span>
          </div>
          <ChatDemo />
        </Reveal>
      </div>
    </section>
  );
}
