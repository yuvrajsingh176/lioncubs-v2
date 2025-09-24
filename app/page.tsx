"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

import {
  Activity,
  Brain,
  HeartHandshake,
  Music,
  ShieldCheck,
  Target,
  Trophy,
  Users,
  Sparkles,
  Dumbbell,
  Star,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import CountUp from "./components/site/Countup";
import Link from "next/link";
import { useState } from "react";
import Contact from "./components/site/Contact";
import CaraouselHero from "./components/site/CaraouselHero";
import Carousel from "./components/site/Caraousel";



const galleryImages = [
  { src: "/gallery/heroimage1.avif", alt: "Agility ladder drills" },
  { src: "/gallery/heroimage2.avif", alt: "Coach high-five" },
  { src: "/gallery/heroimage3.jpg", alt: "Team huddle" },
  { src: "/gallery/heroimage4.avif", alt: "Parent-child session" },
  { src: "/gallery/heroimage5.avif", alt: "Adult yoga class" },
  { src: "/gallery/heroimage6.avif", alt: "Zumba energy" },
];

const SliderImages = [
  { id: 1, imageUrl: "/gallery/heroimage1.avif", alt: "Agility ladder drills" },
  { id: 2, imageUrl: "/gallery/heroimage2.avif", alt: "Coach high-five" },
  { id: 3, imageUrl: "/gallery/heroimage3.jpg", alt: "Team huddle" },
  { id: 4, imageUrl: "/gallery/heroimage4.avif", alt: "Parent-child session" },
  { id: 5, imageUrl: "/gallery/heroimage5.avif", alt: "Adult yoga class" },
  { id: 6, imageUrl: "/gallery/heroimage6.avif", alt: "Zumba energy" },
];





const whatsappUrl = `https://wa.me/919818387498?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20a%20free%20demo%20class.`;

// ---------- Motion helpers ----------
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const listItem = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

// ---------- Small building blocks ----------
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
      <Sparkles className="h-3.5 w-3.5" /> {children}
    </span>
  );
}

function Feature({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <motion.div variants={fadeUp}>
      <Card className="h-full rounded-2xl border-slate-200/60 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <div className="rounded-xl border bg-gradient-to-br from-blue-50 to-indigo-50 p-2">
              <Icon className="h-5 w-5 text-blue-600" />
            </div>
            <CardTitle className="text-base md:text-lg">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-0 text-sm text-muted-foreground">{desc}</CardContent>
      </Card>
    </motion.div>
  );
}

function Reason({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <motion.li variants={listItem} className="flex justify-start text-start w-full items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-600" />
      <span className="text-sm md:text-base text-start w-full">{text}</span>
    </motion.li>
  );
}

