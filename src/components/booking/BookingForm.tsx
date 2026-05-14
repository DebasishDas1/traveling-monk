"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { trekData } from "@/lib/data/treks";
import { escapesData } from "@/lib/data/escapes";

import { BookingActionState } from "@/lib/type";
import {
  FieldWrapper,
  inputClass,
} from "@/components/booking/BookingPrimitives";
import { DatePicker } from "@/components/booking/DatePicker";
import { GuestsStepper } from "@/components/booking/GuestsStepper";
import {
  IconCompass,
  IconUser,
  IconMail,
  IconPhone,
  IconLoader,
} from "@/components/myIcons";

export function BookingForm({
  form,
  onSubmit,
  state,
  isPending,
}: {
  form: any;
  onSubmit: any;
  state: BookingActionState;
  isPending: boolean;
}) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const watchedTrekSlug = watch("trekSlug");
  const watchedDate = watch("date");
  const watchedGuests = watch("guests");

  const currentTrek =
    trekData.find((t) => t.slug === watchedTrekSlug) ||
    escapesData.find((e) => e.slug === watchedTrekSlug) ||
    null;

  return (
    <motion.form
      key="form"
      onSubmit={onSubmit}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -8 }}
      className={cn(
        "flex flex-col gap-5 transition-opacity duration-300",
        isPending && "opacity-40 pointer-events-none",
      )}
    >
      {/* ── 1. Trek dropdown — shown on ALL screen sizes ── */}
      <FieldWrapper
        label="Select Trek"
        icon={IconCompass}
        error={errors.trekSlug?.message}
      >
        <select
          value={watchedTrekSlug}
          onChange={(e) => setValue("trekSlug", e.target.value)}
          className={cn(inputClass(!!errors.trekSlug), "cursor-pointer")}
        >
          <option value="">Choose your journey…</option>
          <optgroup label="Himalayan Treks">
            {trekData.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.name}
              </option>
            ))}
          </optgroup>
          <optgroup label="Leisure Escapes">
            {escapesData.map((e) => (
              <option key={e.slug} value={e.slug}>
                {e.name}
              </option>
            ))}
          </optgroup>
        </select>
      </FieldWrapper>

      {/* ── Trek region badge (appears after selection) ── */}
      <AnimatePresence>
        {currentTrek && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: -12 }}
            animate={{ opacity: 1, height: "auto", marginTop: 0 }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-[11px]"
              style={{ background: "#f5ede0", border: "1px solid #e8d9c4" }}
            >
              <span style={{ color: "#c4831a" }}>📍</span>
              <span className="font-medium" style={{ color: "#6b5a45" }}>
                {"region" in currentTrek
                  ? currentTrek.region
                  : currentTrek.location}
              </span>
              {"availableDates" in currentTrek &&
                currentTrek.availableDates &&
                currentTrek.availableDates.length > 0 && (
                  <>
                    <span style={{ color: "#c4b49e" }}>·</span>
                    <span style={{ color: "#8a7660" }}>
                      {"availableDates" in currentTrek &&
                      currentTrek.availableDates
                        ? currentTrek.availableDates.length
                        : 1}{" "}
                      batch
                      {"availableDates" in currentTrek &&
                      currentTrek.availableDates?.length > 1
                        ? "es"
                        : ""}{" "}
                      available
                    </span>
                  </>
                )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 2. Name + Email ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FieldWrapper
          label="Full Name"
          icon={IconUser}
          error={errors.name?.message}
        >
          <input
            {...register("name")}
            placeholder="Your name"
            className={inputClass(!!errors.name)}
          />
        </FieldWrapper>

        <FieldWrapper
          label="Email"
          icon={IconMail}
          error={errors.email?.message}
        >
          <input
            {...register("email")}
            placeholder="you@example.com"
            className={inputClass(!!errors.email)}
          />
        </FieldWrapper>
      </div>

      {/* ── 3. Phone + Guests ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FieldWrapper
          label="Phone Number"
          icon={IconPhone}
          error={errors.phone?.message}
        >
          <input
            {...register("phone")}
            placeholder="9800000000"
            className={inputClass(!!errors.phone)}
          />
        </FieldWrapper>

        <GuestsStepper
          value={watchedGuests ?? 1}
          onChange={(n) => setValue("guests", n)}
          error={errors.guests?.message}
        />
      </div>

      {/* ── 4. Date picker ── */}
      <DatePicker
        value={watchedDate}
        onChange={(d) => setValue("date", d)}
        dates={
          currentTrek && "availableDates" in currentTrek
            ? (currentTrek.availableDates ?? [])
            : []
        }
        hasTrek={!!currentTrek}
        error={errors.date?.message}
      />

      {/* ── Server error ── */}
      <AnimatePresence>
        {state?.success === false && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-[12px] text-red-600 text-center py-3 rounded-xl font-medium"
            style={{ background: "#fef2f2", border: "1px solid #fecaca" }}
          >
            {state.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Submit ── */}
      <button
        type="submit"
        disabled={isPending}
        className={cn(
          "w-full h-12 rounded-xl text-[13px] font-bold uppercase tracking-[0.14em] text-white",
          "transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 shadow-lg",
        )}
        style={{
          background: "#1e3a2f",
          boxShadow: "0 8px 24px rgba(30,58,47,0.25)",
        }}
      >
        {isPending ? (
          <span className="flex items-center justify-center gap-2">
            <IconLoader className="w-4 h-4" />
            Sending your request…
          </span>
        ) : (
          "Confirm Booking Request"
        )}
      </button>

      <p
        className="text-center text-[10px] uppercase tracking-[0.2em] font-semibold"
        style={{ color: "#b8a48e" }}
      >
        Zero payment now · Our monk calls you back
      </p>
    </motion.form>
  );
}
