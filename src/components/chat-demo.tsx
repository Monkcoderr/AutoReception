"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, CheckCheck, Phone, ShieldCheck } from "lucide-react";

type Line =
  | { from: "user"; text: string; time: string }
  | { from: "ai"; text: string; time: string };

const script: Line[] = [
  {
    from: "user",
    text: "Do you have time for a haircut today at 6 PM?",
    time: "5:42 PM",
  },
  {
    from: "ai",
    text: "Yes! We have a 6:00 PM slot open. Shall I lock it in for you? ✂️",
    time: "5:42 PM",
  },
  {
    from: "user",
    text: "Perfect, please book it. Aur price kya hai?",
    time: "5:43 PM",
  },
  {
    from: "ai",
    text: "Booked! ✅ Haircut is ₹300. See you at 6 PM — I've saved your number too.",
    time: "5:43 PM",
  },
];

/**
 * A self-playing, looping WhatsApp conversation that mimics a live product
 * demo video. Reveals one message at a time with a typing indicator before
 * each AI reply, then restarts.
 */
export function ChatDemo() {
  const [visible, setVisible] = React.useState(0);
  const [typing, setTyping] = React.useState(false);

  React.useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setVisible(script.length);
      return;
    }

    let timer: ReturnType<typeof setTimeout>;

    const advance = (index: number) => {
      if (index >= script.length) {
        // Hold the finished conversation, then restart the loop.
        timer = setTimeout(() => {
          setVisible(0);
          advance(0);
        }, 2600);
        return;
      }

      const next = script[index];
      const showAndContinue = () => {
        setTyping(false);
        setVisible(index + 1);
        timer = setTimeout(() => advance(index + 1), next.from === "ai" ? 1700 : 1100);
      };

      if (next.from === "ai") {
        setTyping(true);
        timer = setTimeout(showAndContinue, 1100);
      } else {
        showAndContinue();
      }
    };

    timer = setTimeout(() => advance(0), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Floating accent badges */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute -left-4 top-20 z-10 hidden items-center gap-2 rounded-xl border border-border bg-background/90 px-3 py-2 shadow-float backdrop-blur sm:flex"
      >
        <ShieldCheck className="h-4 w-4 text-brand-deep" />
        <span className="text-xs font-semibold text-navy">Replies in 2s</span>
      </motion.div>

      <AnimatePresence>
        {visible >= script.length && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -right-3 bottom-24 z-10 hidden items-center gap-2 rounded-xl border border-brand/30 bg-background/90 px-3 py-2 shadow-float backdrop-blur sm:flex"
          >
            <BadgeCheck className="h-4 w-4 text-brand-deep" />
            <span className="text-xs font-semibold text-navy">
              Lead captured + booked
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phone frame */}
      <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-navy p-1.5 shadow-float ring-1 ring-black/5">
        <div className="overflow-hidden rounded-[1.7rem] bg-background">
          {/* Chat header */}
          <div className="flex items-center gap-3 bg-navy-aurora px-4 py-3.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-navy">
              AR
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">
                AutoReception AI
              </p>
              <p className="flex items-center gap-1.5 text-xs text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-live-dot" />
                online · typing for you
              </p>
            </div>
            <Phone className="h-4 w-4 text-white/60" />
          </div>

          {/* Chat body */}
          <div
            className="flex min-h-[19rem] flex-col justify-end gap-3 px-4 py-6"
            style={{
              background:
                "linear-gradient(180deg, #f7f8fa 0%, #eef2f6 100%)",
            }}
          >
            <AnimatePresence initial={false}>
              {script.slice(0, visible).map((line, i) => (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={
                    line.from === "user" ? "flex justify-start" : "flex justify-end"
                  }
                >
                  {line.from === "user" ? (
                    <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 shadow-sm">
                      <p className="text-sm leading-snug text-navy">
                        {line.text}
                      </p>
                      <span className="mt-1 block text-right text-[10px] text-muted-soft">
                        {line.time}
                      </span>
                    </div>
                  ) : (
                    <div className="max-w-[82%] rounded-2xl rounded-tr-sm bg-gradient-brand px-4 py-2.5 shadow-sm shadow-brand/30">
                      <p className="text-sm font-medium leading-snug text-navy">
                        {line.text}
                      </p>
                      <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-navy/60">
                        {line.time}
                        <CheckCheck className="h-3 w-3" />
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}

              {typing && (
                <motion.div
                  key="typing"
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-end"
                >
                  <div className="flex items-center gap-1 rounded-2xl rounded-tr-sm bg-white px-4 py-3 shadow-sm">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-brand [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-brand [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-brand" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
