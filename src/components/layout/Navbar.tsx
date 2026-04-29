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
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navLinks = [
  { name: "Treks", href: "/treks" },
  { name: "About", href: "/about" },
  { name: "Community", href: "/community" },
  { name: "Corporate", href: "/corporate" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const {
    navScrolled,
    setNavScrolled,
    mobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    openBookingDrawer,
  } = useUiStore();

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
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 px-6",
        navScrolled
          ? "bg-parchment/95 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "font-display italic text-[22px] font-semibold transition-colors",
            navScrolled
              ? "text-saffron"
              : "text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]",
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
                        "text-[11px] uppercase tracking-[0.2em] font-medium transition-colors",
                        navScrolled
                          ? "text-forest/70 hover:text-forest"
                          : "text-white/80 hover:text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]",
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
            onClick={openBookingDrawer}
          >
            Join a Trek <ArrowRight className="size-3 ml-2" />
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
                    navScrolled ? "text-forest" : "text-white",
                  )}
                />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className={cn(
                "w-screen h-screen max-w-none border-none shadow-none",
                "bg-monk-beige/50 backdrop-blur-2xl",
                "p-8 flex flex-col",
              )}
            >
              <VisuallyHidden>
                <SheetTitle>Mobile Navigation Menu</SheetTitle>
              </VisuallyHidden>

              <div className="p-8 flex justify-between items-center">
                <span className="font-display italic text-2xl text-forest">
                  The Traveling Monk
                </span>
                <SheetClose asChild>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 text-forest/60 hover:text-forest"
                  >
                    <X className="size-6" />
                  </button>
                </SheetClose>
              </div>

              <div className="grow flex flex-col justify-center px-10 gap-8">
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
                          className="text-4xl font-display italic text-forest"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>

              <div className="p-12">
                <Button
                  variant="saffron"
                  className="w-full rounded-full py-7 text-lg font-bold shadow-xl shadow-saffron/10"
                  onClick={() => {
                    closeMobileMenu();
                    openBookingDrawer();
                  }}
                >
                  Join a Trek <ArrowRight className="size-5 ml-2" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
