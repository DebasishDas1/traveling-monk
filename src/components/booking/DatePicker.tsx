"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconCalendar, IconCompass } from "@/components/myIcons";
import { FieldError } from "@/components/booking/BookingPrimitives";

interface AvailableDate {
  date: string;
  spots: number;
}

interface DatePickerProps {
  value: string;
  onChange: (date: string) => void;
  dates: AvailableDate[];
  hasTrek: boolean;
  error?: string;
}

export function DatePicker({
  value,
  onChange,
  dates,
  hasTrek,
  error,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#8a7660]">
        Departure Date
      </label>

      <div className="relative">
        {/* Trigger button */}
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className={cn(
            "w-full h-11 rounded-xl border px-3 text-left text-[13px] flex items-center gap-2.5 transition-all duration-200",
            open
              ? "border-[#c4831a] ring-2 ring-[#c4831a]/15 bg-white"
              : "border-[#ddd5c6] bg-[#faf7f2] hover:border-[#c4b49e]",
            error && "border-red-300 bg-red-50/50",
          )}
        >
          <IconCalendar className="w-4 h-4 text-[#b8a48e] shrink-0" />
          {value ? (
            <span className="text-[#1a1208] font-medium">{value}</span>
          ) : (
            <span className="text-[#c4b49e]">
              {hasTrek ? "Select a departure batch" : "Select a trek first"}
            </span>
          )}
        </button>

        {/* Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="absolute z-50 top-full left-0 right-0 mt-2 rounded-xl overflow-hidden"
              style={{
                background: "#fefcf8",
                border: "1px solid #ddd5c6",
                boxShadow: "0 12px 40px rgba(26,18,8,0.14)",
              }}
            >
              <div
                className="px-4 py-2.5"
                style={{ borderBottom: "1px solid #ede6d8" }}
              >
                <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#8a7660]">
                  Available Batches
                </p>
              </div>

              <div className="p-1.5 max-h-48 overflow-y-auto">
                {dates.length > 0 ? (
                  dates.map((d) => {
                    const active = value === d.date;
                    return (
                      <button
                        key={d.date}
                        type="button"
                        onClick={() => {
                          onChange(d.date);
                          setOpen(false);
                        }}
                        className={cn(
                          "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[13px] transition-all",
                          active
                            ? "bg-[#c4831a] text-white font-semibold"
                            : "hover:bg-[#f5ede0] text-[#1a1208]",
                        )}
                      >
                        <span className="flex items-center gap-2">
                          <IconCalendar
                            className={cn(
                              "w-3.5 h-3.5",
                              active ? "text-white/70" : "text-[#b8a48e]",
                            )}
                          />
                          {d.date}
                        </span>
                        <span
                          className={cn(
                            "text-[10px] uppercase tracking-wider font-medium",
                            active ? "text-white/70" : "text-[#8a7660]",
                          )}
                        >
                          {d.spots} spots
                        </span>
                      </button>
                    );
                  })
                ) : (
                  <div className="py-6 text-center">
                    <IconCompass className="w-6 h-6 mx-auto mb-2 text-[#c4b49e]" />
                    <p className="text-[12px] text-[#8a7660]">
                      Select a trek to see dates
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <FieldError message={error} />
    </div>
  );
}
