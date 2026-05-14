"use client";

import { Button } from "@/components/ui/button";
import { useBookingStore } from "@/stores/bookingStore";

export const MobileReserveBar = ({
  priceFrom,
  slug,
}: {
  priceFrom: number | string | undefined;
  slug: string;
}) => {
  const { openDrawer } = useBookingStore();

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white/90 backdrop-blur-xl border-t border-stone-200 p-4 sm:p-6 flex items-center justify-between shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
      <div>
        <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em]  font-bold mb-1">
          Exchange
        </p>
        <p className="font-display text-2xl sm:text-3xl text-forest">
          ₹{priceFrom}
        </p>
      </div>
      <Button
        variant="saffron"
        onClick={() => openDrawer(slug)}
        className="h-12 sm:h-14 px-6 w-2/3 sm:px-10 rounded-full font-black uppercase tracking-widest text-[10px] sm:text-xs shadow-xl shadow-saffron/20"
      >
        Reserve
      </Button>
    </div>
  );
};
