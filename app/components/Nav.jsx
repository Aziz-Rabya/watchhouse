import React from "react";

const Nav = () => {
  return (
    <div className="relative w-full group">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-9 py-8 text-white bg-transparent z-50 transition-colors duration-500 group-hover:bg-amber-50 group-hover:text-black">
        {/* Left Menu */}
        <div className="flex gap-6">
          {["Subscribe.", "Coffee.", "Equipment.", "Visit us.", "Info."].map(
            (text, idx) => (
              <a
                key={idx}
                href="#"
                className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-700 hover:after:w-full"
              >
                {text} <i className="bx bx-chevron-down"></i>
              </a>
            )
          )}
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <a href="#" className="text-4xl font-serif">
            WatchHouse.
          </a>
        </div>

        {/* Right Icons */}
        <div className="flex gap-6 text-3xl">
          <a href="#">
            <i className="bx bx-user"></i>
          </a>
          <a href="#">
            <i className="bx bx-search-alt-2"></i>
          </a>
          <a href="#">
            <i className="bx bx-shopping-bag"></i>
          </a>
        </div>
      </nav>

      {/* Animated underline below nav */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
        <div className="h-full bg-white w-[1200px] group-hover:w-full transition-all duration-700 group-hover:bg-black mx-auto"></div>
      </div>
    </div>
  );
};

export default Nav;
