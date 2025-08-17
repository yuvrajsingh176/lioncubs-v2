"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import About from "./components/site/About";
import FAQ from "./components/site/FAQ";
import Contact from "./components/site/Contact";

const LandingPage = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const reviews = [
    { name: "Rohit Sharma", comment: "My son loves the multi-sport sessions. Coaches are amazing!" },
    { name: "Neha Verma", comment: "Great environment for kids to learn and build confidence." },
    { name: "Amit Singh", comment: "Friendly staff and safe equipment. Highly recommend LionCubs Fitness!" },
  ];

  const faqs = [
    { question: "What age groups do you cater to?", answer: "We offer programs for children aged 2.5–12 years and adults." },
    { question: "Can I book a trial class?", answer: "Yes! Trial classes are available on request for both kids and adults." },
    { question: "Are the coaches certified?", answer: "All our coaches are certified in sports, fitness, and first-aid training." },
  ];

  return (
    <div className="bg-blue-50 text-blue-900">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        id="programs"
        className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Where Little Champions Grow Big in Strength & Confidence
        </h1>
        <p className="text-blue-700 text-lg md:text-xl mb-8 max-w-2xl">
          LionCubs Fitness is a dedicated sports and fitness academy for children aged 2.5 to 10 years, powered by <Link href={'https://fitflickssports.in/'} className="font-bold underline">FitFlicks Sports</Link>. We specialize in introducing young learners to multi-sports training including Football, Basketball, Cricket, Tennis, Rugby, Self-Defence, Volleyball, and basic Gymnastics through fun, structured sessions. Our mission is to build physical strength, motor skills, teamwork, and self-confidence from an early age.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/childrens" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
            Kids Programs
          </Link>
          <Link href="/adults" className="bg-blue-100 hover:bg-blue-200 text-blue-900 px-6 py-3 rounded-lg font-medium transition">
            Adult Programs
          </Link>
        </div>
      </motion.div>

      {/* About Us Section */}
      <div className="flex justify-center items-center">
        <About />

      </div>
      {/* Parents Reviews Section */}

      {/* FAQs Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-20 px-4 max-w-4xl mx-auto"
      >
        <FAQ />
      </motion.section>

      {/* Contact Us Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-20 px-4 bg-blue-200"
      >
        <Contact />
      </motion.section>
    </div>
  );
};

export default LandingPage;
