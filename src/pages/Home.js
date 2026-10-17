import React from "react";
//import images
import WomanImg from "../img/home/canon.jpg";
//import link
import { Link } from "react-router-dom";
//imoprt motion
import { motion } from "framer-motion";
//import transition
import { transition1, revealProps } from "../transitions";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import Testimonials from "../components/Testimonials";
import CtaBand from "../components/CtaBand";
import Footer from "../components/Footer";
import { stats, services, gallery } from "../data/content";

// portrait-shaped shots read best in the 3:4 featured tiles
const featured = ["Curious eyes", "Olive jacket", "Reach high", "Weekend walk"].map((t) =>
  gallery.find((g) => g.title === t)
);

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section bg-gray-200"
    >
      {/*hero — clipped so the oversized photo can't spill into the next section*/}
      <div className="relative overflow-hidden">
        <div className="container mx-auto h-full relative">
          {/*text & img wrapper*/}
          <div className="flex flex-col justify-center lg:justify-start lg:h-screen">
            {/*text*/}
            <motion.div
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-50%" }}
              transition={transition1}
              className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute lg:top-[100px] lg:bottom-0 flex flex-col justify-center items-center lg:items-start"
            >
              <div className="flex items-center gap-3 mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-grey">
                <span className="h-px w-8 bg-gold" />
                Omii's Photography
              </div>
              <h1 className="h1">
                photographer <br /> & film maker
              </h1>
              <p className="text-[26px] lg:text-[30px] font-primary mb-6 lg:mb-12">
                Pune, Maharashtra, India
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-[30px] lg:mb-0">
                <Link to={"/contact"} className="btn">
                  hire me
                </Link>
                <Link to={"/portfolio"} className="btn btn-outline">
                  view work
                </Link>
              </div>
            </motion.div>
            {/*image*/}
            <div className="flex justify-end max-h-96 lg:max-h-max">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={transition1}
                className="relative lg:-right-36 overflow-hidden"
              >
                <motion.img whileHover={{ scale: 1.1 }} transition={{ transition1 }} src={WomanImg} alt="" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/*stats*/}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-0 py-14 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 text-center">
          {stats.map((s, i) => (
            <motion.div key={s.label} {...revealProps} custom={i}>
              <div className="font-primary font-bold text-5xl lg:text-6xl">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/*services*/}
      <div className="bg-white section-pad">
        <div className="container mx-auto px-6 lg:px-0">
          <SectionHeading
            eyebrow="What I do"
            title="Photography for every milestone"
            text="From the first bump to the first birthday and beyond — thoughtfully styled sessions in studio or on location."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                {...revealProps}
                custom={i % 3}
                className="group rounded-2xl bg-cream p-8 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:bg-white border border-transparent hover:border-black/5"
              >
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-2xl mb-6 transition group-hover:bg-gold">
                  <Icon />
                </div>
                <h3 className="font-primary font-bold text-2xl mb-3">{title}</h3>
                <p className="text-grey">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/*featured work*/}
      <div className="bg-cream section-pad">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between lg:gap-8">
            <SectionHeading
              align="left"
              eyebrow="Featured work"
              title="A few favourite frames"
              text="A small selection from recent sessions. The full gallery has many more."
            />
            <Link
              to="/portfolio"
              className="group mx-auto lg:mx-0 mb-12 lg:mb-16 inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-sm border-b border-primary pb-1"
            >
              View full portfolio
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {featured.map((item, i) => (
              <motion.div key={item.title} {...revealProps} custom={i}>
                <Link
                  to="/portfolio"
                  className={`group relative block aspect-[3/4] rounded-2xl overflow-hidden ${
                    i % 2 ? "lg:mt-12" : ""
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                  {item.sample && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-primary text-[10px] font-semibold uppercase tracking-[0.15em]">
                      Sample
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5 text-white flex items-end justify-between gap-2">
                    <div>
                      <div className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-white/70">
                        {item.category}
                      </div>
                      <div className="font-primary text-lg lg:text-xl font-bold leading-tight">{item.title}</div>
                    </div>
                    <FiArrowUpRight className="shrink-0 text-xl transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/*testimonials*/}
      <div className="bg-white section-pad">
        <div className="container mx-auto px-6 lg:px-0">
          <SectionHeading eyebrow="Kind words" title="What clients say" />
          <Testimonials />
        </div>
      </div>

      <CtaBand />
      <Footer />
    </motion.section>
  );
};

export default Home;
