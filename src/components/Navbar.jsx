"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full backdrop-blur-md shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/home">
          <img
            src="/assets/images/logo-no-bg.png"
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
                      : "text-gray-700 hover:text-chart-2"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}

          {/* Contact */}
          <Link
            href="/contacts"
            className={`group text-xl font-bold flex items-center gap-2 transition-colors duration-300 ${
              pathname === "/contacts"
                ? "text-chart-2"
                : "text-gray-700 hover:text-chart-2"
            }`}
          >
            <MessageCircle
              size={28}
              className={`transition-transform duration-300 group-hover:rotate-12 ${
                pathname === "/contacts" ? "text-chart-2" : ""
              }`}
            />
            Contact
          </Link>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white shadow-md"
      >
        <ul className="flex flex-col gap-4 px-6 py-4">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`font-bold transition-colors duration-300 block ${
                    isActive
                      ? "text-chart-2"
                      : "text-gray-700 hover:text-chart-2"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          {/* Contact */}
          <Link
            href="/contacts"
            onClick={() => setIsOpen(false)}
            className={`group text-xl font-bold flex items-center gap-2 transition-colors duration-300 ${
              pathname === "/contacts"
                ? "text-chart-2"
                : "text-gray-700 hover:text-chart-2"
            }`}
          >
            <MessageCircle
              size={28}
              className={`transition-transform duration-300 group-hover:rotate-12 ${
                pathname === "/contacts" ? "text-chart-2" : ""
              }`}
            />
            Contact
          </Link>
        </ul>
      </motion.div>
    </motion.nav>
  );
}
