import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
//import Link
import { Link } from "react-router-dom";
//import motion
import { motion, AnimatePresence } from "framer-motion";
//import transition
import { transition1, revealProps } from "../transitions";
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from "react-icons/fi";
import CtaBand from "../components/CtaBand";
import Footer from "../components/Footer";
import { categories, gallery } from "../data/content";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(null); // index into `shown`, or null

  const shown = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

  // keyboard controls + scroll lock while the lightbox is open
  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i + 1) % shown.length);
      if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + shown.length) % shown.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, shown.length]);

  const step = (d) => setOpen((i) => (i + d + shown.length) % shown.length);

  return (
    <motion.section
      initial={{ opacity: 0, y: "100vh" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100vh" }}
      transition={transition1}
      className="section bg-pink-200"
    >
      {/*intro*/}
      <div className="container mx-auto px-6 lg:px-0 pt-36 lg:pt-[160px] pb-14 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: "-80%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-80%" }}
          transition={transition1}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 text-center lg:text-left"
        >
          <div className="max-w-2xl mx-auto lg:mx-0">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-grey">
              <span className="h-px w-8 bg-gold" />
              Selected work
            </div>
            <h1 className="h1 mb-6">Portfolio</h1>
            <p className="text-lg">
              Specializing in capturing life's most precious moments — maternity,
              newborn, cake smash, theme-based, fitness and fashion photography.
              Each photograph is a testament to my commitment to quality and
              creativity: images that are not only beautiful but meaningful,
              made to be cherished for a lifetime.
            </p>
          </div>
          <Link to={"/contact"} className="btn mx-auto lg:mx-0 shrink-0">
            Hire Me
          </Link>
        </motion.div>
      </div>

      {/*gallery*/}
      <div className="bg-white rounded-t-[32px] lg:rounded-t-[48px] section-pad">
        <div className="container mx-auto px-6 lg:px-0">
          {/*filters*/}
          <div className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-10 lg:mb-14">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition ${
                  filter === c
                    ? "bg-primary text-white border-primary"
                    : "border-black/15 text-grey hover:border-primary hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/*masonry grid*/}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6">
            <AnimatePresence initial={false}>
              {shown.map((item, i) => (
                <motion.button
                  key={item.title}
                  type="button"
                  onClick={() => setOpen(i)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative block w-full mb-4 lg:mb-6 break-inside-avoid rounded-2xl overflow-hidden text-left"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    width={item.w}
                    height={item.h}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto bg-cream transition duration-700 group-hover:scale-105"
                  />
                  {item.sample && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-primary text-[10px] font-semibold uppercase tracking-[0.15em]">
                      Sample
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex items-end justify-between lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition duration-500">
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-white/70">{item.category}</div>
                      <div className="font-primary text-xl font-bold">{item.title}</div>
                    </div>
                    <FiMaximize2 className="text-lg" />
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          {shown.length === 0 && (
            <div className="text-center py-16 rounded-2xl bg-cream">
              <p className="font-primary text-2xl font-bold">No {filter} photos yet</p>
              <p className="text-grey mt-2">New work is on its way — check back soon.</p>
            </div>
          )}

          <motion.p {...revealProps} className="text-center text-grey mt-10">
            Follow along on Instagram for the latest sessions.
          </motion.p>
        </div>
      </div>

      <CtaBand title="Like what you see?" />
      <Footer />

      {/*lightbox — portalled to <body> so the page's transforms can't trap it under the header*/}
      {createPortal(
      <AnimatePresence>
        {open !== null && shown[open] && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.figure
              key={shown[open].title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={shown[open].full || shown[open].src}
                alt={shown[open].title}
                className="max-h-[80vh] max-w-[92vw] w-auto rounded-xl object-contain"
              />
              <figcaption className="mt-4 text-white text-center">
                <span className="font-primary text-xl font-bold">{shown[open].title}</span>
                <span className="text-white/60"> · {shown[open].category} · {open + 1}/{shown.length}</span>
                {shown[open].sample && (
                  <span className="block mt-1 text-sm text-white/60">
                    Sample photo by{" "}
                    <a href={shown[open].creditUrl} target="_blank" rel="noreferrer" className="underline hover:text-white">
                      {shown[open].credit}
                    </a>{" "}
                    on StockSnap (CC0)
                  </span>
                )}
              </figcaption>
            </motion.figure>

            <button
              aria-label="Close"
              onClick={() => setOpen(null)}
              className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center"
            >
              <FiX />
            </button>
            {shown.length > 1 && (
              <>
                <button
                  aria-label="Previous photo"
                  onClick={(e) => { e.stopPropagation(); step(-1); }}
                  className="absolute left-3 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center"
                >
                  <FiChevronLeft />
                </button>
                <button
                  aria-label="Next photo"
                  onClick={(e) => { e.stopPropagation(); step(1); }}
                  className="absolute right-3 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center"
                >
                  <FiChevronRight />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}
    </motion.section>
  );
};

export default Portfolio;
