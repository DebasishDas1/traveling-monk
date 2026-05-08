"use client";

import { useState } from "react";
import { subscribeEmail } from "@/lib/api/subscribe";
import { isValidEmail } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export const useSubscribe = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = async (email: string) => {
    if (status === "loading") return { success: false, error: "Loading" };

    const cleanedEmail = email.trim();

    if (!isValidEmail(cleanedEmail)) {
      const err = "Please enter a valid email";
      setError(err);
      setStatus("error");
      return { success: false, error: err };
    }

    setStatus("loading");
    setError(null);

    const res = await subscribeEmail(cleanedEmail);

    if (res.success) {
      setStatus("success");
    } else {
      setError(res.error || "Something went wrong");
      setStatus("error");
    }

    return res;
  };

  const reset = () => {
    setStatus("idle");
    setError(null);
  };

  return {
    status,
    error,
    submit,
    reset,
    isLoading: status === "loading",
    isSuccess: status === "success",
    isError: status === "error",
  };
};