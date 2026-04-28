import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export type TrekDate = {
  id: string
  date: string
  spotsTotal: number
  spotsLeft: number
}

export type CustomerDetails = {
  name: string
  email: string
  phone: string
  city: string
  message: string
}

export type BookingState = {
  selectedTrek: string | null // trek slug
  selectedDate: TrekDate | null
  groupSize: number // 1–15
  totalPrice: number
  step: 'idle' | 'date' | 'details' | 'confirm' | 'success'
  customerDetails: CustomerDetails | null
  bookingRef: string | null
}

export type BookingActions = {
  selectTrek: (slug: string) => void
  selectDate: (date: TrekDate) => void
  setGroupSize: (n: number) => void
  setCustomerDetails: (details: CustomerDetails) => void
  confirmBooking: () => void
  resetBooking: () => void
}

const initialState: BookingState = {
  selectedTrek: null,
  selectedDate: null,
  groupSize: 1,
  totalPrice: 0,
  step: 'idle',
  customerDetails: null,
  bookingRef: null,
}

export const useBookingStore = create<BookingState & BookingActions>()(
  persist(
    immer((set) => ({
      ...initialState,

      selectTrek: (slug) =>
        set((state) => {
          state.selectedTrek = slug
          state.selectedDate = null
          state.customerDetails = null
          state.step = 'date'
        }),

      selectDate: (date) =>
        set((state) => {
          state.selectedDate = date
          state.step = 'details'
        }),

      setGroupSize: (n) =>
        set((state) => {
          state.groupSize = Math.max(1, Math.min(15, n))
          // Logic for totalPrice could be added here if pricing data is available
        }),

      setCustomerDetails: (details) =>
        set((state) => {
          state.customerDetails = details
          state.step = 'confirm'
        }),

      confirmBooking: () =>
        set((state) => {
          const randomDigits = Math.floor(100000 + Math.random() * 900000)
          state.bookingRef = `TTM${randomDigits}`
          state.step = 'success'
        }),

      resetBooking: () => set(() => initialState),
    })),
    {
      name: 'ttm-booking',
    }
  )
)
