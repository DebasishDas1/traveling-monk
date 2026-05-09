"use client";

import { AnimatePresence } from "framer-motion";
import { Drawer, DrawerContent, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { useBookingStore } from "@/stores/bookingStore";
import { useBookingForm } from "@/hooks/useBookingForm";
import { BookingSidebar } from "@/components/booking/BookingSidebar";
import { BookingForm } from "@/components/booking/BookingForm";
import { BookingSuccess } from "@/components/booking/BookingSuccess";
import { IconX } from "@/components/myIcons";

export function BookingDrawer() {
  const { isOpen, isSuccess, closeDrawer, reset, setSuccess } =
    useBookingStore();
  const { state, isPending, form, onSubmit } = useBookingForm();

  const handleClose = () => {
    setSuccess(false);
    form.reset();
    reset();
    closeDrawer();
  };

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DrawerContent
        className="bg-transparent border-0 shadow-none p-0 focus:outline-none"
        style={{ maxHeight: "95dvh" }}
      >
        <span className="sr-only">Book a trek with The Traveling Monk</span>

        <VisuallyHidden>
          <DrawerTitle>Book a Trek</DrawerTitle>
          <DrawerDescription>Fill out the form to reserve your spot.</DrawerDescription>
        </VisuallyHidden>

        <div
          className="mx-auto w-full overflow-hidden rounded-t-3xl"
          style={{
            maxWidth: "860px",
            boxShadow: "0 -20px 80px rgba(26,18,8,0.2)",
          }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-[300px_1fr]"
            style={{ minHeight: "540px" }}
          >
            {/* LEFT — brand panel (no props needed) */}
            <BookingSidebar />

            {/* RIGHT — form */}
            <div className="flex flex-col bg-[#fefcf8] overflow-y-auto">
              {/* Header */}
              <div
                className="flex items-start justify-between px-7 pt-7 pb-5"
                style={{ borderBottom: "1px solid #ede6d8" }}
              >
                <div>
                  <h3
                    className="text-[#1a1208] leading-tight"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.35rem",
                      fontWeight: 400,
                    }}
                  >
                    {isSuccess ? "You're on the trail 🏔" : "Reserve your spot"}
                  </h3>
                  <p className="text-[12px] mt-1" style={{ color: "#8a7660" }}>
                    {isSuccess
                      ? "We'll contact you within 24 hours."
                      : "Complete the form below — no payment needed now."}
                  </p>
                </div>

                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-[#f0e8dc]"
                  style={{ background: "#f5ede0", color: "#8a7660" }}
                  aria-label="Close booking drawer"
                >
                  <IconX className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 px-7 py-6">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <BookingSuccess
                      key="success"
                      message={state?.message}
                      onClose={handleClose}
                    />
                  ) : (
                    <BookingForm
                      key="form"
                      form={form}
                      onSubmit={onSubmit}
                      state={state}
                      isPending={isPending}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
