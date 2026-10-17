import React from "react";
//import images
import WomanImg from "../img/about/Image 2025-09-30 at 09.29.36_50967a5c.jpg";
//import link
import { Link } from "react-router-dom";
//import motion
import { motion } from "framer-motion";
//import transition
import { transition1 } from "../transitions";



const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section bg-amber-200"
    >
      <div className="container mx-auto h-full relative">
        {/*text & img wrapper*/}
        <div className=" flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={WomanImg} alt="" />
          </div>
          {/*text*/}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-140 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1 mb-8">About me </h1>

            <p className="mb-8 max-w-sm">
              <b>Swapnil Malwadkar</b> - Professional Photographer Welcome to my
              photography portfolio, where every click tells a story and every
              image captures the essence of life's most precious moments. I am
              Swapnil Malwadkar, a passionate and dedicated photographer
              specializing in a wide array of photography services to meet your
              diverse needs.
            </p>
            <p className="mb-8 max-w-sm" > <b>My Services</b> -       <i> Maternity photoshoot, new born
              photography, cake smash, theme based photography, fitness
              photography, fashion photography and many more.</i></p>

            <Link to={"/portfolio"} className="btn">
              View my Wordk
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
