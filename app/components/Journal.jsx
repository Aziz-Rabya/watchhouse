"use client";
import React from "react";
import { motion } from "framer-motion";

const Journal = () => {
  return (
    <div className="bg-[#f6f1e9] px-6 py-20 mt-20">
      {/* Top Title Section */}
      <motion.div
        className="flex flex-col lg:flex-row justify-between items-start gap-10 mx-20"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-7xl font-serif text-black mt-5">The journal.</h2>

        <div className="lg:w-2/3 max-w-[700px]">
          <p className="text-black text-[15px] leading-relaxed">
            25 square metres on London’s famous Bermondsey Street was all it
            took to conceive WatchHouse and lay the foundations of everything to
            come. Historically a shelter for men guarding the graveyard of St
            Mary Magdalen’s Church.
          </p>

          <motion.button
            className="group relative overflow-hidden rounded-full px-6 py-2 mt-6 bg-transparent text-black border border-black font-thin uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span
              className="absolute inset-0 bg-black
             translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0"
            />
            <span className="relative z-10 group-hover:text-white transition-colors duration-700">
              explore journal
            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* New Grid Section */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 mx-20">
        {/* NOMAD Feature */}
        <motion.div
          className="relative rounded-lg overflow-hidden h-[700px] flex items-center justify-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/images/NomadBlog_6edb5f1e-c505-4f00-9989-4c79c63ce704.jpg.jpeg"
            alt="WatchHouse x Nomad"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-transparent bg-opacity-30" />
          <div className="relative px-6 max-w-[700px] w-full">
            <h3 className="text-white text-center uppercase text-6xl font-serif mb-40">
              WatchHouse x NOMAD.
            </h3>

            {/* Horizontal Line */}
            <div className="w-full h-[1px] flex justify-center mb-10">
              <div className="h-full bg-white w-[550px] group-hover:w-full transition-all duration-700" />
            </div>

            {/* Bottom Section: Spotlight and Text */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mt-4 text-left">
              <p className="text-white font-semibold text-lg md:w-1/3">
                Spotlight.
              </p>
              <p className="text-white text-[15px] leading-relaxed md:w-2/3">
                A Barcelona guest. A London roast. For this year's London Coffee
                Festival, we've partnered with NOMAD Coffee on a one-off...
              </p>
            </div>
          </div>
        </motion.div>

        {/* Matcha & Colombia Features */}
        <div className="flex flex-col gap-10">
          {/* Matcha */}
          <motion.div
            className="flex flex-col md:flex-row-reverse gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/MatchaInHouse_b19f84a8-438d-4780-840e-82bf3fce4e78.jpg.jpeg"
              alt="Matcha drinks"
              className="w-full md:w-1/2 h-[350px] object-cover rounded-lg"
            />
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-black font-semibold">Introducing: matcha.</p>
              <div className="border-t border-black border-opacity-20 my-2 w-10"></div>
              <p className="text-black text-sm">
                Three drinks. Two matchas. No shortcuts. At WatchHouse, every
                ingredient we serve is carefully chosen, not just for what...
              </p>
              <button className="underline mt-2 text-black text-sm">
                Read more.
              </button>
            </div>
          </motion.div>

          {/* Colombia */}
          <motion.div
            className="flex flex-col md:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <img
              src="/images/Colombian_Vista_e6418de3-7b92-40c9-bc65-847f057360c3.jpg.jpeg"
              alt="Colombia origin"
              className="w-full md:w-1/2 h-[350px] object-cover rounded-lg"
            />
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-black font-semibold">Origin: Colombia.</p>
              <div className="border-t border-black border-opacity-20 my-2 w-10"></div>
              <p className="text-black text-sm">
                Think of spectacular coffee, and Colombia is the origin that
                comes to mind. With its dramatic landscapes, diverse mi...
              </p>
              <button className="underline mt-2 text-black text-sm">
                Read more.
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Journal;
