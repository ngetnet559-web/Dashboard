import React, { useState } from "react";
import assets from "../assets/assets.js";

const Navbar = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleDarkMode = () => {
    const dark = document.documentElement.classList.toggle("dark");
    setIsDark(dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  return (
    <div className="w-full">
      <div className="flex  sm:flex-row sm:items-center gap-3 sm:gap-4 w-full">
        <div className="w-full">
          <input
            className="w-full pt-3 pr-4 pb-3 pl-4 sm:pl-12 bg-glassbg border border-amber-100 rounded-xl focus:ring-1 focus:ring-amber-300 outline-none text-sm sm:text-base"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="flex items-center justify-end gap-3 sm:gap-4 shrink-0">
          <div className="relative">
            <img
              className="w-8 h-8 sm:w-9 sm:h-9     rounded-xl p-1 cursor-pointer dark:invert"
              src={assets.bell}
              alt="Notifications"
            />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#e07a5f]"></span>
          </div>

          <button onClick={toggleDarkMode}>
            <img
              className="w-8 h-8 sm:w-9 sm:h-9 cursor-pointer transition duration-1000 dark:invert"
              src={isDark ? assets.sun2 : assets.moon}
              alt="Theme"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;