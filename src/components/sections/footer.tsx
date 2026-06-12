import { MessageCircleMore, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-brand">
            <MessageCircleMore
              className="h-4 w-4 text-navy"
              strokeWidth={2.4}
            />
            <Sparkles className="absolute -right-1 -top-1 h-3 w-3 fill-navy text-navy" />
          </span>
          <span className="text-base font-extrabold tracking-tight text-navy">
            Auto<span className="text-brand-deep">Reception</span>
          </span>
        </div>

        <p className="order-last text-sm text-muted sm:order-none">
          © 2026 AutoReception. Built for local businesses.
        </p>

        <nav className="flex items-center gap-6">
          <a
            href="#"
            className="rounded text-sm font-medium text-muted transition-colors hover:text-navy focus-visible:ring-2 focus-visible:ring-brand/60"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="rounded text-sm font-medium text-muted transition-colors hover:text-navy focus-visible:ring-2 focus-visible:ring-brand/60"
          >
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
}
