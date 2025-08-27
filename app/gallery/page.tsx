"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "../components/ui/button";

export default function GalleryPage() {
  const images = useMemo(
    () => [
      { src: "/gallery/heroimage1.avif", alt: "Agility ladder drills" },
      { src: "/gallery/heroimage2.avif", alt: "Coach high-five" },
      { src: "/gallery/heroimage3.avif", alt: "Team huddle" },
      { src: "/gallery/heroimage4.avif", alt: "Parent-child session" },
      { src: "/gallery/heroimage5.avif", alt: "Adult yoga class" },
      { src: "/gallery/heroimage6.avif", alt: "Zumba energy" },
      { src: "/gallery/heroimage7.avif", alt: "Table Tennis drills" },
      { src: "/gallery/heroimage8.avif", alt: "Outdoor football practice" },
      { src: "/gallery/heroimage9.avif", alt: "Balance beam practice" },
      { src: "/gallery/heroimage10.avif", alt: "Balance beam practice" },
      { src: "/gallery/heroimage11.avif", alt: "Balance beam practice" },
      { src: "/gallery/heroimage12.avif", alt: "Balance beam practice" },
      { src: "/gallery/heroimage13.avif", alt: "Balance beam practice" },
      { src: "/gallery/heroimage14.avif", alt: "Balance beam practice" },

    ],
    []
  );

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  return (
    <main className=" py-10 md:px-32 px-4 md:py-16">
      {/* Heading */}
      <div >
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold md:text-5xl"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-muted-foreground"
          >
            A glimpse of our sessions and smiles.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4"
        >
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              onClick={() => openAt(i)}
              className="group relative overflow-hidden rounded-2xl border bg-white/60 shadow-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-slate-200/60"></div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={close}
            >
              <motion.div
                key={images[index].src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={images[index].src}
                    alt={images[index].alt}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Controls */}
                <div className="mt-3 flex items-center justify-between text-white">
                  <div className="text-sm">{index + 1} / {images.length}</div>
                  <div className="flex gap-2">
                    <Button onClick={prev} size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button onClick={next} size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                    <Button onClick={close} size="icon" variant="destructive">
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
