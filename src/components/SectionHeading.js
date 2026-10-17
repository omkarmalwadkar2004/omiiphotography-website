import React from "react";
import { motion } from "framer-motion";
import { revealProps } from "../transitions";

// eyebrow + title + optional intro, used at the top of each content section
const SectionHeading = ({ eyebrow, title, text, align = "center", dark = false }) => {
  const centred = align === "center";
  return (
    <motion.div
      {...revealProps}
      className={`mb-12 lg:mb-16 ${centred ? "text-center mx-auto max-w-2xl" : "text-center lg:text-left max-w-xl"}`}
    >
      {eyebrow && (
        <div
          className={`flex items-center gap-3 mb-4 text-xs font-semibold uppercase tracking-[0.3em] ${
            centred ? "justify-center" : "justify-center lg:justify-start"
          } ${dark ? "text-white/60" : "text-grey"}`}
        >
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-primary font-bold text-4xl lg:text-5xl leading-tight tracking-[-0.03em] ${
          dark ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {text && <p className={`mt-5 text-lg ${dark ? "text-white/70" : "text-grey"}`}>{text}</p>}
    </motion.div>
  );
};

export default SectionHeading;
