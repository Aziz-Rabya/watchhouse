"use client";
import React from "react";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <div className="relative w-full group">
      {/* NAVBAR */}
      <motion.nav
        className="flex items-center justify-between px-9 py-8 text-white bg-transparent z-50 transition-colors duration-500 group-hover:bg-amber-50 group-hover:text-black"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Menu */}
        <motion.div
          className="flex gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {["Subscribe.", "Coffee.", "Equipment.", "Visit us.", "Info."].map(
            (text, idx) => (
              <motion.a
                key={idx}
                href="#"
                className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-700 hover:after:w-full"
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {text} <i className="bx bx-chevron-down"></i>
              </motion.a>
            )
          )}
        </motion.div>

        {/* Center Logo */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <a href="#" className="text-4xl font-serif">
            WatchHouse.
          </a>
        </motion.div>

        {/* Right Icons */}
        <motion.div
          className="flex gap-6 text-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
          }}
        >
          {["bx-user", "bx-search-alt-2", "bx-shopping-bag"].map((icon, idx) => (
            <motion.a
              key={idx}
              href="#"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <i className={`bx ${icon}`}></i>
            </motion.a>
          ))}
        </motion.div>
      </motion.nav>

      {/* Animated underline below nav */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.9 }} // starts after nav animation
      >
        <div className="h-full bg-white group-hover:bg-black mx-auto"></div>
      </motion.div>
    </div>
  );
};

export default Nav;
