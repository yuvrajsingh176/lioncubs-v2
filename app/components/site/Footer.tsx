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
      </div>
    </footer>
  );
}
