import { Check, Clock, MessageSquareOff, X, CalendarX } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";

type Point = {
  icon: LucideIcon;
  problem: string;
  detail: string;
};

// What we solve — the everyday pain of running a busy local business.
const oldWay: Point[] = [
  {
    icon: MessageSquareOff,
    problem: "Leads go cold after hours",
    detail:
      "A customer messages at 10 PM, gets no reply, and books with the salon down the road by morning.",
  },
  {
    icon: Clock,
    problem: 'Your day is eaten by "price kya hai?"',
    detail:
      "Hours lost answering the same questions about prices, timings, and availability — instead of serving clients.",
  },
  {
    icon: CalendarX,
    problem: "Double-bookings and no-shows",
    detail:
      "Manual scheduling on paper or memory leads to clashes, awkward calls, and empty chairs.",
  },
];

// How AutoReception fixes it — and how it actually works.
const newWay: Point[] = [
  {
    icon: Check,
    problem: "Instant replies, 24/7 — even at 2 AM",
    detail:
      "The AI reads each WhatsApp message and answers in seconds, in Hindi, English or Hinglish, exactly like you trained it.",
  },
  {
    icon: Check,
    problem: "Every lead captured automatically",
    detail:
      "Name, number, and what they wanted are saved to your CRM the moment they message — nothing slips through.",
  },
  {
    icon: Check,
    problem: "Bookings that never clash",
    detail:
      "The AI checks your live availability, offers open slots, confirms the appointment, and sends reminders.",
  },
];

export function ProblemSolution() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-deep">
            The problem we solve
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Every missed message is a customer walking to your competitor.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            You can&apos;t be on WhatsApp all day — but your customers expect an
            answer now. AutoReception replies for you, captures the lead, and
            books the appointment, so you never trade revenue for a busy day.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Old way */}
          <Reveal>
            <div className="h-full rounded-2xl border border-danger/20 bg-danger-tint p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-danger-soft">
                  <X className="h-5 w-5 text-danger" strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-navy">
                    Without AutoReception
                  </h3>
                  <p className="text-sm text-navy/60">The cost of replying late</p>
                </div>
              </div>
              <ul className="mt-7 space-y-5">
                {oldWay.map((item) => (
                  <li key={item.problem} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-danger-soft">
                      <item.icon
                        className="h-4.5 w-4.5 text-danger"
                        strokeWidth={2.2}
                      />
                    </span>
                    <div>
                      <p className="font-semibold text-navy">{item.problem}</p>
                      <p className="mt-1 text-sm leading-relaxed text-navy/70">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* New way */}
          <Reveal delay={0.12}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-brand/30 bg-brand-tint p-7 shadow-lg shadow-brand/10 sm:p-9">
              <span className="absolute right-5 top-6 rounded-full bg-gradient-brand px-3 py-1 text-xs font-bold text-navy">
                How we fix it
              </span>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft">
                  <Check className="h-5 w-5 text-brand-deep" strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-navy">
                    With AutoReception
                  </h3>
                  <p className="text-sm text-navy/60">
                    An AI receptionist on your number
                  </p>
                </div>
              </div>
              <ul className="mt-7 space-y-5">
                {newWay.map((item) => (
                  <li key={item.problem} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft">
                      <item.icon
                        className="h-4.5 w-4.5 text-brand-deep"
                        strokeWidth={2.5}
                      />
                    </span>
                    <div>
                      <p className="font-semibold text-navy">{item.problem}</p>
                      <p className="mt-1 text-sm leading-relaxed text-navy/70">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Impact stat band */}
        <Reveal delay={0.2}>
          <div className="mt-8 overflow-hidden rounded-2xl bg-navy-aurora px-7 py-8 sm:px-10">
            <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3 sm:text-left">
              <Stat value="42%" label="of customer messages arrive outside business hours" />
              <Stat value="5 min" label="is all it takes for a lead to lose interest and move on" />
              <Stat value="₹0" label="extra staff cost — your AI works every hour of every day" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 sm:items-start">
      <span className="text-3xl font-extrabold tracking-tight text-brand">
        {value}
      </span>
      <span className="max-w-[16rem] text-sm leading-relaxed text-white/70">
        {label}
      </span>
    </div>
  );
}
