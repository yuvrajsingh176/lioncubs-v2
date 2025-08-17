'use client'
import React from "react";
import { motion } from "framer-motion";
import { Gamepad, Users, Star, ShieldCheck } from "lucide-react";
import Image from "next/image";

const page = () => {
  const activities = [
    {
      title: "Indoor Obstacle Courses",
      desc: "Safe, modular obstacle courses that boost coordination and confidence.",
      icon: <Gamepad className="w-6 h-6" />,
    },
    {
      title: "Mini Sports Arenas",
      desc: "Table tennis, mini-badminton and soft-soccer zones for friendly matches.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Creative Play Corners",
      desc: "Arts, crafts and imaginative play stations supervised by trained staff.",
      icon: <Star className="w-6 h-6" />,
    },
    {
      title: "Sensory & Soft Play",
      desc: "Age-appropriate soft-play for toddlers with strict hygiene routines.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
  ];

  // Animation presets
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
              Funzone — Indoor Play & Activities for Children
            </motion.h1>
            <p className="mt-4 text-lg text-gray-600">
              A safe, exciting space where kids learn, move and make friends. Our
              Funzone offers a variety of supervised activities designed to
              encourage physical play, creativity and social skills.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#book"
                className="inline-block rounded-2xl bg-indigo-600 text-white px-5 py-3 font-medium shadow-lg hover:bg-indigo-700"
              >
                Book a Visit
              </a>
              <a
                href="#activities"
                className="inline-block rounded-2xl border border-gray-200 px-5 py-3 text-gray-700 font-medium hover:bg-gray-100"
              >
                See Activities
              </a>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-600">
              <li>• Supervised by trained staff</li>
              <li>• Age-segmented sessions</li>
              <li>• Strict safety & hygiene</li>
              <li>• Group discounts available</li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl bg-white"
          >
            <Image
              src="/funzone.avif"
              alt="children playing in funzone"
              height={1000}
              width={1000}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Activities */}
      <motion.section
        id="activities"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="bg-white py-12"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Activities & Zones</h2>
          <p className="mt-2 text-gray-600">
            Carefully curated play zones that focus on skill-building, fun and
            social interaction.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((a, i) => (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border p-5 bg-gradient-to-br from-white to-gray-50 shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-indigo-50 rounded-full text-indigo-600">
                    {a.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{a.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{a.desc}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <a
                    href="#book"
                    className="inline-block text-sm font-medium underline"
                  >
                    Learn more
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Safety & Experience */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Safety, Training & Quality</h3>
            <p className="mt-3 text-gray-600">
              Our team is trained in child-first supervision, first-aid and age
              appropriate activity design. We maintain strict cleaning routines
              and all equipment is inspected regularly.
            </p>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Staff trained in child safety & behaviour management</li>
              <li>• Sanitisation after every session</li>
              <li>• Age-grouped sessions to promote fair play</li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/safety.avif"
              alt="safety and staff"
              className="w-full h-fit object-cover"
              height={1100}
              width={1100}
            />
          </div>
        </div>
      </motion.section>

      {/* Gallery */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="bg-white py-12"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h4 className="text-xl font-bold">Gallery</h4>
          <p className="mt-2 text-gray-600">Moments from our Funzone sessions.</p>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="rounded-lg overflow-hidden shadow"
              >
                <img
                  src={`/gallery/${i + 1}.jpg`}
                  alt={`funzone ${i + 1}`}
                  className="w-full h-36 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Booking */}
      <motion.section
        id="book"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6 py-12"
      >
        <div className="rounded-2xl bg-indigo-50 p-8 shadow-lg">
          <h5 className="text-2xl font-bold">Book a Funzone Session</h5>
          <p className="mt-2 text-gray-700">Choose a date, session and number of children.</p>

          <form className="mt-6 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="p-3 rounded-lg border" placeholder="Parent name" />
              <input className="p-3 rounded-lg border" placeholder="Phone or email" />
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <input type="date" className="p-3 rounded-lg border" />
              <select className="p-3 rounded-lg border">
                <option>Morning Session</option>
                <option>Afternoon Session</option>
                <option>Evening Session</option>
              </select>
              <input type="number" className="p-3 rounded-lg border" placeholder="No. of children" />
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree" className="text-sm text-gray-700">
                I agree to the Funzone Terms & Safety Guidelines
              </label>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="rounded-2xl bg-indigo-600 text-white px-5 py-3 font-medium"
              >
                Request Booking
              </button>
            </div>

            <p className="mt-3 text-sm text-gray-600">
              Prefer a group booking or birthday party?{" "}
              <a href="#contact" className="underline">
                Contact us
              </a>
              .
            </p>
          </form>
        </div>
      </motion.section>

      {/* FAQ & Contact */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 py-12"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h6 className="text-xl font-bold">Frequently Asked Questions</h6>
            <div className="mt-4 space-y-3 text-gray-700">
              <details className="p-4 border rounded-lg">
                <summary className="cursor-pointer font-medium">
                  What age groups do you accept?
                </summary>
                <p className="mt-2 text-sm">
                  We have sessions for toddlers (2–4), early childhood (5–7) and older
                  children (8–12).
                </p>
              </details>

              <details className="p-4 border rounded-lg">
                <summary className="cursor-pointer font-medium">Is the facility safe?</summary>
                <p className="mt-2 text-sm">
                  Yes — staff are trained in first aid, equipment is sanitized and we
                  maintain strict supervision ratios.
                </p>
              </details>
            </div>
          </div>

          <div>
            <h6 className="text-xl font-bold">Contact Us</h6>
            <p className="mt-2 text-gray-700">
              Have questions or want to plan a private event? Reach out and we'll get back
              within 24 hours.
            </p>

            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <div>📍 123 Fun St, Your City</div>
              <div>📞 +91 98765 43210</div>
              <div>✉️ hello@yourcompany.com</div>
            </div>
          </div>
        </div>
      </motion.section>

      <footer className="border-t py-6 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Your Company — All rights reserved
        </div>
      </footer>
    </main>
  );
};

export default page;
