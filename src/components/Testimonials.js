import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { revealProps } from "../transitions";
import { testimonials } from "../data/content";

const Testimonials = () => (
  <div className="grid md:grid-cols-3 gap-6">
    {testimonials.map((t, i) => (
      <motion.figure
        key={t.author}
        {...revealProps}
        custom={i}
        className="rounded-2xl bg-cream p-8 lg:p-10 flex flex-col"
      >
        <FaQuoteLeft className="text-3xl text-gold mb-6" />
        <blockquote className="font-primary text-xl leading-relaxed flex-1">{t.quote}</blockquote>
        <figcaption className="mt-8 pt-6 border-t border-black/10">
          <div className="font-semibold">{t.author}</div>
          <div className="text-sm text-grey">{t.place}</div>
        </figcaption>
      </motion.figure>
    ))}
  </div>
);

export default Testimonials;