// ---------- Main About ----------
export default function AboutEnhanced() {
  // subtle parallax for decorative blob
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const openAt = (i: number) => { setLightboxIndex(i); setLightboxOpen(true); };
  const close = () => setLightboxOpen(false);
  const prev = () => setLightboxIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setLightboxIndex((i) => (i + 1) % galleryImages.length);
  const leftReasons = [
    { icon: ShieldCheck, text: "Certified Trainers" },
    { icon: Brain, text: "Child Psychology Integrated Programs" },
    { icon: Music, text: "Music, Movement & Mindfulness" },
    { icon: Activity, text: "Multi-sports sessions inspired by global best practices" },
  ];

  const rightReasons = [
    { icon: HeartHandshake, text: "Safe, inclusive environment" },
    { icon: Target, text: "Quarterly Physical Fitness Report Card" },
    { icon: Trophy, text: "Monthly friendly matches" },
    { icon: Users, text: "Bond & Bloom – parent-child sessions" },
  ];

  const features = [
    {
      icon: Dumbbell,
      title: "Play-first Fitness",
      desc: "Fun multi-sport drills that build strength, agility and confidence for ages 2.5–10.",
    },
    {
      icon: Brain,
      title: "Mindful Growth",
      desc: "Programs designed with child psychology to nurture focus, teamwork and resilience.",
    },
    {
      icon: ShieldCheck,
      title: "Safety & Care",
      desc: "First‑aid certified coaches, safe equipment and small batch sizes for attention to each child.",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <Carousel slides={SliderImages} />

      <motion.div
        style={{ y }}
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 left-[-10%] h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="md:px-32 px-4 pt-8 pb-16 md:pb-24">
        {/* Heading */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <Badge>Kids • Adults • Family</Badge>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">LionCubs Fitness</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">

            At LionCubs Fitness, we build strong bodies and minds through movement, imagination and joy. Kids learn to collaborate and cheer each other on, while adults enjoy programs like Zumba, Yoga, Table Tennis and corporate wellness events.
          </p>
        </motion.div>

        {/* Services Section */}
        <section className="mt-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold md:text-3xl">Our Services</h3>
            <p className="mt-2 text-muted-foreground text-sm md:text-base">
              Programs designed for every age group to stay active, healthy, and happy.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Kids Programs */}
            <Link href={'/childrens'}>
              <motion.div
                whileHover={{ y: -4 }}
                variants={fadeUp}
                className="rounded-2xl border bg-white/70 p-6 text-center shadow-sm backdrop-blur transition-all hover:shadow-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100">
                  <Users className="h-7 w-7 text-blue-600" />
                </div>
                <h4 className="mt-4 text-lg font-semibold">Kids Programs</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fun multi-sport drills, creative movement, and fitness activities designed
                  for children aged 2.5–10.
                </p>
              </motion.div>
            </Link>

            {/* Adult Programs */}
            <Link href={'/adults'}>
              <motion.div
                whileHover={{ y: -4 }}
                variants={fadeUp}
                className="rounded-2xl border bg-white/70 p-6 text-center shadow-sm backdrop-blur transition-all hover:shadow-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-100 to-emerald-100">
                  <Dumbbell className="h-7 w-7 text-green-600" />
                </div>
                <h4 className="mt-4 text-lg font-semibold">Adult Programs</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Zumba, Yoga, Table Tennis, and wellness events that help adults stay fit,
                  reduce stress, and build community.
                </p>
              </motion.div>
            </Link>
          </div>
        </section>

        <div className="mt-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold md:text-3xl">Our Motive</h3>
            <p className="mt-2 text-muted-foreground text-sm md:text-base">
              Our motive is to build strong bodies, sharp minds, and happy hearts through fun, safe, and inclusive fitness for kids, adults, and families.            </p>
          </motion.div>
          {/* Feature cards */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((f) => (
              <Feature key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
            ))}
          </motion.div>
        </div>



        {/* Split: Reasons + Visual */}
        <div className="mt-16">
          {/* Reasons */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h3 className="text-2xl font-semibold text-center md:text-3xl">
              Why families choose us
            </h3>

            <div className="mt-6  gap-8 flex justify-center md:flex-row flex-col ">
              {/* Left list */}
              <ul className="space-y-4 text-center md:text-left md:justify-start flex flex-col items-center md:items-start">
                {leftReasons.map((r) => (
                  <Reason key={r.text} icon={r.icon} text={r.text} />
                ))}
              </ul>

              {/* Right list */}
              <ul className="space-y-4 text-center md:text-left md:justify-start flex flex-col items-center md:items-start">
                {rightReasons.map((r) => (
                  <Reason key={r.text} icon={r.icon} text={r.text} />
                ))}
              </ul>
            </div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <Button
                  variant="hero"
                  size="lg"
                  className="transition-transform hover:scale-105"
                >
                  Book Free Demo
                </Button>
              </a>
              <a href="tel:+919818387498">
                <Button
                  variant="soft"
                  size="lg"
                  className="transition-transform hover:scale-105"
                >
                  Call Now
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Testimonials Section */}
        <section className="mt-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold md:text-3xl">What Parents Say</h3>
            <p className="mt-2 text-muted-foreground text-sm md:text-base">
              Real stories from families who trust LionCubs Fitness.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Rohit Sharma",
                comment:
                  "My son loves the multi-sport sessions. Coaches are amazing and supportive!",
              },
              {
                name: "Neha Verma",
                comment:
                  "Great environment for kids to learn, grow, and build confidence.",
              },
              {
                name: "Amit Singh",
                comment:
                  "Friendly staff, safe equipment, and lots of energy. Highly recommend!",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-2xl border bg-white/80 p-6 shadow-sm backdrop-blur transition-all hover:shadow-md"
              >
                {/* Stars */}
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                {/* Comment */}
                <p className="mt-3 text-sm text-slate-700">“{t.comment}”</p>
                {/* Author */}
                <div className="mt-4 text-xs font-medium text-slate-600">— {t.name}</div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* Stats row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerStagger}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          {[
            { label: "Students trained", value: "21500" },
            { label: "Avg. class rating", value: "4.9" },
            { label: "Cities", value: "7" },
            { label: "Sports", value: "7" },
            { label: "Coaches", value: "101" },
          ].map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="rounded-2xl border bg-white/70 p-6 text-center shadow-sm backdrop-blur">
              <CountUp target={Number(s.value)} />{typeof s.value === "number" && s.label.includes("rating") ? "" : "+"}
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerStagger}
          className="mt-16"
        >
          <h3 className="text-center text-2xl font-semibold md:text-3xl">Gallery</h3>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            A peek into our sessions and smiles.
          </p>

          {/* Image Grid */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((g, i) => (
              <motion.button
                key={g.src}
                onClick={() => openAt(i)}
                variants={fadeUp}
                whileHover={{ y: -2 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border bg-white/70 shadow-sm"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.button>
            ))}
          </div>

          {/* Show More */}
          <div className="mt-6 flex justify-center">
            <Link href="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="transition-transform hover:scale-105"
              >
                Show more photos
              </Button>
            </Link>
          </div>

          {/* Lightbox */}
          <AnimatePresence>
            {lightboxOpen && (
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                onClick={close}
              >
                <motion.div
                  key={galleryImages[lightboxIndex].src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-5xl"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={galleryImages[lightboxIndex].src}
                      alt={galleryImages[lightboxIndex].alt}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Controls */}
                  <div className="mt-3 flex items-center justify-between text-white">
                    <div className="text-sm">
                      {lightboxIndex + 1} / {galleryImages.length}
                    </div>
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
        </motion.section>
        <Contact />


      </div>

      <style jsx>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}
