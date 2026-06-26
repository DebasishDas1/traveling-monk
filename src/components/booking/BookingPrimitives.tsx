"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── FieldError ───────────────────────────────────────────────────────────────
export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-[11px] text-red-500 font-medium tracking-wide mt-1"
    >
      {message}
    </motion.p>
  );
}

// ─── FieldWrapper ─────────────────────────────────────────────────────────────
interface FieldWrapperProps {
  label: string;
  error?: string;
  icon?: React.FC<{ className?: string }>;
  children: React.ReactNode;
}

export function FieldWrapper({
  label,
  error,
  icon: Icon,
  children,
}: FieldWrapperProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-monk-muted)]">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-monk-beige)] pointer-events-none z-10" />
        )}
        {children}
      </div>
      <FieldError message={error} />
    </div>
  );
}

// ─── inputClass helper ────────────────────────────────────────────────────────
export function inputClass(hasErr?: boolean, withIcon = true) {
  return cn(
    "w-full h-11 rounded-xl border bg-[var(--color-card)] text-[13px] text-[var(--color-foreground)]",
    "outline-none transition-all duration-200",
    "focus:bg-white focus:border-[var(--color-saffron-dark)] focus:ring-2 focus:ring-[var(--color-saffron-dark)]/15",
    "placeholder:text-[var(--color-parchment-dark)]",
    withIcon ? "px-3 pl-10" : "px-3",
    hasErr
      ? "border-red-300 bg-red-50/50"
      : "border-[var(--color-monk-beige)] hover:border-[var(--color-parchment-dark)]",
  );
}
