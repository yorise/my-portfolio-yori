"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "next-themes";
import useNavbarInvert from "@/utils/hooks/useNavbarInvert";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const invert = useNavbarInvert();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Link href="/home">
        <img
          src="/assets/images/logo-no-bg.png"
          alt="Logo"
          className="w-24 sm:w-32 md:w-40 h-auto"
        />
      </Link>
    );
  }

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contacts", label: "Contacts" },
  ];

  // Helper logo
  const logoSrc =
    theme === "dark"
      ? invert
        ? "/assets/images/logo-no-bg.png"
        : "/assets/images/logo-no-bg-dark.png"
      : invert
      ? "/assets/images/logo-no-bg-dark.png"
      : "/assets/images/logo-no-bg.png";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full backdrop-blur-md shadow-md z-50 transition-colors duration-300 ${
        invert ? "text-sidebar" : "text-foreground"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/home">
          <img
            src={logoSrc}
            alt="Logo"
            className="w-24 sm:w-32 md:w-40 h-auto"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 font-medium items-center">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-bold transition-colors duration-300 ${
                    isActive
                      ? "text-chart-2"
                      : invert
                      ? "text-sidebar hover:text-chart-2"
                      : "text-foreground hover:text-chart-2"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Theme Toggle*/}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
        </div>

        {/* Hamburger & Theme Toggle*/}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className={`${invert ? "text-sidebar" : "text-foreground"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background shadow-md"
      >
        <ul className="flex flex-col gap-4 px-6 py-4">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-bold transition-colors duration-300 ${
                    isActive
                      ? "text-chart-2"
                      : invert
                      ? "text-sidebar hover:text-chart-2"
                      : "text-foreground hover:text-chart-2"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </motion.nav>
  );
}
