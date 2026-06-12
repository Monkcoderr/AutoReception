"use client";

import { motion, type Variants } from "framer-motion";
import * as React from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Distance to travel on the Y axis (px). */
  y?: number;
  as?: "div" | "section" | "li" | "span";
};

/**
 * Fades + slides content up when it scrolls into view.
 * Respects prefers-reduced-motion via Framer's reducedMotion handling.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
    },
  };

  const MotionTag = motion[as] as React.ElementType;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
}
