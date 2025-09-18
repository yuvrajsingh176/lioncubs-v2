// File: app/(components)/Contact.tsx
"use client";

import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Mail, MapPin, PhoneCall, Instagram, Globe } from "lucide-react";
import { motion } from "framer-motion";

const whatsappUrl = `https://wa.me/919818387160?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20a%20free%20demo%20class.`;
const emailUrl = `mailto:lioncubsfitness@gmail.com`;
const phoneUrl = `tel:+919818387160`;
const websiteUrl = `https://www.lioncubsfitness.in/`;

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section id="contactt" className="py-10 md:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-1 shadow-lg">
          <Card className="overflow-hidden rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">

              {/* Left - content */}
              <motion.div whileHover={{ scale: 1.01 }} className="p-5 md:p-8 flex flex-col justify-between">
                <CardHeader className="p-0 mb-3">
                  <CardTitle className="text-xl md:text-2xl text-center md:text-left">Contact Us</CardTitle>
                </CardHeader>

                <CardContent className="p-0 space-y-3 text-gray-700">
                  <p className="text-sm md:text-base text-center md:text-left">
                    Join the pride today — fun, fitness and confidence for little cubs. Book a free demo, ask a
                    question or just say hello.
                  </p>

                  <div className="space-y-3 mt-2">
                    <ContactRow icon={<PhoneCall className="w-4 h-4 text-blue-600" />} label="Call / WhatsApp" value={
                      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="font-medium hover:underline">
                        +91 98183 87160
                      </a>
                    } />

                    <ContactRow icon={<Mail className="w-4 h-4 text-blue-600" />} label="Email" value={
                      <a href={emailUrl} className="font-medium hover:underline">
                        lioncubsfitness@gmail.com
                      </a>
                    } />

                    <ContactRow icon={<MapPin className="w-4 h-4 text-blue-600" />} label="Locations" value={
                      <div className="font-medium">Jagriti Enclave (Delhi) • Palam Vihar (Gurugram)</div>
                    } />

                    <ContactRow icon={<Instagram className="w-4 h-4 text-blue-600" />} label="Instagram" value={
                      <a href="https://instagram.com/lioncubsfitness" target="_blank" rel="noreferrer" className="font-medium hover:underline">
                        @lioncubsfitness
                      </a>
                    } />

                    <ContactRow icon={<Globe className="w-4 h-4 text-blue-600" />} label="Website" value={
                      <a href={websiteUrl} target="_blank" rel="noreferrer" className="font-medium hover:underline">
                        www.lioncubsfitness.in
                      </a>
                    } />
                  </div>

                  {/* Buttons */}
                  <div className="pt-3 flex flex-col  gap-3">
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="col-span-1 sm:col-span-3 md:col-span-1 w-full">
                      <Button className=" px-4 py-3 flex items-center justify-center gap-2 w-full" variant="default">
                        <PhoneCall className="w-4 h-4" />
                        Message on WhatsApp
                      </Button>
                    </a>

                    <a href={phoneUrl} className="col-span-1 sm:col-span-3 md:col-span-1 w-full">
                      <Button className="w-full px-4 py-3 flex items-center justify-center gap-2" variant="outline">
                        <PhoneCall className="w-4 h-4" />
                        Call Now
                      </Button>
                    </a>

                    <a href={emailUrl} className="col-span-1 sm:col-span-3 md:col-span-1 w-full">
                      <Button className="w-full px-4 py-3 flex items-center justify-center gap-2" variant="outline">
                        <Mail className="w-4 h-4" />
                        Email Us
                      </Button>
                    </a>
                  </div>
                </CardContent>

                <div className="mt-4 text-center md:text-left text-xs text-slate-400">Open weekdays: 7:00 AM — 7:00 PM</div>
              </motion.div>

              {/* Right - Google Map iframe. On mobile it appears below because of grid order. */}
              <div className="order-last md:order-none">
                <div className="w-full h-56 md:h-full md:min-h-[260px] rounded-b-2xl md:rounded-r-2xl overflow-hidden shadow-inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3501.2532834327194!2d77.30422587550153!3d28.652133875653966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM5JzA3LjciTiA3N8KwMTgnMjQuNSJF!5e0!3m2!1sen!2sin!4v1758211276067!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="LionCubs Fitness location"
                  ></iframe>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}

// Small helper for contact rows
function ContactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-9 h-9 rounded-full bg-blue-100 grid place-items-center mt-1">{icon}</span>
      <div className="flex-1">
        <div className="text-xs text-slate-500">{label}</div>
        <div className="text-sm">{value}</div>
      </div>
    </div>
  );
}
