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
import { useUiStore } from "@/stores/uiStore";
import { trekData } from "@/lib/data/treks";
import { submitBooking } from "@/lib/actions/booking";

// ─── Zod Schema ──────────────────────────────────────────────────────────────

const bookingSchema = z.object({
  trekSlug: z.string().min(1, "Please select a trek"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  date: z.string().min(1, "Please select a departure date"),
  guests: z.number().min(1).max(10),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

// ─── Icons (inline SVG, no external dep needed) ──────────────────────────────

const IconMountain = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </svg>
);
const IconX = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
const IconCheck = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const IconLoader = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={cn("animate-spin", className)}
    style={style}
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="3"
      strokeOpacity="0.25"
    />
    <path
      d="M12 2a10 10 0 0 1 10 10"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);
const IconUser = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);
const IconMail = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);
const IconPhone = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17z" />
  </svg>
);
const IconUsers = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  >
    <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3" />
    <path d="M19 19c0-2.76-1.34-5-3-5" />
    <circle cx="9" cy="8" r="3" />
    <path d="M3 19c0-3.31 2.69-6 6-6s6 2.69 6 6" />
  </svg>
);
const IconCalendar = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);
const IconCompass = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
  </svg>
);
const IconMapPin = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// ─── Sub-components ───────────────────────────────────────────────────────────

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-[11px] text-red-500 font-medium tracking-wide mt-1"
    >
      {message}
    </motion.p>
  );
}

