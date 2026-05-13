"use client";

import { IconMountain } from "@/components/myIcons";

// Pure brand + info panel. Trek selection lives in the form now (both breakpoints).
export function BookingSidebar() {
  return (
    <div
      className="relative hidden md:flex flex-col justify-between overflow-hidden p-8"
      style={{ background: "#1e1208" }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: "rgba(196,131,26,0.08)" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "rgba(232,168,50,0.06)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "rgba(196,131,26,0.03)" }}
      />

      {/* Top: brand */}
      <div className="relative z-10">
        <div className="flex items-center gap-2.5 mb-8">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center shadow-lg"
            style={{ background: "#c4831a" }}
          >
            <IconMountain className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#c4831a] font-semibold leading-none">
              The Traveling
            </p>
            <p
              className="text-[15px] italic text-[#f5ede0] leading-tight font-serif"
            >
              Monk
            </p>
          </div>
        </div>

        <h2
          className="text-[#f5ede0] leading-[1.15] font-serif"
          style={{
            fontSize: "2rem",
            fontWeight: 400,
          }}
        >
          Your path to the{" "}
          <em className="not-italic" style={{ color: "#e8a832" }}>
            Himalayas
          </em>{" "}
          awaits.
        </h2>

        <p
          className="mt-4 text-[13px] leading-relaxed"
          style={{ color: "rgba(245,237,224,0.5)" }}
        >
          Tell us where you want to go and we'll handle the rest. No payment
          needed — our team will call you to confirm everything.
        </p>
      </div>

      {/* Middle: trust badges */}
      <div className="relative z-10 flex flex-col gap-3 my-8">
        {[
          { icon: "🏔", label: "Expert-led treks across India" },
          { icon: "📞", label: "Personal callback within 24 hrs" },
          { icon: "🛡", label: "Safe & responsible trekking" },
        ].map(({ icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="text-base">{icon}</span>
            <p
              className="text-[12px]"
              style={{ color: "rgba(245,237,224,0.55)" }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom: live indicator */}
      <div
        className="relative z-10 flex items-center gap-2 pt-5"
        style={{ borderTop: "1px solid rgba(245,237,224,0.08)" }}
      >
        <span className="relative flex h-2 w-2">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ background: "#4ade80" }}
          />
          <span
            className="relative inline-flex rounded-full h-2 w-2"
            style={{ background: "#4ade80" }}
          />
        </span>
        <p className="text-[11px]" style={{ color: "rgba(245,237,224,0.4)" }}>
          Accepting bookings for 2025 season
        </p>
      </div>
    </div>
  );
}
