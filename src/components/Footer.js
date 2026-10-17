import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "../utils/whatsapp";
import { FiMapPin } from "react-icons/fi";
import Logo from "../img/header/omii-logo.svg";
import { contactLinks, owner } from "../data/content";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
  { to: "/feedback", label: "Feedback" },
];

const socials = [
  { href: whatsappUrl(), icon: FaWhatsapp, label: "WhatsApp" },
  { href: contactLinks.instagram, icon: FaInstagram, label: "Instagram" },
  { href: contactLinks.facebook, icon: FaFacebookF, label: "Facebook" },
  { href: contactLinks.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white/70">
      <div className="container mx-auto px-6 lg:px-0 py-16 grid gap-12 md:grid-cols-3 text-center md:text-left">
        <div>
          <img src={Logo} alt="Omii's Photography" className="mx-auto md:mx-0" style={{ height: 80, width: 280 }} />
          <p className="mt-4 max-w-xs mx-auto md:mx-0">
            Maternity, newborn, family, fitness and fashion photography from Pune.
          </p>
          <p className="mt-3 text-sm text-white/50">
            {owner.role} — <span className="text-white/80">{owner.name}</span>
          </p>
        </div>

        <div>
          <h3 className="font-primary text-xl text-white mb-5">Explore</h3>
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-primary text-xl text-white mb-5">Get in touch</h3>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FiMapPin className="text-gold" /> Pune, Maharashtra, India
          </p>
          <div className="flex justify-center md:justify-start gap-3 mt-6">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container mx-auto px-6 lg:px-0 py-6 text-sm text-center md:text-left text-white/50">
          © {new Date().getFullYear()} Omii's Photography. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
