import React from "react";
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
} from "react-icons/im";
import { contactLinks } from "../data/content";

const links = [
  { href: contactLinks.facebook, icon: ImFacebook, label: "Facebook" },
  { href: contactLinks.x, icon: ImTwitter, label: "X" },
  { href: contactLinks.pinterest, icon: ImPinterest, label: "Pinterest" },
  { href: contactLinks.instagram, icon: ImInstagram, label: "Instagram" },
];

const Socials = () => {
  return (
    <div className="hidden x1:flex text-white">
      <ul className="flex gap-x-4">
        {links.map(({ href, icon: Icon, label }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
