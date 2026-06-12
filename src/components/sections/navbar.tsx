"use client";

import * as React from "react";
import { MessageCircleMore, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/70 backdrop-blur-xl backdrop-saturate-150 shadow-sm"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
          aria-label="AutoReception home"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-brand shadow-sm shadow-brand/40">
            <MessageCircleMore className="h-5 w-5 text-navy" strokeWidth={2.4} />
            <Sparkles className="absolute -right-1 -top-1 h-3.5 w-3.5 fill-navy text-navy" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-navy">
            Auto<span className="text-brand-deep">Reception</span>
          </span>
        </a>

        {/* CTA */}
        <Button asChild size="sm" className="shadow-sm">
          <a href="#lead-form">Get Early Access</a>
        </Button>
      </nav>
    </header>
  );
}
