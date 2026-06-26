"use client";

import { IconUsers } from "@/components/myIcons";
import { FieldError } from "@/components/booking/BookingPrimitives";

interface GuestsStepperProps {
  value: number;
  onChange: (n: number) => void;
  error?: string;
}

export function GuestsStepper({ value, onChange, error }: GuestsStepperProps) {
  const dec = () => onChange(Math.max(1, value - 1));
  const inc = () => onChange(Math.min(10, value + 1));

  const btnClass =
    "w-11 h-full flex items-center justify-center text-[var(--color-monk-muted)] hover:bg-[var(--color-background)] transition-colors text-lg font-light select-none";

  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-monk-muted)]">
        Travellers
      </label>

      <div
        className="flex items-center h-11 rounded-xl overflow-hidden"
        style={{ border: "1px solid var(--color-monk-beige)", background: "var(--color-card)" }}
      >
        <button
          type="button"
          onClick={dec}
          className={btnClass}
          aria-label="Decrease"
        >
          −
        </button>

        <div className="flex-1 flex items-center justify-center gap-1.5">
          <IconUsers className="w-3.5 h-3.5 text-[var(--color-monk-beige)]" />
          <span className="text-[13px] font-medium text-[var(--color-foreground)]">
            {value}{" "}
            <span className="text-[var(--color-monk-muted)] font-normal">
              {value === 1 ? "person" : "people"}
            </span>
          </span>
        </div>

        <button
          type="button"
          onClick={inc}
          className={btnClass}
          aria-label="Increase"
        >
          +
        </button>
      </div>

      <FieldError message={error} />
    </div>
  );
}
