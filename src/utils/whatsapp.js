import { contactLinks } from "../data/content";

// wa.me opens the WhatsApp app on phones and WhatsApp Web/Desktop on computers
export const whatsappUrl = (text = "") =>
  `https://wa.me/${contactLinks.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// No backend: open a chat with the form contents pre-typed; the visitor just taps send.
export const openWhatsApp = (title, fields) => {
  const lines = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `*${k}:* ${v}`);
  window.open(whatsappUrl([`*${title}*`, "", ...lines].join("\n")), "_blank", "noopener");
};
