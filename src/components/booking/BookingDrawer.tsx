"use client";

import { useState, useActionState, useEffect, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUiStore } from "@/stores/uiStore";
import {
  CheckCircle2,
  Loader2,
  Calendar,
  Mail,
  Phone,
  User,
  Users2,
  X,
  Compass,
} from "lucide-react";
import { trekData } from "@/lib/data/treks";
import { submitBooking } from "@/lib/actions/booking";

const bookingSchema = z.object({
  trekSlug: z.string().min(1, "Please select an expedition"),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid Indian phone number"),
  date: z.string().min(1, "Please select a date"),
  guests: z.number().min(1).max(10),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export const BookingDrawer = () => {
  const { bookingDrawerOpen, closeBookingDrawer, activeTrekSlug } =
    useUiStore();
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
      guests: 1,
      trekSlug: activeTrekSlug ?? "",
      date: "",
    },
  });

  const watchedTrekSlug = watch("trekSlug");
  const watchedDate = watch("date");

  // Optimize: Use useMemo for trek data lookup
  const currentlySelectedTrek = useMemo(
    () => trekData.find((t) => t.slug === watchedTrekSlug),
    [watchedTrekSlug],
  );

  // Sync: Initialize/Sync form with activeTrekSlug from store
  useEffect(() => {
    if (bookingDrawerOpen && activeTrekSlug) {
      setValue("trekSlug", activeTrekSlug);
    }
  }, [bookingDrawerOpen, activeTrekSlug, setValue]);

  // Sync: Auto-pick first available date when trek changes
  useEffect(() => {
    if (currentlySelectedTrek?.availableDates?.length) {
      const firstDate = currentlySelectedTrek.availableDates[0].date;
      // Only set if current date is empty or invalid for this trek
      const isDateValid = currentlySelectedTrek.availableDates.some(
        (d) => d.date === watchedDate,
      );
      if (!watchedDate || !isDateValid) {
        setValue("date", firstDate);
      }
    } else {
      setValue("date", "");
    }
  }, [currentlySelectedTrek, setValue, watchedDate]);

  // Success Handler: Handle server response
  useEffect(() => {
    if (state?.success) {
      setIsSuccess(true);
      reset();
    }
  }, [state, reset]);

  const onSubmit: SubmitHandler<BookingFormValues> = (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formData.append(key, value.toString());
      }
    });
    formAction(formData);
  };

  const handleClose = () => {
    setIsSuccess(false);
    reset(); // Clear form on close to prevent stale data on re-open
    closeBookingDrawer();
  };

  return (
    <Drawer
      open={bookingDrawerOpen}
      onOpenChange={(open) => !open && handleClose()}
    >
      <DrawerContent
        className={cn(
          "py-3",
          "bg-parchment",
          // "backdrop-blur-3xl",
          // "supports-backdrop-filter:bg-parchment/40",
        )}
      >
        <div className="mx-auto w-full max-w-2xl h-full flex flex-col">
          <DrawerHeader className="relative border-b border-stone-100 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <DrawerTitle className="font-display text-start text-4xl italic leading-tight">
                  {isSuccess ? "Journey Initiated" : "Secure Your Spot"}
                </DrawerTitle>
                <DrawerDescription className="text-stone-500 font-light text-base">
                  {isSuccess
                    ? "Your path is being prepared."
                    : "Complete the form to begin your transformation."}
                </DrawerDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-stone-100"
                onClick={handleClose}
              >
                <X className="size-6 text-forest/40" />
              </Button>
            </div>
          </DrawerHeader>

          <div className="flex-1 overflow-y-auto px-6 py-8">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-8"
                >
                  <div className="size-24 rounded-full bg-emerald-50 flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="size-12 text-emerald-500" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-display text-3xl text-forest italic">
                      Namaste, Traveler
                    </h3>
                    <p className="text-stone-500 max-w-md mx-auto font-light leading-relaxed">
                      {state?.message ||
                        "Your request has been received. Our expedition monk will contact you shortly to finalize your transformation."}
                    </p>
                  </div>
                  <Button
                    onClick={handleClose}
                    className="rounded-full px-12 h-14 bg-forest text-white hover:bg-forest/90 font-bold shadow-xl shadow-forest/10"
                  >
                    Back to the Trail
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={cn(
                    "space-y-8 transition-opacity duration-300",
                    isPending && "opacity-50 pointer-events-none",
                  )}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    {/* Expedition Selection */}
                    <div className="sm:col-span-2 space-y-2.5">
                      <Label className="text-[10px] uppercase tracking-[0.2em] font-black">
                        Select Trek
                      </Label>
                      <Select
                        value={watchedTrekSlug}
                        onValueChange={(v) => setValue("trekSlug", v)}
                      >
                        <SelectTrigger
                          className={cn(
                            " w-full h-14 bg-white border-stone-200 focus:ring-saffron/20 transition-all",
                            errors.trekSlug && "border-rose-300 bg-rose-50/30",
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <Compass className="size-5 text-saffron" />
                            <SelectValue placeholder="Which path will you walk?" />
                          </div>
                        </SelectTrigger>
                        <SelectContent className="bg-white border-stone-200 shadow-2xl">
                          {trekData.map((t) => (
                            <SelectItem
                              key={t.slug}
                              value={t.slug}
                              className="focus:bg-saffron/10 py-3 cursor-pointer"
                            >
                              <div className="flex flex-col">
                                <span className="font-bold text-forest">
                                  {t.name}
                                </span>
                                <span className="text-[10px] uppercase tracking-widest ">
                                  {t.region}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.trekSlug && (
                        <p className="text-[10px] text-rose-500 font-bold tracking-wider animate-shake">
                          {errors.trekSlug.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2.5">
                      <Label className="text-[10px] uppercase tracking-[0.2em] font-black ">
                        Full Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-stone-300" />
                        <Input
                          {...register("name")}
                          placeholder="Your Name"
                          aria-invalid={!!errors.name}
                          className={cn(
                            "pl-11 h-14 rounded-2xl bg-white border-stone-200 focus:ring-saffron/20",
                            errors.name && "border-rose-300 bg-rose-50/30",
                          )}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-[10px] text-rose-500 font-bold tracking-wider">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2.5">
                      <Label className="text-[10px] uppercase tracking-[0.2em] font-black ">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-stone-300" />
                        <Input
                          {...register("email")}
                          placeholder="namaste@example.com"
                          aria-invalid={!!errors.email}
                          className={cn(
                            "pl-11 h-14 rounded-2xl bg-white border-stone-200",
                            errors.email && "border-rose-300 bg-rose-50/30",
                          )}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[10px] text-rose-500 font-bold tracking-wider">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2.5">
                      <Label className="text-[10px] uppercase tracking-[0.2em] font-black ">
                        Phone Number
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-stone-300" />
                        <Input
                          {...register("phone")}
                          placeholder="+91 90000 00000"
                          aria-invalid={!!errors.phone}
                          className={cn(
                            "pl-11 h-14 rounded-2xl bg-white border-stone-200",
                            errors.phone && "border-rose-300 bg-rose-50/30",
                          )}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-[10px] text-rose-500 font-bold tracking-wider">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2.5">
                      <Label className="text-[10px] uppercase tracking-[0.2em] font-black ">
                        Select Date
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full h-14 rounded-2xl bg-white border-stone-200 justify-start text-left font-normal px-4",
                              !watchedDate && "",
                              errors.date && "border-rose-300 bg-rose-50/30",
                            )}
                          >
                            <Calendar className="mr-3 size-4 text-stone-300" />
                            {watchedDate ? (
                              <span className="text-forest font-medium">
                                {watchedDate}
                              </span>
                            ) : (
                              <span>Pick a journey date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0 bg-parchment border-stone-200 shadow-2xl rounded-2xl"
                          align="start"
                        >
                          <div className="p-3 border-b border-stone-100">
                            <p className="text-[10px] uppercase tracking-widest font-black  text-center">
                              Available Batches
                            </p>
                          </div>
                          <div className="p-2 space-y-1">
                            {currentlySelectedTrek?.availableDates.map((d) => (
                              <button
                                key={d.date}
                                type="button"
                                onClick={() => {
                                  setValue("date", d.date);
                                  // Close popover logic would go here if using a state,
                                  // but Shadcn Popover usually closes on outside click or we can use a local state.
                                }}
                                className={cn(
                                  "w-full text-left px-4 py-3 rounded-xl text-sm transition-all flex items-center justify-between group",
                                  watchedDate === d.date
                                    ? "bg-saffron text-forest font-bold"
                                    : "hover:bg-saffron/10 text-stone-600",
                                )}
                              >
                                <span>{d.date}</span>
                                <span
                                  className={cn(
                                    "text-[10px] uppercase tracking-tighter",
                                    watchedDate === d.date
                                      ? "text-forest/60"
                                      : " group-hover:text-saffron",
                                  )}
                                >
                                  {d.spots} spots left
                                </span>
                              </button>
                            ))}
                            {!currentlySelectedTrek && (
                              <div className="p-8 text-center space-y-2">
                                <Compass className="size-8 text-stone-200 mx-auto" />
                                <p className="text-xs  italic">
                                  Select an expedition first to see available
                                  dates
                                </p>
                              </div>
                            )}
                          </div>
                        </PopoverContent>
                      </Popover>
                      {errors.date && (
                        <p className="text-[10px] text-rose-500 font-bold tracking-wider">
                          {errors.date.message}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2 space-y-2.5">
                      <Label className="text-[10px] uppercase tracking-[0.2em] font-black ">
                        Number of Seekers
                      </Label>
                      <div className="relative">
                        <Users2 className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-stone-300" />
                        <Input
                          {...register("guests", { valueAsNumber: true })}
                          type="number"
                          min="1"
                          max="10"
                          aria-invalid={!!errors.guests}
                          className={cn(
                            "pl-11 h-14 rounded-2xl bg-white border-stone-200",
                            errors.guests && "border-rose-300 bg-rose-50/30",
                          )}
                        />
                      </div>
                      {errors.guests && (
                        <p className="text-[10px] text-rose-500 font-bold tracking-wider">
                          {errors.guests.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isPending}
                      className="w-full h-16 rounded-2xl bg-forest text-white hover:bg-forest/90 font-black uppercase tracking-[0.25em] text-sm shadow-2xl shadow-forest/20 transition-all transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50"
                    >
                      {isPending ? (
                        <div className="flex items-center gap-2">
                          <Loader2 className="size-5 animate-spin" />
                          <span>Preparing your Path...</span>
                        </div>
                      ) : (
                        "Confirm Expedition Request"
                      )}
                    </Button>
                    <p className="mt-4 text-[10px]  text-center uppercase tracking-[0.3em] font-black">
                      No payment required now · Direct Monk Support
                    </p>
                  </div>

                  {state?.success === false && (
                    <p className="text-xs text-rose-500 text-center font-bold animate-shake bg-rose-50 py-3 rounded-xl border border-rose-100">
                      {state.message}
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
