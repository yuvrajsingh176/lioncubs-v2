"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Footer from "./components/site/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Providers({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Kids Programs", href: "/childrens" },
    { label: "Adult Programs", href: "/adults" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white text-blue-600 fixed w-full z-50 shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-fit items-center">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold flex items-center gap-2">
              <Image
                src={"/logo.jpg"}
                height={120}
                width={120}
                alt="logo"
                className="transition-transform hover:scale-105"
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="relative font-medium transition-colors hover:text-blue-500"
                  >
                    {link.label}
                    {/* Animated underline */}
                    <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="p-2"
              >
                {isOpen ? (
                  <motion.div
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white text-black px-2 pt-2 pb-4 space-y-1 border-y shadow-inner"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Push content below navbar */}
      <div className="pt-8">{children}</div>
      <Footer />
    </>
  );
}
