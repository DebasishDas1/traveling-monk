import { create } from "zustand";

// ─── Types ────────────────────────────────────────────────────────────────────
export interface BookingState {
  isOpen:        boolean;
  activeTrekSlug: string | null;
  isSuccess:     boolean;

  openDrawer:  (slug?: string) => void;
  closeDrawer: () => void;
  setSuccess:  (val: boolean) => void;
  reset:       () => void;
}

// ─── Store ────────────────────────────────────────────────────────────────────
export const useBookingStore = create<BookingState>((set) => ({
  isOpen:         false,
  activeTrekSlug: null,
  isSuccess:      false,

  openDrawer:  (slug) => set({ isOpen: true, activeTrekSlug: slug ?? null }),
  closeDrawer: ()     => set({ isOpen: false }),
  setSuccess:  (val)  => set({ isSuccess: val }),
  reset:       ()     => set({ isOpen: false, isSuccess: false, activeTrekSlug: null }),
}));