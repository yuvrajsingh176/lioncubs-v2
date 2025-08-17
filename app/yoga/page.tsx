"use client";
import Image from "next/image";
import { CheckCircle, Heart, Shield, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

export default function YogaPage() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const staggerContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src="/yoga-hero.avif"
                        alt="Yoga Class"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4"
                >
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold mb-3"
                    >
                        Yoga for Mind, Body & Soul
                    </motion.h1>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="max-w-2xl text-lg md:text-xl"
                    >
                        Guided by certified instructors, blending ancient wisdom with modern
                        practices to help you achieve balance, flexibility, and inner peace.
                    </motion.p>
                </motion.div>
            </section>

            {/* Why Choose Us */}
            <div className="w-full py-16 px-2 flex flex-col">
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
            <motion.section
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="py-16 text-center"
            >
                <h2 className="text-3xl font-bold mb-4">Start Your Yoga Journey Today</h2>
                <p className="mb-6 text-muted-foreground">
                    Book your free demo class and feel the transformation.
                </p>
                <a
                    href="https://wa.me/919818387498?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20a%20Yoga%20class."
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                        Book Free Demo
                    </Button>
                </a>
            </motion.section>
        </div>
    );
}
