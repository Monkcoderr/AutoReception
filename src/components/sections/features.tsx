import {
  MessageCircle,
  Calendar,
  Users,
  Star,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/reveal";

type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const features: Feature[] = [
  {
    icon: MessageCircle,
    title: "Human-Like Chat",
    text: "Understands Hinglish, Hindi, and English perfectly. No annoying menus.",
  },
  {
    icon: Calendar,
    title: "Auto-Booking",
    text: "Checks your schedule and books clients automatically.",
  },
  {
    icon: Users,
    title: "Smart CRM",
    text: "Saves every number and inquiry into an easy-to-use database.",
  },
  {
    icon: Star,
    title: "Review Auto-Pilot",
    text: "Follows up after appointments to collect 5-star Google reviews.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-deep">
            Everything you need
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            A receptionist that never sleeps, never forgets.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Everything a great front-desk does — answering, booking, organising
            and following up — handled automatically on the number your
            customers already message.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <article className="group h-full rounded-2xl border border-border bg-background p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-tint text-brand-deep transition-colors group-hover:bg-brand group-hover:text-navy">
                  <feature.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                  {feature.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
