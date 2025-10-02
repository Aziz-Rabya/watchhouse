"use client";
import React from "react";
import Nav from "./Nav";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/hero-vid.mp4" type="video/mp4" />
      </video>

      {/* Foreground */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar loads first */}
        <Nav />

        {/* Hero content loads after */}
        <div className="flex flex-col items-center justify-center flex-1 text-white font-serif text-center px-4">
          <motion.h1
            className="text-5xl md:text-7xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            Modern Coffee.
          </motion.h1>

          <motion.p
            className="mt-6 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
          >
            Pourers of the world's best coffees and providers of the tools and
            techniques from our <br className="hidden md:block" />
            <span className="block">House to yours.</span>
          </motion.p>

          <motion.button
            className="group relative overflow-hidden rounded-full px-6 py-2 mt-6 bg-white text-black font-thin uppercase"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
          >
            <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-700">
              Shop Now
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
