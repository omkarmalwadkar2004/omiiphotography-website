import React, { useEffect } from "react";
// import pages
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Feedback from "../pages/Feedback";
import NotFound from "../pages/NotFound";
import { pageMeta } from "../data/content";

//import routes route & useLocation hook
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


const AnimRoutes = () => {
  const location = useLocation();
  // on every page change: start at the top and set the tab title + search description
  useEffect(() => {
    window.scrollTo(0, 0);
    const meta = pageMeta[location.pathname.replace(/\/+$/, "") || "/"] || pageMeta["*"];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
  }, [location.pathname]);
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} Location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
