"use client";
import React from "react";
import { motion } from "framer-motion";

const Visit = () => {
  return (
    <section className="bg-[#f8f1e5] px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-16">
      {/* Left Image (Main Location) */}
      <motion.div
        className="w-full flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src="/images/Visit_us_homepage.jpg.jpeg"
          alt="WatchHouse Entrance"
          className="rounded-2xl shadow-xl w-full h-[850px] object-cover"
        />
      </motion.div>

      {/* Right Text */}
      <motion.div
        className="w-full lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
          Visit us.
        </h1>
        <p className="text-gray-800 text-lg max-w-[450px] mx-auto lg:mx-0 leading-relaxed mb-8">
          25 square metres on London’s famous Bermondsey Street was all it took
          to conceive WatchHouse and lay the foundations of everything to come.
        </p>

        {/* Button */}
        <motion.button
          className="border border-black rounded-full px-6 py-3 uppercase font-medium text-sm transition hover:bg-black hover:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Our Locations
        </motion.button>

        {/* Small Secondary Image */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img
            src="/images/bermo.jpg.jpeg"
            alt="Bermondsey Street"
            className="rounded-xl shadow-md max-w-[350px] mx-auto lg:mx-0"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Visit;
