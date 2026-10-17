import React from "react";
//import images
import Image1 from "../img/portfolio/IMG_20240726_194547.jpg";
import Image2 from "../img/portfolio/IMG_20240726_235732.jpg";
import Image3 from "../img/portfolio/IMG_20240726_235715.jpg";
import Image4 from "../img/portfolio/IMG_20240726_194634.jpg";

//import Link
import { Link } from "react-router-dom";
//import motion
import { motion } from "framer-motion";
//import transition
import { transition1 } from "../transitions";
const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "150%" }}
      transition={transition1}
      className="section bg-pink-200"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8 ">
          {/*text*/}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start "
          >
            <h1 className="h1 mb-8">Portfolio</h1>
            <p className="mb-8 max-w-sm">
              specializing in capturing life's most precious moments. With a
              keen eye for detail and a love for storytelling through images, I
              offer a range of photography services including maternity
              photoshoots, newborn photography, cake smash sessions, theme-based
              photography, fitness photography, and fashion photography. Each
              photograph I take is a testament to my commitment to quality and
              creativity. I strive to create images that are not only beautiful
              but also meaningful and memorable. My goal is to provide my
              clients with a collection of images that they can cherish for a
              lifetime.
            </p>
            <p className="mb-8"><b>Here are some of my photographs: </b></p>
            <Link to={"contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire Me
            </Link>
          </motion.div>

          {/*image grid*/}
          <div className="grid grid-cols-2 lg:gap-2 bg-cover">
            {/*image*/}
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-pink-200 overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image1}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]  bg-pink-200 overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] lg:w-[320px] hover:scale-110 transition-all duration-500"
                src={Image2}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-transparent overflow-hidden">
              <img
                className="object-cover lg:h-[220px] lg:w-[320px] hover:scale-110 transition-all duration-500"
                src={Image3}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-white overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
