"use client";

import * as React from "react";
import { Loader2, PartyPopper, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/reveal";

type Status = "idle" | "loading" | "success";

const businessTypes = ["Salon", "Clinic", "Gym", "Coaching", "Other"] as const;

export function LeadForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    business: "",
    type: "",
  });

  const update = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    // Simulated async submission.
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="lead-form" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-xl shadow-navy/5">
            {/* Header band */}
            <div className="bg-navy px-7 py-9 text-center sm:px-10">
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Stop losing revenue to missed messages.
              </h2>
              <p className="mt-3 text-[0.975rem] leading-relaxed text-white/70">
                Join the waitlist to get early access and a 30-day free trial.
              </p>
            </div>

            <div className="p-7 sm:p-10">
              {status === "success" ? (
                <SuccessState />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <Field id="name" label="Full Name">
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="e.g. Priya Sharma"
                      required
                      value={form.name}
                      onChange={(e) => update("name")(e.target.value)}
                      disabled={status === "loading"}
                    />
                  </Field>

                  <Field id="phone" label="WhatsApp Mobile Number">
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="e.g. 98765 43210"
                      required
                      value={form.phone}
                      onChange={(e) => update("phone")(e.target.value)}
                      disabled={status === "loading"}
                    />
                  </Field>

                  <Field id="business" label="Business Name">
                    <Input
                      id="business"
                      name="business"
                      autoComplete="organization"
                      placeholder="e.g. Glow Salon & Spa"
                      required
                      value={form.business}
                      onChange={(e) => update("business")(e.target.value)}
                      disabled={status === "loading"}
                    />
                  </Field>

                  <Field id="type" label="Business Type">
                    <Select
                      value={form.type}
                      onValueChange={update("type")}
                      disabled={status === "loading"}
                    >
                      <SelectTrigger id="type" aria-label="Business Type">
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                      <SelectContent>
                        {businessTypes.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>

                  <Button
                    type="submit"
                    size="lg"
                    className="mt-2 w-full"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Joining…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Join Waitlist &amp; Request Demo
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-soft">
                    We&apos;ll only message you on WhatsApp about your demo. No
                    spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}

function SuccessState() {
  return (
    <div className="flex flex-col items-center py-8 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft">
        <PartyPopper className="h-8 w-8 text-brand-deep" />
      </span>
      <h3 className="mt-6 text-2xl font-extrabold text-navy">
        🎉 You&apos;re on the list!
      </h3>
      <p className="mt-3 max-w-sm text-[0.975rem] leading-relaxed text-muted">
        We will WhatsApp you shortly with your early access and free trial
        details.
      </p>
    </div>
  );
}
