"use client";

import { useCallback, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useUiStore } from "@/stores/uiStore";
import { cn } from "@/lib/utils";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import { useBookingStore } from "@/stores/bookingStore";

export const navLinks = [
  { name: "Treks", href: "/treks" },
  { name: "Escapes", href: "/escapes" },
  { name: "About", href: "/about" },
  { name: "Community", href: "/community" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const PRIMARY_COLOR = "#2B1F14";
  const {
    navScrolled,
    setNavScrolled,
    mobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  } = useUiStore();
  const { openDrawer } = useBookingStore();

  const pathname = usePathname();
  const isTreksPage = pathname.startsWith("/treks/") && pathname !== "/treks/";
  const isEscapePage =
    pathname.startsWith("/escapes/") && pathname !== "/escapes/";

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setNavScrolled]);

  const textColor =
    isTreksPage || isEscapePage || navScrolled ? "text-black" : "text-white";

  const isActiveLink = useCallback(
    (href: string) => pathname === href || pathname.startsWith(href + "/"),
    [pathname],
  );

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 px-6 transition-all duration-700 ease-out",
        navScrolled
          ? [
              "py-3",
              "bg-parchment",
              "backdrop-blur-xl",
              "supports-backdrop-filter:bg-parchment/40",
            ]
          : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "  text-xl md:text-2xl font-bold tracking-tight transition-colors duration-500",
            textColor,
          )}
        >
          The Traveling Monk
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href);
                const isLightBg = isTreksPage || isEscapePage || navScrolled;

                const inactive = cn(
                  isLightBg
                    ? "text-black/70 hover:text-black"
                    : "text-white/70 hover:text-white",
                  "transition-colors duration-200",
                );

                const active = cn(
                  isLightBg ? "text-black" : "text-white",
                  "font-medium",
                );

                return (
                  <NavigationMenuItem key={link.name}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "relative px-5 py-2 text-sm font-medium transition-colors",
                          isActive ? active : inactive,
                        )}
                      >
                        <span>{link.name}</span>

                        {isActive && (
                          <motion.span
                            layoutId="navbar-active-underline"
                            className={cn(
                              "absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full",
                              isLightBg ? "bg-black" : "bg-white",
                            )}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 35,
                            }}
                          />
                        )}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            onClick={() => openDrawer("valley-of-flowers")}
            className={cn(
              "group h-9 rounded-full px-5 text-sm font-medium tracking-normal transition-all duration-200",
              navScrolled
                ? "bg-foreground text-background hover:opacity-90"
                : "bg-background/90 text-foreground backdrop-blur-md hover:bg-background",
            )}
          >
            Join Journey
            <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Sheet
            open={mobileMenuOpen}
            onOpenChange={(open) => !open && closeMobileMenu()}
          >
            <SheetTrigger asChild>
              <button
                onClick={toggleMobileMenu}
                className={cn("p-2 transition-colors duration-500", textColor)}
              >
                <Menu className="size-6" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className={cn(
                "w-screen h-screen max-w-none border-none shadow-none",
                "bg-monk-beige/60 backdrop-blur-3xl",
                "p-8 flex flex-col rounded-l-2xl",
              )}
            >
              <VisuallyHidden>
                <SheetTitle>Mobile Menu</SheetTitle>
                <SheetDescription>
                  Navigation for The Traveling Monk
                </SheetDescription>
              </VisuallyHidden>

              {/* Mobile Header */}
              <div className="pt-8 flex justify-between items-center">
                <span className="  text-2xl">The Traveling Monk</span>
              </div>

              <div className="grow flex flex-col justify-center gap-8">
                <AnimatePresence>
                  {mobileMenuOpen &&
                    navLinks.map((link, i) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.6 }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMobileMenu}
                          className={cn(
                            "text-4xl",
                            "hover:text-[#8C6B4A] transition-colors",
                          )}
                          style={{ color: PRIMARY_COLOR }}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>

              {/* Mobile Footer */}
              <div className="mt-auto">
                <Button
                  className={cn(
                    "w-full rounded-full h-16 text-xs uppercase tracking-[0.3em] font-bold text-white",
                  )}
                  style={{ backgroundColor: PRIMARY_COLOR }}
                  onClick={() => {
                    closeMobileMenu();
                    openDrawer("valley-of-flowers");
                  }}
                >
                  Join a journey
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
