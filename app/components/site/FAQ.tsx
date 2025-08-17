"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const faqs = [
  {
    q: "Are the sessions safe for young children?",
    a: "Absolutely! All workouts are age-appropriate, low-impact, and designed with safety first. Our trainers are certified in child fitness.",
  },
  {
    q: "What should my child wear?",
    a: "Comfortable sportswear and shoes. We recommend carrying a water bottle and a small towel.",
  },
  {
    q: "Do you offer trial sessions?",
    a: "Yes! Your first session is on us. Let your child experience the fun before you commit.",
  },
  {
    q: "Is it suitable for shy or less active kids?",
    a: "Yes. We create a warm, welcoming environment where every child — no matter their energy level — feels seen and celebrated.",
  },
  {
    q: "Where are sessions held?",
    a: "We conduct sessions at schools, parks, and indoor community centers across Delhi NCR. Private group sessions or birthday events are also available.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-primary/5 p-2">
      <div className="container">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">FAQs</h2>
        </motion.div>

        <motion.div
          className="mx-auto mt-8 max-w-3xl"
          initial="hidden"
          animate="visible"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <motion.div key={i} custom={i} variants={fadeUp}>
                <AccordionItem value={`item-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
