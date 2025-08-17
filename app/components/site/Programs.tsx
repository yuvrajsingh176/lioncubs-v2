"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const programs = [
  {
    title: "Mini Cubs (2.5–4)",
    desc: "Playful movement & gross-motor development. Perfect for toddlers and preschoolers.",
    items: ["Animal walks", "Soft obstacle courses", "Freeze dance & games", "Multi-sport play"],
    image: "/minicubs.webp",
    alt: "Toddlers playing and exercising"
  },
  {
    title: "Junior Cubs (5–7)",
    desc: "Agility, coordination and team-based challenges for curious movers.",
    items: ["Recreational sports", "Multi-sport play", "Strength games", "Team challenges"],
    image: "/juniorcubs.webp",
    alt: "Children aged 5-7 doing sports activities"
  },
  {
    title: "Super Cubs (8–12)",
    desc: "Level up with stamina, speed and mental toughness — fun stays alive!",
    items: ["Cardio circuits (HIIT for kids)", "Multi-sport play", "Reaction drills", "Team missions"],
    image: "/supercubs.webp",
    alt: "Older children in sports training"
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-16 md:py-24 px-2 rounded">
      <div className="container">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">Programs</h2>
          <p className="mt-3 text-muted-foreground">
            We divide our programs by age and energy level to match every child's development stage.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programs.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden transition-all rounded-xl">
                <div className="relative h-48 w-full flex justify-center items-center bg-black overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    className="transition-transform hover:scale-105 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <CardHeader>
                  <CardTitle>{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {p.items.map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 size-2 rounded-sm bg-accent" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
