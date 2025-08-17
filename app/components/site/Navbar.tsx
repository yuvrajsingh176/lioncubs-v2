"use client";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#activities", label: "Activities" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

const whatsappUrl = `https://wa.me/919818387498?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20a%20free%20demo%20class.`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 flex justify-center items-center z-40 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 font-bold tracking-tight"
        >
          <span className="text-lg">LionCubs Fitness</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <Button variant="hero" size="lg">
              Book Free Demo
            </Button>
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden p-2"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu />
        </button>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 right-0 h-dvh w-64 bg-white  shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-md  "
        >
          <X />
        </button>

        {/* Mobile Links */}
        <nav className="mt-16 flex flex-col gap-4 px-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-800  hover:text-blue-600"
            >
              {l.label}
            </a>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <Button variant="hero" size="lg" className="mt-4 w-full">
              Book Free Demo
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}
