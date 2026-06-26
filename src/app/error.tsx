"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RefreshCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-parchment px-6 py-24">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="relative inline-block">
          <div className="text-[120px] font-display  text-forest/5 leading-none select-none">
            Oops
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-saffron/10 flex items-center justify-center">
              <span className="text-4xl text-saffron">!</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-display  text-forest">
            A small pebble in the path
          </h1>
          <p className="text-forest/60 font-sans font-light leading-relaxed">
            Even the most curated journeys face unexpected turns. We&apos;ve
            encountered a technical glitch.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="saffron"
            onClick={() => reset()}
            className="rounded-full px-8 h-12 font-bold uppercase tracking-widest"
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Link href="/">
            <Button
              variant="outline"
              className="w-full sm:w-auto rounded-full px-8 h-12 border-forest text-forest hover:bg-forest hover:text-parchment transition-all duration-300 font-bold uppercase tracking-widest"
            >
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </Link>
        </div>

        <div className="pt-8 border-t border-forest/10">
          <p className="text-[10px] text-forest/40 uppercase tracking-[0.2em]">
            Error Code: {error.digest || "UNKNOWN_TREK_ERROR"}
          </p>
        </div>
      </div>
    </div>
  );
}
