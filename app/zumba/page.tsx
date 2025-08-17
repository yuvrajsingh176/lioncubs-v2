"use client";
import Image from "next/image";
import { CheckCircle, HeartPulse, Music, Users } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

export default function ZumbaPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15 },
    }),
  };

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const features = [
    "High-energy dance workouts",
    "Easy-to-follow routines for all levels",
    "Music from around the world",
    "Full-body toning and cardio boost",
    "Positive, motivating environment",
  ];

  const whyChoose = [
    {
      img: "/zumba-fun.avif",
      title: "Fun & Energetic Classes",
      desc: "Every session is a party! Our instructors keep the beats pumping and the moves exciting so you never get bored.",
    },
    {
      img: "/zumba-calories.avif",
      title: "Burn Calories & Tone Up",
      desc: "Zumba can burn up to 600 calories per class while improving your strength, flexibility, and stamina.",
    },
    {
      img: "/zumba-community.avif",
      title: "A Welcoming Community",
      desc: "Dance alongside supportive classmates and make fitness friends who’ll cheer you on.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Image
            src="/zumba-hero.avif"
            alt="Zumba Class"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4"
        >
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
          >
            Zumba: Dance Your Way to Fitness
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="max-w-xl text-lg md:text-xl"
          >
            High-energy, music-filled workouts that make you forget you’re exercising.
          </motion.p>
        </motion.div>
      </section>

      {/* Why Choose Our Zumba */}
      <section className="py-16 px-4 w-full flex flex-col">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-700"
        >
          Why Choose Our Zumba?
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
        >
          {whyChoose.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              custom={i}
              className="rounded-xl bg-indigo-50 shadow hover:shadow-lg transition overflow-hidden max-w-sm"
            >
              <Image
                src={card.img}
                alt={card.title}
                width={400}
                height={250}
                className="object-cover w-full h-[250px]"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* What You’ll Get */}
      <section className="bg-indigo-50 py-14 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl w-full px-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-indigo-700">
            What You’ll Get
          </h2>
          <div className="grid gap-5">
            {features.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-white rounded-xl shadow-sm p-4"
              >
                <CheckCircle className="text-indigo-600 flex-shrink-0 w-6 h-6" />
                <span className="text-gray-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Safety & Accessibility */}
      <section className="py-16 px-4 bg-white">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-6 text-indigo-700">
            Safe, Inclusive, and Beginner-Friendly
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-gray-600 mb-8"
          >
            We make sure every participant feels comfortable, safe, and confident. Our sessions
            include warm-ups, low-impact alternatives, and pacing options so everyone can enjoy
            the workout — regardless of experience level.
          </motion.p>
          <motion.div
            variants={container}
            className="grid sm:grid-cols-3 gap-8 mt-6"
          >
            {[
              { icon: <HeartPulse className="w-8 h-8 text-red-500" />, label: "Joint-Friendly Moves" },
              { icon: <Music className="w-8 h-8 text-yellow-500" />, label: "Upbeat Global Music" },
              { icon: <Users className="w-8 h-8 text-green-500" />, label: "Supportive Instructors" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                custom={i}
                className="bg-indigo-50 rounded-xl p-6 shadow-sm"
              >
                <div className="mb-3 flex justify-center">{item.icon}</div>
                <p className="text-gray-800 font-semibold">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 text-center px-4 bg-indigo-700 text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join the Zumba Party!
        </h2>
        <p className="mb-6 max-w-lg mx-auto">
          Book your free demo class and experience the music, the movement, and the magic of Zumba.
        </p>
        <a
          href="https://wa.me/919818387498?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20a%20Zumba%20class."
          target="_blank"
          rel="noreferrer"
        >
          <Button
            size="lg"
            className="bg-white text-indigo-700 hover:bg-gray-200 rounded-2xl px-6 py-3 font-bold"
          >
            Book Free Demo
          </Button>
        </a>
      </motion.section>
    </div>
  );
}
