"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Users,
  Trophy,
  ShieldCheck,
  Gamepad2,
  PartyPopper,
} from "lucide-react";
import Image from "next/image";

const page = () => {
  const features = [
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
      desc: "Sanitized paddles, balls, and play areas after each session for your safety.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Fun Zone for Kids",
      desc: "Indoor games & activities to keep children entertained while you play.",
      icon: <Gamepad2 className="w-6 h-6" />,
    },
    {
      title: "Events & Tournaments",
      desc: "Friendly competitions, themed nights, and social evenings for all skill levels.",
      icon: <PartyPopper className="w-6 h-6" />,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* Hero */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Table Tennis & Fun Zone — Play, Compete, Enjoy!
            </motion.h1>
            <p className="mt-4 text-lg text-gray-600">
              From thrilling matches to a kid-friendly fun zone, we offer an
              exciting experience for all ages. Whether you’re a pro or just
              playing for fun, our sessions are designed to keep the energy high
              and the smiles wide.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#book"
                className="inline-block rounded-2xl bg-red-600 text-white px-5 py-3 font-medium shadow-lg hover:bg-red-700"
              >
                Book a Session
              </a>
              <a
                href="#features"
                className="inline-block rounded-2xl border border-gray-200 px-5 py-3 text-gray-700 font-medium hover:bg-gray-100"
              >
                View Features
              </a>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-600">
              <li>• Indoor air-conditioned space</li>
              <li>• Coaching available</li>
              <li>• Equipment provided</li>
              <li>• Friendly & safe environment</li>
              <li>• Separate kids’ play area</li>
              <li>• Events & social nights</li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl bg-white"
          >
            <Image
              src="/table-tennis.avif"
              alt="Table tennis game"
              height={1000}
              width={1000}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        id="features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="bg-white py-12"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Why Play Here?</h2>
          <p className="mt-2 text-gray-600">
            A complete entertainment & sports experience for friends, families,
            and competitive players.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border p-5 bg-gradient-to-br from-white to-gray-50 shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-red-50 rounded-full text-red-600">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Booking Form */}
      <motion.section
        id="book"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6 py-12"
      >
        <div className="rounded-2xl bg-red-50 p-8 shadow-lg">
          <h5 className="text-2xl font-bold">Book a Table Tennis Slot</h5>
          <p className="mt-2 text-gray-700">
            Pick your time, tell us who’s playing, and we’ll see you at the
            table. Don’t forget — our kids’ fun zone will keep the little ones
            busy while you enjoy your game.
          </p>

          <form className="mt-6 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="p-3 rounded-lg border" placeholder="Your name" />
              <input
                className="p-3 rounded-lg border"
                placeholder="Phone or email"
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <input type="date" className="p-3 rounded-lg border" />
              <select className="p-3 rounded-lg border">
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
              <input
                type="number"
                className="p-3 rounded-lg border"
                placeholder="No. of players"
              />
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree" className="text-sm text-gray-700">
                I agree to the Rules & Safety Guidelines
              </label>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="rounded-2xl bg-red-600 text-white px-5 py-3 font-medium hover:bg-red-700"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </motion.section>
    </main>
  );
};

export default page;
