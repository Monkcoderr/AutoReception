import { Phone, ListChecks, Coffee, type LucideIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";

type Step = {
  icon: LucideIcon;
  step: string;
  title: string;
  text: string;
  bullets: string[];
};

const steps: Step[] = [
  {
    icon: Phone,
    step: "01",
    title: "Connect Your Number",
    text: "Link your existing WhatsApp in about 2 minutes. No new SIM, no new app, no number to memorise.",
    bullets: ["Keep your current number", "Secure one-time setup"],
  },
  {
    icon: ListChecks,
    step: "02",
    title: "Teach the AI Your Business",
    text: "Add your services, prices and timings once. The AI learns to answer in your tone — in Hindi, English or Hinglish.",
    bullets: ["Upload menu & prices", "Set your working hours"],
  },
  {
    icon: Coffee,
    step: "03",
    title: "Go Back to Work",
    text: "From here it runs itself — replying, capturing leads, booking slots and following up while you serve your clients.",
    bullets: ["Replies 24/7 on auto-pilot", "You stay in full control"],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-deep">
            Live in minutes
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Up and running in 3 simple steps.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            No code, no training, no IT person. If you can send a WhatsApp
            message, you can set up AutoReception.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Connector line (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-linear-to-r from-transparent via-brand/40 to-transparent lg:block"
          />

          <ol className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.step} delay={i * 0.12}>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-navy shadow-brand">
                    <step.icon className="h-6 w-6" strokeWidth={2.2} />
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-surface bg-navy text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-[0.95rem] leading-relaxed text-muted">
                    {step.text}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {step.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-sm font-medium text-navy/70"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
