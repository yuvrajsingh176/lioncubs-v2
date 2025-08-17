"use client";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="border-t bg-blue-200 py-10 px-10">
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} LionCubs Fitness. All rights reserved.
        </p>

        {/* Show nav only on home page */}
        {pathname === "/" && (
          <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#programs" className="hover:text-foreground">Programs</a>
            <a href="#faq" className="hover:text-foreground">FAQs</a>
            <a href="#contactt" className="hover:text-foreground">Contact</a>
          </nav>
        )}
      </div>
    </footer>
  );
}
