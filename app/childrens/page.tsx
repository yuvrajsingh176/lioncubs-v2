"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Trophy,
  Cake,
  Activity,
  Shield,
  Clock,
  Users,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function ChildrenPage() {
  const ageGroups = useMemo(
    () => [
      {
        age: "2.5–4 years",
        desc: "Fun movement games, basic gymnastics, mini sports drills",
        color: "from-blue-100 to-cyan-100",
      },
      {
        age: "5–8 years",
        desc: "Multi-sport introduction with skill-based progressions",
        color: "from-cyan-100 to-indigo-100",
      },
      {
        age: "9–10 years",
        desc: "Advanced skill development, teamwork, and friendly play",
        color: "from-indigo-100 to-violet-100",
      },
    ],
    []
  );

  const sports = useMemo(
    () => [
      { name: "Football", icon: "football" },
      { name: "Basketball", icon: "basketball" },
      { name: "Cricket", icon: "cricket" },
      { name: "Tennis", icon: "tennis" },
      { name: "Rugby", icon: "rugby" },
      { name: "Self-Defence", icon: "selfdefence" },
      { name: "Volleyball", icon: "volleyball" },
      { name: "Gymnastics", icon: "gym" },
    ],
    []
  );

  const benefits = useMemo(
    () => [
      "Multi-sport exposure to develop all-round athletic skills",
      "Expert coaches trained in child fitness and sports education",
      "Fun-first approach to keep kids engaged and motivated",
      "Safe, age-appropriate equipment and training drills",
      "Monthly friendly matches to boost confidence",
      "Quarterly skill assessments to track progress",
    ],
    []
  );

  const schedule = useMemo(
    () => [
      "Day 1: Football + Basic Gymnastics",
      "Day 2: Basketball + Self-Defence",
      "Day 3: Cricket + Tennis",
      "Special Weekends: Rugby + Volleyball + Fun Challenges",
    ],
    []
  );

  const safety = useMemo(
    () => [
      "All sessions conducted on safe, child-friendly surfaces",
      "Coaches trained in CPR and basic first aid",
      "Mandatory warm-up and cool-down in every session",
      "Regular sanitization of sports equipment",
      "Parents can observe sessions from designated viewing areas",
    ],
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Title */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-1 text-sm text-blue-700 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Ages 2.5–10 • Multi-Sport • Fun-First
          </div>
          <h1 className="mt-3 text-3xl font-bold text-blue-900 md:text-5xl">
            Kids Programs
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-blue-800/80 md:text-lg">
            LionCubs Fitness offers fun, structured multi-sports programs to
            build strength, confidence, teamwork, and motor skills.
          </p>
        </motion.div>

        {/* Business Hours */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerStagger}
          className="mx-auto mt-10 max-w-4xl rounded-2xl border bg-white/70 p-6 text-center shadow-sm backdrop-blur"
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-blue-900">
            Business Hours
          </motion.h2>
          <div className="mt-4 space-y-3">
            {[
              "Regular Academy Sessions: Mon–Fri (4:00 PM – 7:00 PM)",
              "Weekend Sports Clinics: Saturday (9:00 AM – 11:00 AM)",
              "Holiday/Summer Camps: Special schedules announced in advance",
            ].map((text) => (
              <motion.p
                key={text}
                variants={fadeUp}
                className="mx-auto flex max-w-2xl items-center justify-center gap-2 text-blue-800"
                whileHover={{ scale: 1.03 }}
              >
                <Clock className="h-5 w-5 text-blue-600" />
                {text}
              </motion.p>
            ))}
          </div>
        </motion.section>

        {/* Age Groups */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {ageGroups.map((g) => (
            <motion.div
              key={g.age}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className={`rounded-2xl border bg-gradient-to-br ${g.color} p-6 shadow-sm`}
            >
              <h3 className="text-xl font-bold text-blue-900">{g.age}</h3>
              <p className="mt-1 text-blue-800/80">{g.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Sports Offered */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-bold text-blue-900">Sports Offered</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {sports.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.06 }}
                className="flex w-28 flex-col items-center rounded-xl border bg-white/80 p-4 shadow-sm backdrop-blur"
              >
                <div className="relative mb-2 h-12 w-12">
                  <Image
                    src={`/${s.icon}.svg`}
                    alt={s.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-blue-900">
                  {s.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Special Programs & Success */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerStagger}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-2xl border bg-white/80 p-6 text-center shadow-sm backdrop-blur"
          >
            <Cake className="mx-auto mb-3 h-8 w-8 text-blue-600" />
            <h3 className="text-lg font-semibold text-blue-900">
              Birthday Bash at the Centre
            </h3>
            <p className="mt-1 text-blue-800/80">
              Host themed celebrations for 1–2 hours with guided activities.
              Complimentary cake included!
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-2xl border bg-white/80 p-6 text-center shadow-sm backdrop-blur"
          >
            <Trophy className="mx-auto mb-3 h-8 w-8 text-blue-600" />
            <h3 className="text-lg font-semibold text-blue-900">
              Summer Sports Camp 2025
            </h3>
            <p className="mt-1 text-blue-800/80">
              120+ children joined multi-sport challenges with 95% parent
              satisfaction. Many progressed to school teams—confidence up,
              skills strong, smiles bigger!
            </p>
          </motion.div>
        </motion.section>

        {/* Key Benefits */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
          className="mt-12"
        >
          <h2 className="text-center text-2xl font-bold text-blue-900">
            Key Benefits
          </h2>
          <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
            {benefits.map((b) => (
              <motion.div
                key={b}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 rounded-2xl border bg-white/80 p-4 text-blue-800/90 shadow-sm backdrop-blur"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-600" />
                <p>{b}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Schedule */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
          className="mt-12"
        >
          <h2 className="text-center text-2xl font-bold text-blue-900">
            Schedule
          </h2>
          <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
            {schedule.map((s) => (
              <motion.div
                key={s}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="flex items-center gap-3 rounded-2xl border bg-gradient-to-r from-blue-50 to-indigo-50 p-4 shadow-sm"
              >
                <div className="rounded-full bg-blue-600 p-2 text-white">
                  <Clock className="h-4 w-4" />
                </div>
                <p className="font-medium text-blue-900">{s}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Coaching Team */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="mx-auto mt-12 max-w-5xl rounded-2xl border bg-white/80 p-6 text-center text-blue-800/90 shadow-sm backdrop-blur"
        >
          <h2 className="text-xl font-bold text-blue-900">Coaching Team</h2>
          <p className="mt-1">
            Certified sports instructors with expertise in child fitness, sports
            pedagogy & first aid. Max 1:10 coach-to-student ratio for personal
            attention.
          </p>
        </motion.section>

        {/* Safety Measures */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerStagger}
          className="mt-12"
        >
          <h2 className="text-center text-2xl font-bold text-blue-900">
            Safety Measures
          </h2>
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
            {safety.map((note) => (
              <motion.div
                key={note}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 rounded-2xl border bg-white/80 p-4 text-blue-800 shadow-sm backdrop-blur"
              >
                <Shield className="mt-0.5 h-5 w-5 text-blue-600" />
                <p>{note}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Safety & Quality Visual */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mt-12 max-w-7xl"
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-blue-900">
                Safety, Training & Quality
              </h3>
              <p className="mt-3 text-blue-800/80">
                Our team is trained in child-first supervision, first-aid and
                age-appropriate activity design. We maintain strict cleaning
                routines and all equipment is inspected regularly.
              </p>
              <ul className="mt-4 space-y-2 text-blue-800/90">
                <li>• Staff trained in child safety & behaviour management</li>
                <li>• Sanitisation after every session</li>
                <li>• Age-grouped sessions to promote fair play</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-slate-200/60">
              <Image
                src="/safety.avif"
                alt="Safety and staff"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12 text-center"
        >
          <a
            href="https://wa.me/919818387160?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20kids%20programs."
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-xl bg-blue-600 px-8 py-3 font-medium text-white shadow-md transition-transform hover:scale-105 hover:bg-blue-700"
          >
            Book Free Trial Class
          </a>
        </motion.div>
      </div>
    </div>
  );
}
