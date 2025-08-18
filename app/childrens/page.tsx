"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Cake, Activity, Circle, Shield, Clock, Users } from "lucide-react";
import Image from "next/image";

const ChildrenPage = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const ageGroups = [
        { age: "2.5–4 years", desc: "Fun movement games, basic gymnastics, mini sports drills", color: "from-blue-100 to-blue-200" },
        { age: "5–8 years", desc: "Multi-sport introduction with skill-based progressions", color: "from-blue-200 to-blue-300" },
        { age: "9–10 years", desc: "Advanced skill development, teamwork, and competitive play", color: "from-blue-300 to-blue-400" },
    ];

    const sports = [
        { name: "Football", icon: 'football' },
        { name: "Basketball", icon: 'basketball' },
        { name: "Cricket", icon: 'cricket' },
        { name: "Tennis", icon: 'tennis' },
        { name: "Rugby", icon: 'rugby' },
        { name: "Self-Defence", icon: 'selfdefence' },
        { name: "Volleyball", icon: 'volleyball' },
        { name: "Gymnastics", icon: 'gym' },
    ];

    const benefits = [
        "Multi-sport exposure to develop all-round athletic skills",
        "Expert coaches trained in child fitness and sports education",
        "Fun-first approach to keep kids engaged and motivated",
        "Safe, age-appropriate equipment and training drills",
        "Monthly friendly matches to boost confidence",
        "Quarterly skill assessments to track progress",
    ];

    const schedule = [
        "Day 1: Football + Basic Gymnastics",
        "Day 2: Basketball + Self-Defence",
        "Day 3: Cricket + Tennis",
        "Special Weekends: Rugby + Volleyball + Fun Challenges",
    ];

    const safety = [
        "All sessions conducted on safe, child-friendly surfaces",
        "Coaches trained in CPR and basic first aid",
        "Mandatory warm-up and cool-down in every session",
        "Regular sanitization of sports equipment",
        "Parents can observe sessions from designated viewing areas",
    ];

    return (
        <div className="min-h-screen bg-blue-50 px-4 py-10">
            {/* Page Title */}
            <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-3xl md:text-5xl font-bold text-blue-900 text-center mb-8"
            >
                Kids Programs
            </motion.h1>

            {/* Description */}
            <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-blue-700 text-center max-w-3xl mx-auto mb-12 text-lg md:text-xl"
            >
                LionCubs Fitness offers fun, structured multi-sports programs for children aged 2.5–12 years to build strength, confidence, teamwork, and motor skills.
            </motion.p>

            {/* Business Hours */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="max-w-4xl mx-auto mb-12"
            >
                <motion.h2
                    className="text-2xl font-bold text-blue-900 mb-6 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Business Hours
                </motion.h2>

                <motion.div
                    className="flex flex-col justify-center items-center w-full"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.3 },
                        },
                    }}
                >
                    <div className="space-y-4 text-center">
                        {[
                            "Regular Academy Sessions: Mon–Fri (4:00 PM – 7:00 PM)",
                            "Weekend Sports Clinics: Saturday (9:00 AM – 11:00 AM)",
                            "Holiday/Summer Camps: Special schedules announced in advance",
                        ].map((text, idx) => (
                            <motion.p
                                key={idx}
                                className="flex items-center justify-center gap-3 text-blue-700 text-lg font-medium"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <motion.span
                                    whileHover={{ rotate: 20, scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Clock className="text-blue-600 w-6 h-6" />
                                </motion.span>
                                {text}
                            </motion.p>
                        ))}
                    </div>
                </motion.div>
            </motion.div>



            {/* Age Groups */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
            >
                {ageGroups.map((group) => (
                    <motion.div
                        key={group.age}
                        whileHover={{ scale: 1.05 }}
                        className={`bg-gradient-to-br ${group.color} p-6 rounded-lg shadow-lg text-center transition-transform`}
                    >
                        <h3 className="text-blue-900 font-bold text-xl mb-2">{group.age}</h3>
                        <p className="text-blue-700">{group.desc}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Sports Offered */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 text-center">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Sports Offered</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {sports.map((s) => (
                        <motion.div
                            key={s.name}
                            whileHover={{ scale: 1.1 }}
                            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-24 transition-transform"
                        >
                            <div className="mb-2 w-12 h-12 relative">
                                <Image
                                    src={'/' + s.icon + '.svg'}
                                    alt={s.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-blue-900 font-medium text-sm text-center">{s.name}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>


            {/* Birthday Bash & Success Story */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-5xl mx-auto mb-12 text-blue-700">
                <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Special Programs & Success</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-lg shadow-md text-center">
                        <Cake className="text-blue-600 text-4xl mb-4 mx-auto" />
                        <p>We organize birthday celebrations at our center for 1–2 hours with thematic activities. Complimentary cake included!</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-lg shadow-md text-center">
                        <Trophy className="text-blue-600 text-4xl mb-4 mx-auto" />
                        <p>During our Summer Sports Camp 2025, over 120 children participated in multi-sport challenges with 95% parent satisfaction. Many went on to join school teams and represent their age group in inter-school competitions — showcasing confidence, skills, and sportsmanship.</p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Key Benefits */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Key Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {benefits.map((b, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white p-4 rounded-lg shadow-md text-blue-700 flex items-start gap-2"
                        >
                            <Trophy className="text-blue-600 mt-1" />
                            <p>{b}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Schedule / Timings */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Schedule</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {schedule.map((s, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.03 }}
                            className="flex items-center gap-3 bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg shadow-md transition-transform"
                        >
                            <div className="bg-blue-600 text-white p-2 rounded-full">
                                <Clock size={18} />
                            </div>
                            <p className="text-blue-900 font-medium">{s}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Pricing & Coaches */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-5xl mx-auto mb-12 gap-6">
                {/* <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-blue-900 mb-3">Pricing</h2>
                    <p className="text-blue-700 mb-2">Customized plans available (You already know).</p>
                    <p className="text-blue-700">Trial class available on request.</p>
                </motion.div> */}
                <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-blue-900 mb-3 text-center">Coaching Team</h2>
                    <p className="text-blue-700">
                        Certified sports instructors with expertise in child fitness, sports pedagogy & first aid. Each coach maintains a max 1:10 coach-to-student ratio to ensure personalized attention.
                    </p>
                </motion.div>
            </motion.div>

            {/* Safety Measures */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-5xl mx-auto mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Safety Measures</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {safety.map((note, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white p-4 rounded-lg shadow-md flex items-start gap-2 text-blue-700"
                        >
                            <Shield className="text-blue-600 mt-1" />
                            <p>{note}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Safety & Experience */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto  py-12"
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



            {/* Call to Action */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-12">
                <a
                    href="https://wa.me/919818387160?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20kids%20programs."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-transform hover:scale-105"
                >
                    Book Free Trial Class
                </a>
            </motion.div>
        </div>
    );
};

export default ChildrenPage;
