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
    "w-11 h-full flex items-center justify-center text-[#8a7660] hover:bg-[#f5ede0] transition-colors text-lg font-light select-none";

  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#8a7660]">
        Travellers
      </label>

      <div
        className="flex items-center h-11 rounded-xl overflow-hidden"
        style={{ border: "1px solid #ddd5c6", background: "#faf7f2" }}
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
          <IconUsers className="w-3.5 h-3.5 text-[#b8a48e]" />
          <span className="text-[13px] font-medium text-[#1a1208]">
            {value}{" "}
            <span className="text-[#8a7660] font-normal">
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
