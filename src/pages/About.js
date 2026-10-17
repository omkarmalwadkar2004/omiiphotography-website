import React from "react";
//import images
import WomanImg from "../img/about/Image 2025-09-30 at 09.29.36_50967a5c.jpg";
//import link
import { Link } from "react-router-dom";
//import motion
import { motion } from "framer-motion";
//import transition
import { transition1, revealProps } from "../transitions";
import SectionHeading from "../components/SectionHeading";
import CtaBand from "../components/CtaBand";
import Footer from "../components/Footer";
import { highlights, process, owner } from "../data/content";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100vh" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100vh" }}
      transition={transition1}
      className="section bg-amber-200"
    >
      <div className="container mx-auto h-full relative">
        {/*text & img wrapper*/}
        <div className=" flex flex-col lg:flex-row lg:min-h-screen items-center justify-center gap-x-24 text-center lg:text-left lg:pt-[100px] lg:pb-6">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden lg:rounded-2xl lg:shadow-2xl">
            <img src={WomanImg} alt="" />
          </div>
          {/*text*/}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-12 px-6 lg:px-0 lg:pt-0 lg:pb-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1 mb-8 lg:short:mb-4">About me </h1>

            <p className="mb-8 lg:short:mb-5 max-w-sm">
              <b>{owner.name}</b> - {owner.role}, Omii's Photography. Welcome to my
              photography portfolio, where every click tells a story and every
              image captures the essence of life's most precious moments. I am
              {" "}{owner.name}, a passionate and dedicated photographer
              specializing in a wide array of photography services to meet your
              diverse needs.
            </p>
            <p className="mb-8 lg:short:mb-5 max-w-sm" > <b>My Services</b> -       <i> Maternity photoshoot, new born
              photography, cake smash, theme based photography, fitness
              photography, fashion photography and many more.</i></p>

            <Link to={"/portfolio"} className="btn">
              View my Work
            </Link>
          </motion.div>
        </div>
      </div>

      {/*why choose me*/}
      <div className="bg-white section-pad">
        <div className="container mx-auto px-6 lg:px-0">
          <SectionHeading
            eyebrow="Why clients choose me"
            title="Calm sessions, beautiful results"
            text="Every shoot is planned around you — your story, your pace and your comfort."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                {...revealProps}
                custom={i}
                className="rounded-2xl border border-black/10 p-8 text-center lg:text-left transition duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <Icon className="text-3xl text-gold mx-auto lg:mx-0 mb-5" />
                <h3 className="font-primary font-bold text-xl mb-2">{title}</h3>
                <p className="text-grey">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/*process*/}
      <div className="bg-cream section-pad">
        <div className="container mx-auto px-6 lg:px-0">
          <SectionHeading
            eyebrow="How it works"
            title="From first message to final gallery"
          />
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/*connecting line behind the step numbers on desktop*/}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-black/15" />
            {process.map(({ icon: Icon, title, text }, i) => (
              <motion.div key={title} {...revealProps} custom={i} className="relative text-center">
                <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-primary text-white flex items-center justify-center text-2xl ring-8 ring-cream">
                  <Icon />
                </div>
                <div className="mt-6 text-xs font-semibold tracking-[0.3em] text-gold">
                  STEP {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-primary font-bold text-2xl mt-2 mb-3">{title}</h3>
                <p className="text-grey max-w-xs mx-auto">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/*philosophy quote*/}
      <div className="bg-amber-200 section-pad">
        <motion.figure {...revealProps} className="container mx-auto px-6 lg:px-0 max-w-4xl text-center">
          <blockquote className="font-primary italic text-3xl lg:text-5xl leading-snug tracking-[-0.02em]">
            “Every click tells a story — my job is to make sure it's yours.”
          </blockquote>
          <figcaption className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-grey">
            {owner.name} · {owner.role}
          </figcaption>
        </motion.figure>
      </div>

      <CtaBand />
      <Footer />
    </motion.section>
  );
};

export default About;
