"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";
import { Music, Music2, Table2, Baby } from "lucide-react"; // You can replace with better icons
import { Sparkles, Trophy, ShieldCheck, HeartPulse } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const activityItems = [
  {
    icon: <Music className="w-6 h-6" />,
    text: "Zumba – Energetic dance workouts for all skill levels",
    image: "/zumba.jpg",
    alt: "Zumba dance session",
  },
  {
    icon: <Music2 className="w-6 h-6" />,
    text: "Dance Classes – From freestyle to structured choreography",
    image: "/dance.jpg",
    alt: "Dance class performance",
  },
  {
    icon: <Table2 className="w-6 h-6" />,
    text: "Table Tennis – Fun skill-building for kids & beginners",
    image: "/table-tennis.jpg",
    alt: "Table tennis training",
  },
  {
    icon: <Baby className="w-6 h-6" />,
    text: "Children’s Indoor Sports Center – Safe & playful activities",
    image: "/indoor-sports.jpg",
    alt: "Indoor kids sports",
  },
];

const highlights = [
  {
    icon: <Trophy className="w-6 h-6" />,
    text: "Monthly Dance & Sports Showcases",
    alt: "Kids performing on stage",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    text: "Safe, Supervised, and Fun Environment",
    alt: "Safety equipment and staff",
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    text: "Fitness & Stamina Tracking for Every Child",
    alt: "Fitness report",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    text: "Creative Theme Days & Fun Challenges",
    alt: "Kids enjoying theme day",
  },
];

export default function Highlights() {
  return (
    <section
      id="activities"
      className="py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-background"
    >
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Activities & Highlights
          </h2>
          <p className="mt-3 text-muted-foreground">
            From Zumba to table tennis, our programs spark joy, fitness, and creativity in every child.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 p-2">
          {/* Activities */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <h3 className="text-2xl font-semibold mb-6">Activities Offered</h3>
            <div className="space-y-4">
              {activityItems.map((a) => (
                <motion.div
                  key={a.text}
                  variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                  className="group overflow-hidden rounded-xl border border-border hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="flex">
                    <CardContent className="flex-1 p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-accent mt-1">{a.icon}</div>
                        <p className="font-medium">{a.text}</p>
                      </div>
                    </CardContent>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <h3 className="text-2xl font-semibold mb-6">Special Highlights</h3>
            <div className="space-y-4">
              {highlights.map((h) => (
                <motion.div
                  key={h.text}
                  variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                  className="group overflow-hidden rounded-xl border border-border hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="flex">

                    <CardContent className="flex-1 p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-accent mt-1">{h.icon}</div>
                        <p className="font-medium">{h.text}</p>
                      </div>
                    </CardContent>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
