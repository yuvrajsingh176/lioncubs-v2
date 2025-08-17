"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  Activity,
  Brain,
  HeartHandshake,
  Music,
  ShieldCheck,
  Target,
  Trophy,
  Users,
} from "lucide-react";

const whatsappUrl = `https://wa.me/919818387498?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20a%20free%20demo%20class.`;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

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

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 overflow-hidden"
    >
      <div className="container">
        {/* Heading */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold md:text-4xl">About Us</h2>
          <p className="mt-4 text-lg text-muted-foreground p-2">
            At Lion Cubs Fitness, a strong body builds a strong mind. We bring kids back to the
            basics — movement, imagination, and joy. Our sessions focus on collaboration over
            competition, so children cheer for themselves and for each other.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2 p-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {[ 
            { title: "Our Mission", text: "To build a generation of healthy, happy and active kids who grow up strong  inside and out." },
            { title: "Our Vision", text: "A world where every child develops fitness habits early — with love, laughter and pride in their own strength." }
          ].map((card) => (
            <motion.div key={card.title} variants={fadeUp}>
              <Card className="transition-all hover:-translate-y-0.5 hover:shadow-lg h-40">
                <CardHeader>
                  <CardTitle className="text-center">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{card.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons */}
        <div className="mt-12  gap-8 lg:grid-cols-2 p-2 w-full  flex justify-around items-center">
          {[{ title: "Why Choose Us?", items: leftReasons }, { title: "What You Get", items: rightReasons }].map(
            (block) => (
              <motion.div
                key={block.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
              >
                <h3 className="text-2xl font-semibold">{block.title}</h3>
                <ul className="mt-6 space-y-4">
                  {block.items.map(({ icon: Icon, text }) => (
                    <motion.li
                      key={text}
                      variants={listItem}
                      className="flex items-start gap-3 animate-fade-in text-start group"
                    >
                      <Icon className="mt-0.5 size-5 text-accent group-hover:scale-110 transition-transform" />
                      <span>{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <Button variant="hero" size="lg" className="transition-transform hover:scale-105">
              Book Free Demo
            </Button>
          </a>
          <a href="tel:+919818387498">
            <Button variant="soft" size="lg" className="transition-transform hover:scale-105">
              Call Now
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
