"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Footer from "./components/site/Footer";
import Image from "next/image";

export default function Providers({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Kids Programs", href: "/childrens" },
    { label: "Adult Programs", href: "/adults" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white text-blue-600  fixed w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-fit items-center">
            <Link href="/" className="text-xl font-bold">
              <Image
                src={'/logo.jpg'}
                height={200}
                width={200}
                alt="logo"
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-blue-200 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-600 px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-white hover:bg-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Push content below navbar */}
      <div className="pt-16">{children}</div>
      <Footer />
    </>
  );
}
