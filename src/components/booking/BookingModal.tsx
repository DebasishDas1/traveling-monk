"use client";

import React, { useState, useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn, whatsappNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUiStore } from "@/stores/uiStore";
import {
  CheckCircle2,
  Loader2,
  Mountain,
  Users,
  Calendar,
  Mail,
  Phone,
  User,
  Users2,
} from "lucide-react";
import { TrekType } from "@/lib/type";
import { submitBooking } from "@/lib/actions/booking";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  date: z.string().min(1, "Please select a date"),
  guests: z.string().min(1, "Required"),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  trek: TrekType;
}

export const BookingModal = ({ trek }: BookingModalProps) => {
  const { bookingDrawerOpen, closeBookingDrawer } = useUiStore();
  const [isSuccess, setIsSuccess] = useState(false);

  const [state, formAction, isPending] = useActionState(submitBooking, null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      guests: "1",
    },
  });

  // Effect to handle success from server action
  React.useEffect(() => {
    if (state?.success) {
      setIsSuccess(true);
      reset();
    }
  }, [state, reset]);

  const onSubmit = async (data: BookingFormValues) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));
    formData.append("trekSlug", trek.slug);
    formAction(formData);
  };

  const handleClose = () => {
    setIsSuccess(false);
    closeBookingDrawer();
  };

  return (
    <Dialog
      open={bookingDrawerOpen}
      onOpenChange={(open) => !open && handleClose()}
    >
      <DialogContent className="max-w-2xl bg-parchment p-0 overflow-hidden border-none shadow-2xl rounded-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] h-full">
          {/* 🏔️ Sidebar Info */}
          <div className="bg-monk-dark p-8 text-white hidden md:flex flex-col justify-between relative overflow-hidden">
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-saffron/10 blur-[60px]" />

            <div className="space-y-8 relative z-10">
              <div className="space-y-2">
                <p className="text-saffron text-[10px] uppercase tracking-[0.4em] font-bold">
                  Booking for
                </p>
                <h3 className="font-display text-2xl italic leading-tight">
                  {trek.name}
                </h3>
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 text-white/60">
                  <Mountain className="size-4 text-saffron" />
                  <span className="text-xs font-light tracking-wide">
                    {trek.altitude}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Users className="size-4 text-saffron" />
                  <span className="text-xs font-light tracking-wide">
                    Small Group Journey
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-12">
              <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] leading-relaxed">
                "The journey of a thousand miles begins with a single step."
              </p>
            </div>
          </div>

          {/* 📝 Form Area */}
          <div className="p-8 md:p-12 relative">
            <DialogHeader className="mb-8">
              <DialogTitle className="font-display text-4xl text-forest italic tracking-tight">
                Secure Your Spot
              </DialogTitle>
              <DialogDescription className="text-stone-500 font-light mt-2">
                Complete the form below to begin your transformation.
              </DialogDescription>
            </DialogHeader>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-6"
                >
                  <div className="size-20 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="size-10 text-emerald-600" />
                  </div>
                  <h3 className="font-display text-3xl text-forest italic">
                    Reservation Initiated
                  </h3>
                  <p className="text-stone-500 max-w-xs mx-auto font-light">
                    {state?.message ||
                      "Your request has been received. Our expedition monk will contact you within 4 hours."}
                  </p>
                  <Button
                    onClick={handleClose}
                    variant="outline"
                    className="mt-4 rounded-full px-8 border-forest/20 text-forest"
                  >
                    Close Window
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit(onSubmit)}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase tracking-widest font-bold ">
                        Full Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-stone-300" />
                        <Input
                          {...register("name")}
                          placeholder="John Doe"
                          className="pl-10 h-12 rounded-xl bg-white/50 border-stone-200 focus:border-saffron/50 transition-all"
                        />
                      </div>
                      {errors.name && (
                        <p className="text-[10px] text-rose-500 font-bold">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase tracking-widest font-bold ">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-stone-300" />
                        <Input
                          {...register("email")}
                          placeholder="john@example.com"
                          className="pl-10 h-12 rounded-xl bg-white/50 border-stone-200"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[10px] text-rose-500 font-bold">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase tracking-widest font-bold ">
                        Phone Number
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-stone-300" />
                        <Input
                          {...register("phone")}
                          placeholder={whatsappNumber}
                          className="pl-10 h-12 rounded-xl bg-white/50 border-stone-200"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-[10px] text-rose-500 font-bold">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase tracking-widest font-bold ">
                        Select Date
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full h-12 rounded-xl bg-white/50 border-stone-200 justify-start text-left font-normal px-3",
                              !watch("date") && "text-stone-300",
                            )}
                          >
                            <Calendar className="mr-2 size-4 text-stone-300" />
                            {watch("date") || "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0 bg-parchment rounded-xl border-stone-200 shadow-xl"
                          align="start"
                        >
                          <div className="p-2 space-y-1">
                            {trek.availableDates.map((d) => (
                              <button
                                key={d.date}
                                type="button"
                                onClick={() => setValue("date", d.date)}
                                className={cn(
                                  "w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center justify-between",
                                  watch("date") === d.date
                                    ? "bg-saffron text-forest font-bold"
                                    : "hover:bg-saffron/10 text-stone-600",
                                )}
                              >
                                <span>{d.date}</span>
                                <span className="text-[9px] opacity-60">
                                  ({d.spots} left)
                                </span>
                              </button>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                      {errors.date && (
                        <p className="text-[10px] text-rose-500 font-bold">
                          {errors.date.message}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2 space-y-2">
                      <Label className="text-[10px] uppercase tracking-widest font-bold ">
                        Number of Guests
                      </Label>
                      <div className="relative">
                        <Users2 className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-stone-300" />
                        <Input
                          {...register("guests")}
                          type="number"
                          min="1"
                          max="10"
                          className="pl-10 h-12 rounded-xl bg-white/50 border-stone-200"
                        />
                      </div>
                      {errors.guests && (
                        <p className="text-[10px] text-rose-500 font-bold">
                          {errors.guests.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full h-16 rounded-2xl bg-forest text-white hover:bg-forest/90 font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-forest/20 transition-all group"
                  >
                    {isPending ? (
                      <Loader2 className="size-5 animate-spin" />
                    ) : (
                      "Confirm My Request"
                    )}
                  </Button>

                  <p className="text-[10px]  text-center uppercase tracking-widest font-bold">
                    No payment required now · Confirmation via call
                  </p>

                  {state?.success === false && (
                    <p className="text-xs text-rose-500 text-center font-bold">
                      {state.message}
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
