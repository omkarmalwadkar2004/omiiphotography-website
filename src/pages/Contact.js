import React from "react";
//import images
import WomanImg from "../img/contact/Image 2025-09-30 at 09.29.36_508885fa.jpg";
//import motion
import { motion } from "framer-motion";
//import transition
import { transition1 } from "../transitions";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section bg-orange-200"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          {/*bg*/}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="hidden lg:flex absolute bottom-0 left-0 right-0 top-72 -z-10"
          ></motion.div>
          {/*text & form*/}
          <div className="lg:flex-1 lg:pt-32 px-4 ">
            <h1 className="h1">Contact me</h1>
            <div className="flex flex-row gap-5 mb-6 ml-3 ">
              <button className="btn h-10 w-10 rounded-md text-xs gap-1  bg-pink-700">
                <a
                  className="hover:underline-offset-4"
                  href="https://www.instagram.com/swapnil_malwadkar_photostudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                >
                  Instagram
                </a>
                <span class="[&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    !Font Awesome Free 6.5.1 by @fontawesome -
                    https://fontawesome.com License -
                    https://fontawesome.com/license/free Copyright 2024
                    Fonticons, Inc.
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
              </button>
              {/*facebook*/}
              <button className="btn h-10 w-10  rounded-md self-start bg-blue-600 text-xs">
                <a className="hover:underline-offset-4" href="">
                  <span class="[&>svg]:h-4 [&>svg]:w-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      Font Awesome Free 6.5.1 by @fontawesome -
                      https://fontawesome.com License -
                      https://fontawesome.com/license/free Copyright 2024
                      Fonticons, Inc.
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </span>
                </a>
                <a href="http://www.facebook.com">acebook</a>

                {/*linkedin*/}
              </button>
              <button className="btn h-10 text-sm w-10 rounded-md mb-[30px] bg-blue-900">
                
                <a href="https://www.linkedin.com/in/swapnil-malwadkar-a87a68104?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABp_WgcBz8gtPk6XBTFA37TaG4i4UU8dyXE&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B3%2F8lXtLtQQewWcVZhZWs%2BA%3D%3D">Linked</a>
                <span class="[&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    Font Awesome Free 6.5.1 by @fontawesome -
                    https://fontawesome.com License -
                    https://fontawesome.com/license/free Copyright 2024
                    Fonticons, Inc.
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </button>
              {/* twitter*/}
              <button className=" gap-1 btn h-10 text-xs w-10 rounded-md mb-[30px] bg-black-900">
                <a href="https://x.com/?lang=en-in"></a>
                <span class="[&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    Font Awesome Free 6.5.1 by @fontawesome -
                    https://fontawesome.com License -
                    https://fontawesome.com/license/free Copyright 2024
                    Fonticons, Inc.
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </span>
              </button>
              {/*pinterest*/}
              <button className="bg-red-900 btn h-10 text-xs w-10 rounded-md mb-[30px] bg-black-900">
                <span class="[&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 496 512"
                  >
                    Font Awesome Free 6.5.1 by @fontawesome -
                    https://fontawesome.com License -
                    https://fontawesome.com/license/free Copyright 2024
                    Fonticons, Inc.
                    <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
                  </svg>
                </span>
                <a href="http://www.pinterest.com">interest</a>
              </button>
            </div>
            <p className="mb-6 ml-3"></p>
          </div>

          {/*image*/}

          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition: transition1, duration: 1.5 }}
            className="lg:flex-1"
          >
            <img src={WomanImg} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
