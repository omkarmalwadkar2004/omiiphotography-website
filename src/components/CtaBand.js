import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { revealProps } from "../transitions";

// dark booking banner shown near the bottom of the long pages
const CtaBand = ({
  title = "Let's capture your story",
  text = "Maternity, newborn, birthdays or a brand shoot — tell me what you have in mind and we'll plan it together.",
}) => {
  return (
    <section className="bg-primary text-white">
      <motion.div
        {...revealProps}
        className="container mx-auto px-6 lg:px-0 py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left"
      >
        <div className="max-w-2xl">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            <span className="h-px w-8 bg-gold" />
            Now booking
          </div>
          <h2 className="font-primary font-bold text-4xl lg:text-6xl leading-tight tracking-[-0.03em]">
            {title}
          </h2>
          <p className="mt-5 text-lg text-white/70">{text}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link to="/contact" className="btn btn-light">
            Book a session
          </Link>
          <Link to="/portfolio" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
            See my work
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaBand;
