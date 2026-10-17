import React, { useState } from "react";
//import images
import WomanImg from "../img/contact/Image 2025-09-30 at 09.29.36_508885fa.jpg";
//import motion
import { motion, AnimatePresence } from "framer-motion";
//import transition
import { transition1, revealProps } from "../transitions";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPinterestP, FaWhatsapp } from "react-icons/fa";
import { FiMapPin, FiMail, FiClock, FiPlus, FiArrowDown, FiCheckCircle, FiUser } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import { Field, inputClass } from "../components/Form";
import { contactLinks, services, faqs, owner } from "../data/content";
import { openWhatsApp, whatsappUrl } from "../utils/whatsapp";

// react-icons 4.6 predates the X logo, so draw it inline
const XIcon = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
);

const chatLink = whatsappUrl("Hi Omii's Photography! I'd like to know more about a photoshoot.");

// first entry is the main channel and gets a labelled button; the rest are icon buttons
const socials = [
  { href: chatLink, icon: FaWhatsapp, label: "WhatsApp", cta: "Chat on WhatsApp", color: "bg-[#25D366] hover:bg-[#1da851]" },
  { href: contactLinks.instagram, icon: FaInstagram, label: "Instagram", color: "bg-primary hover:bg-pink-700" },
  { href: contactLinks.facebook, icon: FaFacebookF, label: "Facebook", color: "bg-primary hover:bg-blue-600" },
  { href: contactLinks.linkedin, icon: FaLinkedinIn, label: "LinkedIn", color: "bg-primary hover:bg-blue-900" },
  { href: contactLinks.x, icon: XIcon, label: "X", color: "bg-primary hover:bg-grey" },
  { href: contactLinks.pinterest, icon: FaPinterestP, label: "Pinterest", color: "bg-primary hover:bg-red-800" },
];

const details = [
  { icon: FiUser, label: owner.role, value: owner.name },
  { icon: FaWhatsapp, label: "WhatsApp", value: contactLinks.whatsappDisplay, href: chatLink },
  { icon: FiMapPin, label: "Studio", value: "Pune, Maharashtra, India" },
  { icon: FaInstagram, label: "Instagram DM", value: contactLinks.instagramHandle, href: contactLinks.instagram },
  { icon: FiMail, label: "Email", value: contactLinks.email, href: `mailto:${contactLinks.email}` },
  { icon: FiClock, label: "Response time", value: "Usually within 24 hours" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "", date: "", message: "" });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    openWhatsApp(`Photoshoot enquiry — ${form.type || "General"}`, {
      Name: form.name,
      Email: form.email,
      Phone: form.phone,
      "Shoot type": form.type,
      "Preferred date": form.date
        ? new Date(`${form.date}T00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
        : "",
      Message: form.message,
    });
    setSent(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: "100vh" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100vh" }}
      transition={transition1}
      className="section bg-orange-200"
    >
      {/*hero*/}
      <div className="container mx-auto px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:min-h-screen items-center gap-12 lg:gap-16 pt-36 pb-16 lg:pt-[100px] lg:pb-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="lg:flex-1"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-grey">
              <span className="h-px w-8 bg-gold" />
              Get in touch
            </div>
            <h1 className="h1 mb-6 lg:short:mb-4">Contact me</h1>
            <p className="text-lg max-w-md mx-auto lg:mx-0 mb-8 lg:short:mb-6">
              Planning a maternity shoot, a newborn session or a first birthday?
              Say hello — I'd love to hear what you have in mind.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {socials.map(({ href, icon: Icon, label, cta, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={cta || label}
                  title={cta || label}
                  className={`inline-flex items-center justify-center gap-2 h-11 rounded-full text-white text-sm font-semibold transition ${color} ${
                    cta ? "px-5" : "w-11"
                  }`}
                >
                  <Icon className={cta ? "text-lg" : ""} />
                  {cta}
                </a>
              ))}
            </div>
            <a
              href="#enquiry"
              className="group inline-flex items-center gap-2 mt-8 lg:short:mt-6 font-semibold uppercase tracking-wider text-sm border-b border-primary pb-1"
            >
              Or send an enquiry
              <FiArrowDown className="transition group-hover:translate-y-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ ...transition1, duration: 1.5 }}
            className="lg:flex-1 w-full"
          >
            <img
              src={WomanImg}
              alt="Camera tossed mid-air in an autumn forest"
              className="w-full rounded-2xl shadow-2xl object-cover lg:max-h-[calc(100vh_-_160px)]"
            />
          </motion.div>
        </div>
      </div>

      {/*enquiry form*/}
      <div id="enquiry" className="bg-white section-pad scroll-mt-[100px]">
        <div className="container mx-auto px-6 lg:px-0 grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading
              align="left"
              eyebrow="Book a session"
              title="Tell me about your shoot"
              text="Share a few details and I'll get back to you with availability and packages."
            />
            <ul className="space-y-6 -mt-4">
              {details.map(({ icon: Icon, label, value, href }, i) => (
                <motion.li key={label} {...revealProps} custom={i} className="flex items-center gap-4 text-left">
                  <span className="w-12 h-12 shrink-0 rounded-full bg-cream text-gold text-xl flex items-center justify-center">
                    <Icon />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.2em] text-grey">{label}</span>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="font-semibold text-sm sm:text-base hover:underline break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="font-semibold">{value}</span>
                    )}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.form
            {...revealProps}
            onSubmit={submit}
            className="lg:col-span-3 rounded-3xl bg-cream p-6 sm:p-8 lg:p-10 grid sm:grid-cols-2 gap-5"
          >
            <Field label="Your name" required>
              <input className={inputClass} required value={form.name} onChange={set("name")} placeholder="Full name" />
            </Field>
            <Field label="Email" required>
              <input className={inputClass} required type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" />
            </Field>
            <Field label="Phone">
              <input className={inputClass} type="tel" value={form.phone} onChange={set("phone")} placeholder="+91" />
            </Field>
            <Field label="Shoot type">
              <select className={inputClass} value={form.type} onChange={set("type")}>
                <option value="">Choose one</option>
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
                <option>Something else</option>
              </select>
            </Field>
            <Field label="Preferred date" full>
              <input className={inputClass} type="date" value={form.date} onChange={set("date")} />
            </Field>
            <Field label="Message" required full>
              <textarea
                className={`${inputClass} h-auto py-4 resize-none`}
                rows={5}
                required
                value={form.message}
                onChange={set("message")}
                placeholder="Tell me about the occasion, ideas or anything I should know"
              />
            </Field>
            <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <button type="submit" className="btn gap-2 px-8 whitespace-nowrap">
                <FaWhatsapp className="text-xl" />
                Send on WhatsApp
              </button>
              <AnimatePresence>
                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 text-sm text-grey text-left"
                  >
                    <FiCheckCircle className="text-gold text-lg shrink-0 mt-0.5" />
                    WhatsApp should open with your enquiry typed out — just tap send.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        </div>
      </div>

      {/*faq*/}
      <div className="bg-cream section-pad">
        <div className="container mx-auto px-6 lg:px-0">
          <SectionHeading eyebrow="Good to know" title="Frequently asked questions" />
          <div className="max-w-3xl mx-auto divide-y divide-black/10 border-y border-black/10">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-primary font-bold text-xl lg:text-2xl">{f.q}</span>
                    <FiPlus className={`shrink-0 text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-grey text-lg max-w-2xl">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </motion.section>
  );
};

export default Contact;
