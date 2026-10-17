import React from "react";

export const inputClass =
  "w-full h-14 px-4 rounded-xl border border-black/10 bg-white font-secondary text-primary placeholder:text-black/40 outline-none transition focus:border-primary focus:ring-4 focus:ring-black/5";

// labelled form control; `full` spans both columns of a 2-col form grid
export const Field = ({ label, required, full, children }) => (
  <label className={`block text-left ${full ? "sm:col-span-2" : ""}`}>
    <span className="block mb-2 text-sm font-semibold">
      {label}
      {required && <span className="text-gold"> *</span>}
    </span>
    {children}
  </label>
);
