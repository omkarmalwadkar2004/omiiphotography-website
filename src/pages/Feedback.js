import React from "react";
//import images
import WomanImg from "../img/feedback/lg.jpg";
//import motion
import { motion } from "framer-motion";
//import transition
import { transition1 } from "../transitions";

const Feedback = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section bg-stone-400"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          {/*bg*/}
          <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{opacity:0, y:'100%'}}
              transition={transition1}
          className="hidden lg:flex absolute bottom-0 left-0 right-0 top-72 -z-10">
            
          </motion.div>
          {/*text & form*/}
          <div className="lg:flex-1 lg:pt-32 px-4 ">
            <h1 className="h1">Feedback</h1>
            <p className="mb-6 ml-3"> </p>
            <form className="flex flex-col gap-y-7">
              <div className="flex gap-x-10 ">
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[black]"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[black]"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              <input
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[black]"
                type="text"
                placeholder="Your message"
              />
              <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                Send
              </button>
            </form>
          </div>

          {/*image*/}

          <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{transition: transition1, duration: 1.5}}
           className="lg:flex-1 ">
            <img className="rounded-xl" src={WomanImg} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Feedback;

