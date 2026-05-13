"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useUiStore } from "@/stores/uiStore";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setNavScrolled]);

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 px-6 transition-all duration-500",
        navScrolled
          ? [
              "py-3",
              "bg-parchment/20", // very light tint
              "backdrop-blur-xl", // stronger blur
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
            "font-display italic text-[22px] font-semibold transition-colors",
            isTreksPage || navScrolled ? "text-monk-brown-deep" : "text-white",
          )}
        >
          The Traveling Monk
        </Link>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "bg-transparent hover:bg-transparent focus:bg-transparent px-3 py-2",
                        "text-lg tracking-widest font-black transition-colors",
                        isTreksPage || navScrolled
                          ? "text-monk-brown-deep"
                          : "text-white",
                      )}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="saffron"
            size="sm"
            className="rounded-full px-6 font-bold uppercase tracking-wider text-[10px] shadow-lg shadow-saffron/20"
            onClick={() => openDrawer("valley-of-flowers")}
          >
            Join a trip <ArrowRight className="size-3 ml-2" />
          </Button>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Sheet
            open={mobileMenuOpen}
            onOpenChange={(open) => !open && closeMobileMenu()}
          >
            <SheetTrigger asChild>
              <button onClick={toggleMobileMenu} className="p-2">
                <Menu
                  className={cn(
                    "size-6 transition-colors",
                    isTreksPage || navScrolled
                      ? "text-monk-brown-deep"
                      : "text-white",
                  )}
                />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className={cn(
                "w-screen h-screen max-w-none border-none shadow-none",
                "bg-monk-beige/50 backdrop-blur-2xl",
                "p-8 flex flex-col rounded-l-2xl",
              )}
            >
              <VisuallyHidden>
                <SheetTitle>Mobile Navigation Menu</SheetTitle>
                <SheetDescription>
                  Navigate through our mountain journeys and philosophy.
                </SheetDescription>
              </VisuallyHidden>

              <div className="pt-10 flex justify-between items-center">
                <span className="font-display italic text-2xl text-forest font-light">
                  The Traveling Monk
                </span>
              </div>

              <div className="grow flex flex-col justify-center gap-8">
                <AnimatePresence>
                  {mobileMenuOpen &&
                    navLinks.map((link, i) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: i * 0.08,
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMobileMenu}
                          className="text-4xl font-bold font-display italic text-forest"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>

              <div>
                <Button
                  variant="saffron"
                  className="w-full rounded-full py-7 text-lg font-bold shadow-xl shadow-saffron/10"
                  onClick={() => {
                    closeMobileMenu();
                    openDrawer("valley-of-flowers");
                  }}
                >
                  Join a trip <ArrowRight className="size-5 ml-2" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
