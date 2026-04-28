import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CommunityState = {
  isMember: boolean
  memberEmail: string | null
  waitlistEmail: string | null
  waitlistSubmitted: boolean
}

export type CommunityActions = {
  joinWaitlist: (email: string) => void
  resetWaitlist: () => void
}

const initialState: CommunityState = {
  isMember: false,
  memberEmail: null,
  waitlistEmail: null,
  waitlistSubmitted: false,
}

export const useCommunityStore = create<CommunityState & CommunityActions>()(
  persist(
    (set) => ({
      ...initialState,

      joinWaitlist: (email) =>
        set({
          waitlistEmail: email,
          waitlistSubmitted: true,
        }),

      resetWaitlist: () =>
        set({
          waitlistEmail: null,
          waitlistSubmitted: false,
        }),
    }),
    {
      name: 'ttm-community',
    }
  )
)
