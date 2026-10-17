import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { gallery } from "../data/content";

const bg = gallery.find((g) => g.title === "Night walk");

const NotFound = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section relative flex items-center justify-center text-center text-white overflow-hidden bg-primary"
    >
      {bg && <img src={bg.full} alt="" className="absolute inset-0 w-full h-full object-cover" />}
      <div className="absolute inset-0 bg-black/75" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition1, delay: 0.2 }}
        className="relative z-10 px-6 pt-[100px] max-w-2xl"
      >
        <div className="flex items-center justify-center gap-3 mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
          <span className="h-px w-8 bg-gold" />
          Error 404
          <span className="h-px w-8 bg-gold" />
        </div>
        <h1 className="h1 text-white">Lost in the frame</h1>
        <p className="text-lg text-white/80 mt-4 mb-10">
          The page you're looking for doesn't exist or may have moved.
          Let's get you back to the good shots.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-light">
            Back to home
          </Link>
          <Link to="/portfolio" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
            View portfolio
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default NotFound;
