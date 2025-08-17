"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, HeartPulse, Users, Music, Shield, Sparkles, Heart } from "lucide-react";
import { Button } from "../components/ui/button";

export default function AdultsPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const programs = [
    {
      title: "Zumba",
      description: "High-energy Zumba sessions to keep you fit, active, and motivated.",
      img: "/zumba.avif",
      icon: Music,
      linl: 'zumba'

    }, 
    {
      title: "Yoga & Certification",
      description: "Learn yoga techniques and earn certification from our experienced instructors.",
      img: "/yoga.avif",
      icon: Shield,
      linl: 'yoga'
    },
    {
      title: "Table Tennis",
      description: "Fun and competitive table tennis sessions for all skill levels.",
      img: "/tt.avif",
      icon: Users,
      linl: 'tt'
    },
    {
      title: "Corporate Events",
      description: "Team-building and fitness activities customized for corporate groups.",
      img: "/event.avif",
      icon: HeartPulse,
      linl: 'ce'
    },
  ];

  const features = [
    "Boost your fitness & flexibility",
    "Expert guidance from certified instructors",
    "Fun, engaging, and inclusive sessions",
    "Team-building and social interaction",
    "Certification for Yoga participants",
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
    <div className="bg-blue-50 min-h-screen px-4 py-10">

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-center max-w-4xl mx-auto mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Adult Programs at LionCubs Fitness
        </h1>
        <p className="text-blue-700 text-lg md:text-xl">
          Join our wellness programs for adults—Yoga, Zumba, Table Tennis, and Corporate Events designed to energize, motivate, and build confidence.
        </p>
      </motion.div>

      {/* Programs Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16"
      >
        {programs.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-lg shadow-md overflow-hidden w-full transition-transform"
          >
            <a href={'#' + p.linl}>
              <Image src={p.img} alt={p.title} height={150} width={300} className="object-contain h-[190px] w-full" />
              <div className="p-6 border-t ">
                <div className="flex items-center gap-3 mb-2 text-blue-600">
                  <p className="text-xl font-semibold">{p.title}</p>
                  <p className="ml-auto">
                    <p.icon className="w-6 h-6" />
                  </p>
                </div>
                <p className="text-blue-700">{p.description}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>



      {/* Why Choose Our Zumba */}
      <section id="zumba" className="py-16  w-full flex flex-col">
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






      <div id="yoga" className="w-full py-16 px-2 flex flex-col">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10"
        >
          Why Choose Our Yoga Program?
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
        >
          {[
            {
              img: "/yoga-class.avif",
              title: "All-Level Classes",
              desc: "From gentle beginner flows to advanced asanas — every session is designed to match your pace and goals.",
            },
            {
              img: "/yoga-certification.avif",
              title: "Globally Recognized Certification",
              desc: "Train with us and earn certifications that are respected worldwide for their authenticity and depth.",
            },
            {
              img: "/yoga-teachers.avif",
              title: "Experienced & Knowledgeable Teachers",
              desc: "Learn from certified instructors with years of experience, deep yoga knowledge, and genuine passion for your growth.",
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl bg-gray-100 shadow hover:shadow-lg transition w-full max-w-sm overflow-hidden h-[418px]"
            >
              <Image
                src={card.img}
                alt={card.title}
                width={400}
                height={250}
                className="object-cover w-full h-[250px]"
              />
              <div className="px-4 pb-4 pt-4">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-muted-foreground">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Safety & Approach */}
      <section className="bg-primary/5 py-14">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center"
        >
          <motion.div >
            <Image
              src="/safety-yoga.avif"
              alt="Yoga Safety"
              width={500}
              height={400}
              className="rounded-xl shadow-md object-cover"
            />
          </motion.div>
          <motion.div className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Your Safety, Our Priority
            </h2>
            <p className="text-muted-foreground">
              Every posture is taught with careful attention to alignment,
              breathing, and your body’s limits. Whether you’re new to yoga or
              an experienced practitioner, we ensure a safe and supportive
              environment.
            </p>
            <ul className="space-y-3">
              {[
                { icon: Shield, text: "Instructors trained in injury prevention" },
                { icon: Heart, text: "Gentle adjustments tailored to your comfort" },
                { icon: Sparkles, text: "Clean, calming, and well-ventilated spaces" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <Icon className="text-primary" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="bg-indigo-50 py-14 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl w-full px-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-indigo-700">
            What You’ll Gain
          </h2>
          <div className="grid gap-5">
            {[
              "Daily yoga sessions for all levels",
              "Certification upon completion",
              "Personal guidance from expert instructors",
              "Focus on health, posture, and breathing",
              "Boost in energy, flexibility & mindfulness",
            ].map((item, i) => (
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

      {/* CTA */}





      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
          Book Your Session Today
        </h2>
        <p className="text-blue-700 mb-6 max-w-xl mx-auto">
          Contact us to schedule a trial class or corporate program. Join LionCubs Fitness and start your wellness journey.
        </p>
        <a
          href="https://wa.me/919818387160?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20adult%20programs."
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition"
        >
          Contact via WhatsApp
        </a>
      </motion.section>
    </div>
  );
}
