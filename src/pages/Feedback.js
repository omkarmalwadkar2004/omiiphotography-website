import React, { useState } from "react";
//import motion
import { motion, AnimatePresence } from "framer-motion";
//import transition
import { transition1 } from "../transitions";
import { FiStar, FiCheckCircle, FiHeart, FiUsers, FiInstagram } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import Testimonials from "../components/Testimonials";
import CtaBand from "../components/CtaBand";
import Footer from "../components/Footer";
import { Field, inputClass } from "../components/Form";
import { contactLinks, services } from "../data/content";
import { openWhatsApp } from "../utils/whatsapp";
import { FaWhatsapp } from "react-icons/fa";

const reasons = [
  { icon: FiHeart, text: "Helps me keep improving every session" },
  { icon: FiUsers, text: "Helps other families choose with confidence" },
];

const ratingWords = ["", "Poor", "Fair", "Good", "Great", "Loved it!"];

const Feedback = () => {
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    openWhatsApp(`Feedback from ${form.name}`, {
      Name: form.name,
      Email: form.email,
      Session: form.type,
      Rating: rating ? `${"★".repeat(rating)}${"☆".repeat(5 - rating)} (${rating}/5)` : "",
      Feedback: form.message,
    });
    setSent(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: "100vh" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100vh" }}
      transition={transition1}
      className="section bg-stone-400"
    >
      <div className="container mx-auto px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:min-h-screen items-center gap-12 lg:gap-16 pt-36 pb-16 lg:pt-[124px] lg:pb-4 text-center lg:text-left">
          {/*text*/}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="lg:flex-1"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
              <span className="h-px w-8 bg-primary/50" />
              Your experience
            </div>
            <h1 className="h1 mb-6 lg:short:mb-4">Feedback</h1>
            <p className="text-lg max-w-md mx-auto lg:mx-0 mb-8 lg:short:mb-6">
              Had a session with me? I'd love to hear how it went — the good,
              the great and anything I could do better.
            </p>
            <ul className="space-y-3 inline-block text-left">
              {reasons.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                    <Icon />
                  </span>
                  {text}
                </li>
              ))}
              <li className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                  <FiInstagram />
                </span>
                <span>
                  Tag{" "}
                  <a href={contactLinks.instagram} target="_blank" rel="noreferrer" className="font-semibold underline">
                    {contactLinks.instagramHandle}
                  </a>
                </span>
              </li>
            </ul>
          </motion.div>

          {/*form*/}
          <motion.form
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ ...transition1, duration: 1.5 }}
            onSubmit={submit}
            className="lg:flex-1 w-full max-w-xl lg:max-w-none rounded-3xl bg-white shadow-2xl p-6 sm:p-8 lg:short:p-6 grid sm:grid-cols-2 gap-x-5 gap-y-4 text-left"
          >
            <Field label="Your name" required>
              <input className={inputClass} required value={form.name} onChange={set("name")} placeholder="Full name" />
            </Field>
            <Field label="Email">
              <input className={inputClass} type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" />
            </Field>
            <Field label="Session">
              <select className={inputClass} value={form.type} onChange={set("type")}>
                <option value="">Choose one</option>
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
                <option>Other</option>
              </select>
            </Field>
            <div>
              <span className="block mb-2 text-sm font-semibold">Your rating</span>
              <div className="h-14 flex items-center gap-1" onMouseLeave={() => setHover(0)}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    aria-label={`${n} star${n > 1 ? "s" : ""}`}
                    aria-pressed={rating === n}
                    onClick={() => setRating(n)}
                    onMouseEnter={() => setHover(n)}
                    className="p-1 text-2xl transition hover:scale-110"
                  >
                    <FiStar className={n <= (hover || rating) ? "fill-gold text-gold" : "text-black/20"} />
                  </button>
                ))}
                <span className="ml-2 text-sm text-grey">{ratingWords[hover || rating]}</span>
              </div>
            </div>
            <Field label="Your feedback" required full>
              <textarea
                className={`${inputClass} h-auto py-4 resize-none`}
                rows={3}
                required
                value={form.message}
                onChange={set("message")}
                placeholder="What did you enjoy? What could be better?"
              />
            </Field>
            <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
              <button type="submit" className="btn gap-2 px-8 whitespace-nowrap">
                <FaWhatsapp className="text-xl" />
                Send feedback
              </button>
              <AnimatePresence>
                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 text-sm text-grey"
                  >
                    <FiCheckCircle className="text-gold text-lg shrink-0 mt-0.5" />
                    Thank you! WhatsApp should open with your feedback typed out — just tap send.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        </div>
      </div>

      {/*reviews*/}
      <div className="bg-white section-pad">
        <div className="container mx-auto px-6 lg:px-0">
          <SectionHeading eyebrow="Kind words" title="What others have said" />
          <Testimonials />
        </div>
      </div>

      <CtaBand title="Ready for your next session?" />
      <Footer />
    </motion.section>
  );
};

export default Feedback;
