"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(navigation.links[0].href);

  // Handle scroll to add glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-bg-cream/80 backdrop-blur-md border-b border-black/[0.04] py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative flex items-center shrink-0" onClick={() => setActiveLink("#home")}>
            <div className="relative w-64 h-16 md:w-80 md:h-20">
              <Image
                src="/images/logo.png"
                alt="Nexora Labs"
                fill
                className="object-contain object-left scale-[1.15] md:scale-[1.25] origin-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.links.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className="relative group py-2"
                >
                  <span
                    className={cn(
                      "text-[15px] font-medium transition-colors duration-200",
                      isActive
                        ? "text-primary-gold"
                        : "text-text-dark hover:text-primary-gold"
                    )}
                  >
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-gold"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {/* Hover indicator for inactive links */}
                  {!isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex shrink-0">
            <Link href={navigation.cta.href}>
              <Button variant="primary" size="sm">
                {navigation.cta.label}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center p-2 text-text-dark hover:text-primary-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-bg-cream border-b border-black/[0.04] overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 space-y-4">
              {navigation.links.map((link) => {
                const isActive = activeLink === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      "text-lg font-medium transition-colors",
                      isActive ? "text-primary-gold" : "text-text-dark"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 pb-2">
                <Link href={navigation.cta.href} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" size="md" className="w-full">
                    {navigation.cta.label}
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
