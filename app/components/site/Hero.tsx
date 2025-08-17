'use client';

import Image from "next/image";
import { Button } from "../../components/ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const whatsappUrl = `https://wa.me/919818387498?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20a%20free%20demo%20class.`;

const programs = [
  { name: "Yoga", image: "/yoga.avif", link: "yoga" },
  { name: "Zumba", image: "/zumba.avif", link: "zumba" },
  { name: "Table Tennis", image: "/tt.avif", link: "table-tennis" },
  { name: "Children Indoor Games", image: "/children.avif", link: "funzone" },
];

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-accent py-10 md:py-28 flex justify-center items-center"
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_60%)]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="container relative z-10 flex flex-col items-center justify-center text-primary-foreground">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold tracking-tight text-center sm:text-5xl md:text-6xl drop-shadow-lg"
        >
          <motion.span
            animate={{ textShadow: ["0 0 10px #fff", "0 0 20px #ffbf00", "0 0 10px #fff"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            LionCubs Fitness
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl text-center md:text-2xl opacity-90 max-w-3xl"
        >
          From calming Yoga and energetic Zumba, to competitive Table Tennis and exciting indoor games for kids — LionCubs Fitness is your all-in-one hub for fun, fitness, and learning for ages 2.5–12.
        </motion.p>


        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="mt-8 flex flex-wrap items-center w-full justify-center gap-4"
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <Button variant="hero" size="lg" className="font-semibold animate-pulse">
                Book Free Demo
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="tel:+919818387498">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                <PhoneCall className="mr-2" /> Call Now
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Program Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } },
          }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 items-center justify-items-center gap-4 mx-2"
        >
          {programs.map((program) => (
            <motion.div
              key={program.name}
              variants={fadeUp}
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="group relative cursor-pointer hover:shadow-2xl hover:shadow-accent/30 rounded-xl overflow-hidden"
            >
              <Link href={program.link}>
                <Image
                  src={program.image}
                  alt={program.name}
                  width={200}
                  height={200}
                  className="rounded-xl object-cover w-[150px] h-[150px] shadow-lg transition-transform duration-300 group-hover:brightness-110"
                />

                {/* Overlay Label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white py-2 text-center text-sm sm:text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {program.name}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
          
      </div>
    </section>
  );
}
