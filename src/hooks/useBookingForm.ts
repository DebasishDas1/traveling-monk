"use client";

import { useEffect, useMemo, useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { bookingSchema, BookingFormValues } from "@/lib/type";
import { submitBooking } from "@/lib/actions/submitBooking";
import { useBookingStore } from "@/stores/bookingStore";
import { trekData } from "@/lib/data/treks";

export function useBookingForm() {
  const { isOpen, activeTrekSlug, setSuccess } = useBookingStore();

  const [state, formAction, isPending] = useActionState(submitBooking, null);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      guests:   1,
      trekSlug: activeTrekSlug ?? "",
      date:     "",
    },
  });

  const { setValue, watch, reset } = form;
  const watchedTrekSlug = watch("trekSlug");
  const watchedDate     = watch("date");

  // Derive selected trek object
  const currentTrek = useMemo(
    () => trekData.find((t) => t.slug === watchedTrekSlug) ?? null,
    [watchedTrekSlug]
  );

  // Sync activeTrekSlug from store → form when drawer opens
  useEffect(() => {
    if (isOpen && activeTrekSlug) setValue("trekSlug", activeTrekSlug);
  }, [isOpen, activeTrekSlug, setValue]);

  // Auto-select first valid date when trek changes
  useEffect(() => {
    const dates = currentTrek?.availableDates ?? [];
    if (!dates.length) { setValue("date", ""); return; }

    const isCurrentDateValid = dates.some((d) => d.date === watchedDate);
    if (!watchedDate || !isCurrentDateValid) setValue("date", dates[0].date);
  }, [currentTrek, setValue, watchedDate]);

  // Handle server success → flip success state
  useEffect(() => {
    if (state?.success) {
      setSuccess(true);
      reset();
    }
  }, [state, setSuccess, reset]);

  // Serialize form values → FormData for the server action
  const onSubmit = form.handleSubmit((data) => {
    const fd = new FormData();
    (Object.entries(data) as [string, string | number][]).forEach(([k, v]) => {
      fd.append(k, v.toString());
    });
    formAction(fd);
  });

  return {
    form,
    state,
    isPending,
    onSubmit,
    currentTrek,
    watchedTrekSlug,
    watchedDate,
  };
}