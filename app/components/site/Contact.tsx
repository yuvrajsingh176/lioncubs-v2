"use client";

import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Mail, MapPin, PhoneCall, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const whatsappUrl = `https://wa.me/919818387160?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20a%20free%20demo%20class.`;
const emailUrl = `mailto:lioncubsfitness@gmail.com`;
const phoneUrl = `https://wa.me/919818387160`;

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="contactt" className="py-16 md:py-24 px-4 mx-1 ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-6xl mx-auto "
      >
        {/* Contact Details Card */}
        <motion.div whileHover={{ scale: 1.03 }} className="transition-transform flex flex-col justify-center items-center">
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-blue-900">
              <p>
                Join the pride today! Build a future full of movement, smiles, and strength — one cub at a time.
              </p>

              {/* Phone / WhatsApp */}
              <div className="flex items-center gap-3">
                <PhoneCall className="text-blue-600" />
                <span className="font-semibold">Call / WhatsApp:</span>
                <a href={phoneUrl} target="_blank" rel="noreferrer" className="underline ml-1">
                  +91 98183 87160
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <span className="font-semibold">Email:</span>
                <a href={emailUrl} className="underline ml-1">
                  lioncubsfitness@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-blue-600" />
                <span>
                  <span className="font-semibold">Locations:</span> Jagriti Enclave (Delhi) • Palam Vihar (Gurugram)
                </span>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-3">
                <Instagram className="text-blue-600" />
                <span className="font-semibold">Instagram:</span>
                <a className="underline ml-1" href="https://instagram.com/lioncubsfitness" target="_blank" rel="noreferrer">
                  @lioncubsfitness
                </a>
              </div>

              {/* WhatsApp Button */}
              <div className="pt-4 flex justify-center gap-4">
                {/* WhatsApp Button */}
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <Button
                    variant="hero"
                    className="hover:scale-105 transition-transform bg-blue-500 hover:bg-blue-600"
                  >
                    Message on WhatsApp
                  </Button>
                </a>

                {/* Google Form Button */}
                <a
                  href="https://forms.gle/your-google-form-id"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="hero"
                    className="hover:scale-105 transition-transform bg-blue-500 hover:bg-blue-600"
                  >
                    Fill Google Form
                  </Button>
                </a>
              </div>

            </CardContent>
          </Card>
        </motion.div>

        {/* Taglines / Promotions Card */}
        {/* <motion.div whileHover={{ scale: 1.03 }} className="transition-transform">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
            <CardHeader>
              <CardTitle>Taglines & Promotions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-blue-900">
              {[
                "Get Your Cub Moving! Book a Free Trial",
                "Start Roaring with Confidence – Join LionCubs Today!",
                "New Camp Alert: Limited Spots — Enroll Now!",
                "Small Steps, Big Roars — Join Our Fitness Family!",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-blue-600" />
                  <p className="font-medium">{t}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div> */}
      </motion.div>
    </section>
  );
}
