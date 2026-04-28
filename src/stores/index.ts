import { BookingState } from './bookingStore'
import { UiState } from './uiStore'
import { CommunityState } from './communityStore'

export { useBookingStore } from './bookingStore'
export { useUiStore } from './uiStore'
export { useCommunityStore } from './communityStore'

export type AppState = BookingState & UiState & CommunityState
