import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "../utils/whatsapp";

// floating chat button shown on every page
const WhatsAppButton = () => (
  <a
    href={whatsappUrl("Hi Omii's Photography! I'd like to know more about a photoshoot.")}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    title="Chat on WhatsApp"
    className="group fixed bottom-5 right-5 lg:bottom-8 lg:right-8 z-40 flex items-center"
  >
    <span className="hidden lg:block mr-3 px-4 py-2 rounded-full bg-white text-primary text-sm font-semibold shadow-lg opacity-0 translate-x-2 transition group-hover:opacity-100 group-hover:translate-x-0">
      Chat with us
    </span>
    <span className="relative w-14 h-14 rounded-full bg-[#25D366] text-white text-3xl flex items-center justify-center shadow-xl transition group-hover:scale-110">
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
      <FaWhatsapp className="relative" />
    </span>
  </a>
);

export default WhatsAppButton;
