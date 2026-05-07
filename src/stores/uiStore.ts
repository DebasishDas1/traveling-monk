import { create } from 'zustand'

export type UiState = {
  navScrolled: boolean
  mobileMenuOpen: boolean
  activeFilter: string // trek filter: 'All' | 'Beginner' | 'Transformation' | 'Premium'
  searchQuery: string
  lightboxImage: string | null // currently open lightbox image URL
  bookingDrawerOpen: boolean
  activeTrekSlug: string | null
}

export type UiActions = {
  setNavScrolled: (v: boolean) => void
  toggleMobileMenu: () => void
  closeMobileMenu: () => void
  setActiveFilter: (f: string) => void
  setSearchQuery: (q: string) => void
  openLightbox: (url: string) => void
  closeLightbox: () => void
  openBookingDrawer: (trekSlug?: string) => void
  closeBookingDrawer: () => void
  setActiveTrekSlug: (slug: string | null) => void
}

export const useUiStore = create<UiState & UiActions>((set) => ({
  navScrolled: false,
  mobileMenuOpen: false,
  activeFilter: 'All',
  searchQuery: '',
  lightboxImage: null,
  bookingDrawerOpen: false,
  activeTrekSlug: null,

  setNavScrolled: (v) => set({ navScrolled: v }),
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
  setActiveFilter: (f) => set({ activeFilter: f }),
  setSearchQuery: (q) => set({ searchQuery: q }),
  openLightbox: (url) => set({ lightboxImage: url }),
  closeLightbox: () => set({ lightboxImage: null }),
  openBookingDrawer: (trekSlug) => set({ 
    bookingDrawerOpen: true, 
    activeTrekSlug: trekSlug || null 
  }),
  closeBookingDrawer: () => set({ bookingDrawerOpen: false }),
  setActiveTrekSlug: (slug) => set({ activeTrekSlug: slug }),
}))