function InputField({
  label,
  icon: Icon,
  error,
  children,
}: {
  label: string;
  icon?: React.FC<{ className?: string }>;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#8a7660]">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b8a48e] pointer-events-none" />
        )}
        <div className={cn(Icon && "*:pl-10")}>{children}</div>
      </div>
      <FieldError message={error} />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export const BookingDrawer = () => {
  const { bookingDrawerOpen, closeBookingDrawer, activeTrekSlug } =
    useUiStore();
  const [isSuccess, setIsSuccess] = useState(false);
  const [datePopoverOpen, setDatePopoverOpen] = useState(false);
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
    defaultValues: { guests: 1, trekSlug: activeTrekSlug ?? "", date: "" },
  });

  const watchedTrekSlug = watch("trekSlug");
  const watchedDate = watch("date");
  const watchedGuests = watch("guests");

  const currentTrek = useMemo(
    () => trekData.find((t) => t.slug === watchedTrekSlug),
    [watchedTrekSlug],
  );

  useEffect(() => {
    if (bookingDrawerOpen && activeTrekSlug)
      setValue("trekSlug", activeTrekSlug);
  }, [bookingDrawerOpen, activeTrekSlug, setValue]);

  useEffect(() => {
    if (currentTrek?.availableDates?.length) {
      const firstDate = currentTrek.availableDates[0].date;
      const isValid = currentTrek.availableDates.some(
        (d) => d.date === watchedDate,
      );
      if (!watchedDate || !isValid) setValue("date", firstDate);
    } else {
      setValue("date", "");
    }
  }, [currentTrek, setValue, watchedDate]);

  useEffect(() => {
    if (state?.success) {
      setIsSuccess(true);
      reset();
    }
  }, [state, reset]);

  const handleClose = () => {
    setIsSuccess(false);
    reset();
    closeBookingDrawer();
  };

  const onSubmit: SubmitHandler<BookingFormValues> = (data) => {
    const fd = new FormData();
    Object.entries(data).forEach(([k, v]) => {
      if (v != null) fd.append(k, v.toString());
    });
    formAction(fd);
  };

  const inputClass = (hasErr?: boolean) =>
    cn(
      "w-full h-11 rounded-xl border bg-[#faf7f2] px-3 text-[13px] text-[#1a1208] font-['DM_Sans',sans-serif]",
      "outline-none transition-all duration-200",
      "focus:bg-white focus:border-[#c4831a] focus:ring-2 focus:ring-[#c4831a]/15",
      "placeholder:text-[#c4b49e]",
      hasErr
        ? "border-red-300 bg-red-50/50"
        : "border-[#ddd5c6] hover:border-[#c4b49e]",
    );

  return (
    <Drawer
      open={bookingDrawerOpen}
      onOpenChange={(open) => !open && handleClose()}
    >
      <DrawerContent
        className="bg-transparent border-0 shadow-none p-0 focus:outline-none"
        style={{ maxHeight: "95dvh" }}
      >
        <DrawerHeader className="sr-only">
          <DrawerTitle>Book your trek with The Traveling Monk</DrawerTitle>
          <DrawerDescription>
            Enter your contact details and select your preferred trek and date
            to start your adventure.
          </DrawerDescription>
        </DrawerHeader>

        <div
          className="mx-auto w-full overflow-hidden rounded-t-3xl"
          style={{
            maxWidth: "860px",
            fontFamily: "'DM Sans', sans-serif",
            boxShadow: "0 -20px 80px rgba(26,18,8,0.2)",
          }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-[280px_1fr]"
            style={{ minHeight: "560px" }}
          >
            {/* ── LEFT PANEL ─────────────────────────────────── */}
            <div
              className="relative flex-col gap-5 overflow-hidden p-8 hidden md:flex"
              style={{ background: "#1e1208" }}
            >
              {/* Decorative circles */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full"
                style={{ background: "rgba(196,131,26,0.08)" }}
              />
              <div
                className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full"
                style={{ background: "rgba(232,168,50,0.06)" }}
              />

              {/* Brand */}
              <div className="flex items-center gap-2.5 relative z-10">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "#c4831a" }}
                >
                  <IconMountain className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#c4831a] font-semibold leading-none">
                    The Traveling
                  </p>
                  <p className="text-[14px] font-['Playfair_Display',serif] italic text-[#f5ede0] leading-tight">
                    Monk
                  </p>
                </div>
              </div>

              {/* Heading */}
              <div className="relative z-10 mt-2">
                <h2
                  className="leading-tight text-[#f5ede0]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.75rem",
                    fontWeight: 400,
                  }}
                >
                  Your path to the
                  <em className="block not-italic" style={{ color: "#e8a832" }}>
                    Himalayas
                  </em>
                  awaits.
                </h2>
                <p
                  className="mt-3 text-[12px] leading-relaxed"
                  style={{ color: "rgba(245,237,224,0.45)" }}
                >
                  Fill in your details and our team will reach out within 24
                  hours to confirm your adventure.
                </p>
              </div>

              {/* Trek list */}
              <div className="relative z-10 flex flex-col gap-2 mt-auto">
                <p
                  className="text-[10px] uppercase tracking-[0.16em] font-semibold mb-1"
                  style={{ color: "rgba(245,237,224,0.3)" }}
                >
                  Featured Treks
                </p>
                {trekData.slice(0, 4).map((t) => (
                  <button
                    key={t.slug}
                    type="button"
                    onClick={() => setValue("trekSlug", t.slug)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-200 border",
                      watchedTrekSlug === t.slug
                        ? "border-[#c4831a]/50 bg-[#c4831a]/15"
                        : "border-transparent bg-white/5 hover:bg-white/8",
                    )}
                  >
                    <IconMapPin
                      className={cn(
                        "w-3.5 h-3.5 shrink-0",
                        watchedTrekSlug === t.slug
                          ? "text-[#e8a832]"
                          : "text-[rgba(245,237,224,0.3)]",
                      )}
                    />
                    <div className="flex-1 min-w-0">
                      <p
                        className={cn(
                          "text-[12px] font-medium truncate",
                          watchedTrekSlug === t.slug
                            ? "text-[#e8a832]"
                            : "text-[#f5ede0]",
                        )}
                      >
                        {t.name}
                      </p>
                      <p
                        className="text-[10px] mt-0.5 truncate"
                        style={{ color: "rgba(245,237,224,0.35)" }}
                      >
                        {t.region}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Footer note */}
              <div
                className="relative z-10 flex items-center gap-2 pt-4"
                style={{ borderTop: "1px solid rgba(245,237,224,0.08)" }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: "#4ade80" }}
                />
                <p
                  className="text-[10px]"
                  style={{ color: "rgba(245,237,224,0.35)" }}
                >
                  No advance payment · Book risk-free
                </p>
              </div>
            </div>

            {/* ── RIGHT PANEL ────────────────────────────────── */}
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
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: "#f5ede0", color: "#8a7660" }}
                  aria-label="Close"
                >
                  <IconX className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 px-7 py-6">
                <AnimatePresence mode="wait">
                  {/* ── SUCCESS STATE ── */}
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="flex flex-col items-center justify-center py-10 text-center gap-6"
                    >
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center"
                        style={{ background: "#eef7ee" }}
                      >
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center"
                          style={{ background: "#22c55e" }}
                        >
                          <IconCheck className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="space-y-2 max-w-xs">
                        <h4
                          className="text-[#1a1208]"
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.25rem",
                            fontWeight: 400,
                          }}
                        >
                          Namaste, traveler
                        </h4>
                        <p
                          className="text-[13px] leading-relaxed"
                          style={{ color: "#8a7660" }}
                        >
                          {state?.message ||
                            "Your booking request is in. Our team will reach out shortly to confirm your adventure."}
                        </p>
                      </div>
                      <button
                        onClick={handleClose}
                        className="mt-2 px-8 h-11 rounded-xl text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                        style={{ background: "#1e3a2f" }}
                      >
                        Back to the trail
                      </button>
                    </motion.div>
                  ) : (
                    /* ── FORM ── */
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit(onSubmit)}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -8 }}
                      className={cn(
                        "flex flex-col gap-5 transition-opacity duration-300",
                        isPending && "opacity-40 pointer-events-none",
                      )}
                    >
                      {/* Trek selector (visible only on mobile; desktop uses left panel) */}
                      <div className="md:hidden">
                        <InputField
                          label="Select Trek"
                          icon={IconCompass}
                          error={errors.trekSlug?.message}
                        >
                          <select
                            value={watchedTrekSlug}
                            onChange={(e) =>
                              setValue("trekSlug", e.target.value)
                            }
                            className={inputClass(!!errors.trekSlug)}
                            style={{ paddingLeft: "2.5rem" }}
                          >
                            <option value="">Choose your trek…</option>
                            {trekData.map((t) => (
                              <option key={t.slug} value={t.slug}>
                                {t.name}
                              </option>
                            ))}
                          </select>
                        </InputField>
                      </div>

                      {/* Selected trek preview (desktop) */}
                      {currentTrek && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="hidden md:flex items-center gap-3 rounded-xl px-4 py-3"
                          style={{
                            background: "#f5ede0",
                            border: "1px solid #ddd5c6",
                          }}
                        >
                          <IconMountain
                            className="w-5 h-5 shrink-0"
                            style={{ color: "#c4831a" }}
                          />
                          <div>
                            <p
                              className="text-[12px] font-semibold"
                              style={{ color: "#1a1208" }}
                            >
                              {currentTrek.name}
                            </p>
                            <p
                              className="text-[10px] uppercase tracking-wider mt-0.5"
                              style={{ color: "#8a7660" }}
                            >
                              {currentTrek.region}
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField
                          label="Full Name"
                          icon={IconUser}
                          error={errors.name?.message}
                        >
                          <input
                            {...register("name")}
                            placeholder="Your name"
                            className={inputClass(!!errors.name)}
                            style={{ paddingLeft: "2.5rem" }}
                          />
                        </InputField>
                        <InputField
                          label="Email"
                          icon={IconMail}
                          error={errors.email?.message}
                        >
                          <input
                            {...register("email")}
                            placeholder="you@example.com"
                            className={inputClass(!!errors.email)}
                            style={{ paddingLeft: "2.5rem" }}
                          />
                        </InputField>
                      </div>

                      {/* Phone + Guests */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField
                          label="Phone Number"
                          icon={IconPhone}
                          error={errors.phone?.message}
                        >
                          <input
                            {...register("phone")}
                            placeholder="9800000000"
                            className={inputClass(!!errors.phone)}
                            style={{ paddingLeft: "2.5rem" }}
                          />
                        </InputField>

                        {/* Guests stepper */}
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#8a7660]">
                            Travellers
                          </label>
                          <div
                            className="flex items-center h-11 rounded-xl border overflow-hidden"
                            style={{
                              border: "1px solid #ddd5c6",
                              background: "#faf7f2",
                            }}
                          >
                            <button
                              type="button"
                              onClick={() =>
                                setValue(
                                  "guests",
                                  Math.max(1, (watchedGuests || 1) - 1),
                                )
                              }
                              className="w-11 h-full flex items-center justify-center text-[#8a7660] hover:bg-[#f5ede0] transition-colors text-lg font-light"
                              aria-label="Decrease guests"
                            >
                              −
                            </button>
                            <div className="flex-1 flex items-center justify-center gap-1.5">
                              <IconUsers className="w-3.5 h-3.5 text-[#b8a48e]" />
                              <span className="text-[13px] font-medium text-[#1a1208]">
                                {watchedGuests ?? 1}
                                <span className="text-[#8a7660] font-normal">
                                  {" "}
                                  {(watchedGuests ?? 1) === 1
                                    ? "person"
                                    : "people"}
                                </span>
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() =>
                                setValue(
                                  "guests",
                                  Math.min(10, (watchedGuests || 1) + 1),
                                )
                              }
                              className="w-11 h-full flex items-center justify-center text-[#8a7660] hover:bg-[#f5ede0] transition-colors text-lg font-light"
                              aria-label="Increase guests"
                            >
                              +
                            </button>
                            {/* Hidden input for RHF */}
                            <input
                              type="hidden"
                              {...register("guests", { valueAsNumber: true })}
                            />
                          </div>
                          <FieldError message={errors.guests?.message} />
                        </div>
                      </div>

                      {/* Date picker */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#8a7660]">
                          Departure Date
                        </label>
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setDatePopoverOpen(!datePopoverOpen)}
                            className={cn(
                              "w-full h-11 rounded-xl border px-3 text-left text-[13px] flex items-center gap-2.5 transition-all duration-200",
                              datePopoverOpen
                                ? "border-[#c4831a] ring-2 ring-[#c4831a]/15 bg-white"
                                : "border-[#ddd5c6] bg-[#faf7f2] hover:border-[#c4b49e]",
                              errors.date && "border-red-300 bg-red-50/50",
                            )}
                          >
                            <IconCalendar className="w-4 h-4 text-[#b8a48e] shrink-0" />
                            {watchedDate ? (
                              <span className="text-[#1a1208] font-medium">
                                {watchedDate}
                              </span>
                            ) : (
                              <span className="text-[#c4b49e]">
                                {currentTrek
                                  ? "Select a departure batch"
                                  : "Select a trek first"}
                              </span>
                            )}
                          </button>

                          {/* Date dropdown */}
                          <AnimatePresence>
                            {datePopoverOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                                transition={{ duration: 0.15 }}
                                className="absolute z-50 top-full left-0 right-0 mt-2 rounded-xl overflow-hidden"
                                style={{
                                  background: "#fefcf8",
                                  border: "1px solid #ddd5c6",
                                  boxShadow: "0 12px 40px rgba(26,18,8,0.14)",
                                }}
                              >
                                <div
                                  className="px-4 py-2.5"
                                  style={{ borderBottom: "1px solid #ede6d8" }}
                                >
                                  <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#8a7660]">
                                    Available Batches
                                  </p>
                                </div>
                                <div className="p-1.5 max-h-48 overflow-y-auto">
                                  {currentTrek?.availableDates.map((d) => (
                                    <button
                                      key={d.date}
                                      type="button"
                                      onClick={() => {
                                        setValue("date", d.date);
                                        setDatePopoverOpen(false);
                                      }}
                                      className={cn(
                                        "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[13px] transition-all",
                                        watchedDate === d.date
                                          ? "bg-[#c4831a] text-white font-semibold"
                                          : "hover:bg-[#f5ede0] text-[#1a1208]",
                                      )}
                                    >
                                      <span className="flex items-center gap-2">
                                        <IconCalendar
                                          className={cn(
                                            "w-3.5 h-3.5",
                                            watchedDate === d.date
                                              ? "text-white/70"
                                              : "text-[#b8a48e]",
                                          )}
                                        />
                                        {d.date}
                                      </span>
                                      <span
                                        className={cn(
                                          "text-[10px] uppercase tracking-wider font-medium",
                                          watchedDate === d.date
                                            ? "text-white/70"
                                            : "text-[#8a7660]",
                                        )}
                                      >
                                        {d.spots} spots
                                      </span>
                                    </button>
                                  ))}
                                  {!currentTrek && (
                                    <div className="py-6 text-center">
                                      <IconCompass
                                        className="w-6 h-6 mx-auto mb-2"
                                        style={{ color: "#c4b49e" }}
                                      />
                                      <p className="text-[12px] text-[#8a7660]">
                                        Select a trek to see dates
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <FieldError message={errors.date?.message} />
                      </div>

                      {/* Server error */}
                      <AnimatePresence>
                        {state?.success === false && (
                          <motion.div
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-[12px] text-red-600 text-center py-3 rounded-xl font-medium"
                            style={{
                              background: "#fef2f2",
                              border: "1px solid #fecaca",
                            }}
                          >
                            {state.message}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isPending}
                        className={cn(
                          "w-full h-12 rounded-xl text-[13px] font-bold uppercase tracking-[0.14em] text-white",
                          "transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
                          "disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0",
                          "shadow-lg",
                        )}
                        style={{
                          background: isPending ? "#2d5a3d" : "#1e3a2f",
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
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
