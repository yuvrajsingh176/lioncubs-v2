"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle,
  HeartPulse,
  Users,
  Music,
  Shield,
  Sparkles,
  Heart,
  Trophy,
  CalendarDays,
  ShieldCheck,
  Gamepad2,
  PartyPopper,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const containerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function AdultsPage() {
  const programs = useMemo(
    () => [
      {
        title: "Zumba",
        description:
          "High-energy Zumba sessions to keep you fit, active, and motivated.",
        img: "/zumba.avif",
        icon: Music,
        linl: "zumba",
      },
      {
        title: "Yoga & Certification",
        description:
          "Learn yoga techniques and earn certification from our experienced instructors.",
        img: "/yoga.avif",
        icon: Shield,
        linl: "yoga",
      },
      {
        title: "Table Tennis",
        description:
          "Fun and competitive table tennis sessions for all skill levels.",
        img: "/tt.avif",
        icon: Users,
        linl: "tt",
      },
      {
        title: "Corporate Events",
        description:
          "Team-building and fitness activities customized for corporate groups.",
        img: "/event.avif",
        icon: HeartPulse,
        linl: "ce",
      },
    ],
    []
  );

  const features = useMemo(
    () => [
      "Boost your fitness & flexibility",
      "Expert guidance from certified instructors",
      "Fun, engaging, and inclusive sessions",
      "Team-building and social interaction",
      "Certification for Yoga participants",
    ],
    []
  );

  const featurestt = useMemo(
    () => [
      {
        title: "Pro-Grade Tables",
        desc: "Well-maintained indoor tables for competitive and casual games.",
        icon: <Trophy className="w-6 h-6" />,
      },
      {
        title: "Book Your Slot",
        desc: "Easy online booking to secure your preferred time slot.",
        icon: <CalendarDays className="w-6 h-6" />,
      },
      {
        title: "Doubles & Singles",
        desc: "Play 1-on-1 or doubles with friends, colleagues, or new partners.",
        icon: <Users className="w-6 h-6" />,
      },
      {
        title: "Safety & Cleanliness",
        desc: "Sanitized paddles, balls, and play areas after each session.",
        icon: <ShieldCheck className="w-6 h-6" />,
      },
      {
        title: "Fun Zone for Kids",
        desc: "Indoor games to keep children entertained while you play.",
        icon: <Gamepad2 className="w-6 h-6" />,
      },
      {
        title: "Events & Tournaments",
        desc: "Friendly competitions and social evenings for all skill levels.",
        icon: <PartyPopper className="w-6 h-6" />,
      },
    ],
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-1 text-sm text-indigo-700 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Yoga • Zumba • Table Tennis • Corporate
          </div>
          <h1 className="mt-3 text-3xl font-bold text-blue-900 md:text-5xl">
            Adult Programs at LionCubs Fitness
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-indigo-800/80 md:text-lg">
            Energizing wellness programs designed to motivate, build confidence,
            and keep you active.
          </p>
        </motion.div>

        {/* Programs */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerStagger}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {programs.map((p) => (
            <motion.a
              key={p.title}
              href={`#${p.linl}`}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-2xl border bg-white/80 shadow-sm transition-shadow hover:shadow-lg"
            >
              <Image
                src={p.img}
                alt={p.title}
                width={800}
                height={500}
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-indigo-600">
                  <p className="text-xl font-semibold">{p.title}</p>
                  <p className="ml-auto">
                    <p.icon className="h-6 w-6" />
                  </p>
                </div>
                <p className="mt-1 text-indigo-800/80">{p.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.section>

        {/* Features */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mt-16 max-w-4xl rounded-2xl border bg-indigo-50 p-6 text-center shadow-sm backdrop-blur"
        >
          <h2 className="text-2xl font-bold text-indigo-700">What You’ll Get</h2>
          <div className="mt-6 grid gap-4">
            {features.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 rounded-xl border bg-white/80 p-4 text-indigo-900 shadow-sm"
              >
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-indigo-600" />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Table Tennis */}
        <motion.section
          id="tt"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mt-16 max-w-7xl"
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-blue-900">
                Table Tennis & Fun Zone
              </h2>
              <p className="mt-2 text-indigo-800/80">
                From thrilling matches to a kid-friendly fun zone — play for
                fun, fitness, or competition in a supportive environment.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-indigo-700">
                <li>• Indoor air-conditioned space</li>
                <li>• Coaching available</li>
                <li>• Equipment provided</li>
                <li>• Events & social nights</li>
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src="/table-tennis.avif"
                alt="Table Tennis"
                width={1000}
                height={700}
                className="w-full object-cover"
              />
            </motion.div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featurestt.map((f) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="flex items-start gap-3 rounded-2xl border bg-white/80 p-5 shadow-sm"
              >
                <div className="rounded-full bg-indigo-50 p-3 text-indigo-600">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-900">{f.title}</h3>
                  <p className="text-sm text-indigo-700">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-blue-900">
            Book Your Session Today
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-indigo-800/80">
            Schedule a trial class or corporate program. Start your wellness
            journey with LionCubs Fitness.
          </p>
          <a
            href="https://wa.me/919818387160?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20adult%20programs."
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-8 py-3 font-medium text-white shadow-md transition-transform hover:scale-105 hover:bg-blue-700"
          >
            Contact via WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
}
