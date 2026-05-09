"use client";

import { cn } from "@/lib/utils";
import { trekData } from "@/lib/data/treks";
import { IconMountain, IconMapPin } from "@/components/myIcons";

interface BookingSidebarProps {
  selectedSlug: string;
  onSelectTrek: (slug: string) => void;
}

export function BookingSidebar({
  selectedSlug,
  onSelectTrek,
}: BookingSidebarProps) {
  return (
    <div
      className="relative hidden md:flex flex-col gap-5 overflow-hidden p-8"
      style={{ background: "#1e1208" }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "rgba(196,131,26,0.08)" }}
      />
      <div
        className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full pointer-events-none"
        style={{ background: "rgba(232,168,50,0.06)" }}
      />

      {/* Brand mark */}
      <div className="flex items-center gap-2.5 relative z-10">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: "#c4831a" }}
        >
          <IconMountain className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#c4831a] font-semibold leading-none">
            The Traveling
          </p>
          <p
            className="text-[14px] italic text-[#f5ede0] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Monk
          </p>
        </div>
      </div>

      {/* Heading */}
      <div className="relative z-10 mt-2">
        <h2
          className="text-[#f5ede0] leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.75rem",
            fontWeight: 400,
          }}
        >
          Your path to the{" "}
          <em className="not-italic block" style={{ color: "#e8a832" }}>
            Himalayas
          </em>
          awaits.
        </h2>
        <p
          className="mt-3 text-[12px] leading-relaxed"
          style={{ color: "rgba(245,237,224,0.45)" }}
        >
          Fill in your details and our team will reach out within 24 hours to
          confirm your adventure.
        </p>
      </div>

      {/* Trek list */}
      <div className="relative z-10 flex flex-col gap-2 mt-auto">
        <p
          className="text-[10px] uppercase tracking-[0.16em] font-semibold mb-1"
          style={{ color: "rgba(245,237,224,0.3)" }}
        >
          Featured Treks
        </p>
        {trekData.slice(0, 4).map((t) => {
          const active = selectedSlug === t.slug;
          return (
            <button
              key={t.slug}
              type="button"
              onClick={() => onSelectTrek(t.slug)}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-200 border",
                active
                  ? "border-[#c4831a]/50 bg-[#c4831a]/15"
                  : "border-transparent bg-white/5 hover:bg-white/10",
              )}
            >
              <IconMapPin
                className={cn(
                  "w-3.5 h-3.5 shrink-0",
                  active ? "text-[#e8a832]" : "text-[rgba(245,237,224,0.3)]",
                )}
              />
              <div className="flex-1 min-w-0">
                <p
                  className={cn(
                    "text-[12px] font-medium truncate",
                    active ? "text-[#e8a832]" : "text-[#f5ede0]",
                  )}
                >
                  {t.name}
                </p>
                <p
                  className="text-[10px] mt-0.5 truncate"
                  style={{ color: "rgba(245,237,224,0.35)" }}
                >
                  {t.region}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Risk-free note */}
      <div
        className="relative z-10 flex items-center gap-2 pt-4"
        style={{ borderTop: "1px solid rgba(245,237,224,0.08)" }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: "#4ade80" }}
        />
        <p className="text-[10px]" style={{ color: "rgba(245,237,224,0.35)" }}>
          No advance payment · Book risk-free
        </p>
      </div>
    </div>
  );
}
