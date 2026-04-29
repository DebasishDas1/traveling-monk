"use client"

import React from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { useUiStore } from "@/stores/uiStore"
import { X } from "lucide-react"

export const BookingDrawer = () => {
  const { bookingDrawerOpen, closeBookingDrawer } = useUiStore()

  return (
    <Drawer open={bookingDrawerOpen} onOpenChange={(open) => !open && closeBookingDrawer()}>
      <DrawerContent className="bg-parchment border-none max-h-[90vh]">
        <div className="mx-auto w-full max-w-lg">
          <DrawerHeader className="relative">
            <DrawerTitle className="font-display text-3xl text-forest italic">Start Your Journey</DrawerTitle>
            <DrawerDescription className="text-forest/60">
              Complete your booking and walk until you find yourself.
            </DrawerDescription>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 top-4"
              onClick={closeBookingDrawer}
            >
              <X className="size-5" />
            </Button>
          </DrawerHeader>
          
          <div className="p-6 space-y-6">
            <p className="text-forest/80 italic text-center py-10">
              Booking form implementation coming soon...
            </p>
          </div>

          <DrawerFooter className="pb-10">
            <Button className="bg-saffron text-forest hover:bg-saffron/90 w-full rounded-full py-6 text-lg font-bold">
              Confirm Booking
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" className="border-forest/20 text-forest rounded-full">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
