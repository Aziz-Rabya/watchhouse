"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Subscribe = () => {
  const [isCoffee, setIsCoffee] = useState(true);
  const products = isCoffee ? coffeeData : podData;
  const colors = isCoffee ? coffeeCardColors : podCardColors;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="font-serif bg-white px-12 py-12 md:flex flex-col lg:flex-row gap-10 mt-50"
    >
      {/* LEFT SECTION */}
      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold leading-tight"
        >
          Subscribe
          <br />
          today.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg text-gray-700"
        >
          WatchHouse. YourHouse. <br />
          The Modern Coffee experience in the comfort <br />
          of your own home.
        </motion.p>
        <p className="mt-5 text-lg">Subscribe for a neverending cup.</p>

        {/* TOGGLE */}
        <div className="mt-6 flex items-center gap-4">
          <span className={`${isCoffee ? "text-gray-500" : "font-semibold"}`}>
            Coffee
          </span>
          <div
            onClick={() => setIsCoffee(!isCoffee)}
            className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
              isCoffee ? "bg-gray-300" : "bg-gray-300"
            }`}
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`bg-black w-6 h-6 rounded-full shadow-md`}
              animate={{ x: isCoffee ? 0 : 24 }}
            />
          </div>
          <span className={`${isCoffee ? "font-semibold" : "text-gray-500"}`}>
            Pods
          </span>
        </div>
      </div>

      {/* RIGHT SECTION: PRODUCTS */}
      <motion.div
        className="flex overflow-x-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <div className="flex gap-6 pb-4">
          {products.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className={`flex-shrink-0 rounded-xl p-6 w-80 shadow-lg hover:shadow-2xl bg-gradient-to-b ${
                colors[index % colors.length]
              }`}
            >
              <div className="flex flex-col">
                <motion.img
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  src={item.image}
                  alt={item.title}
                  className="top-0 w-full h-full object-contain mb-4"
                />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-800 mb-2">{item.description}</p>
                <p className="font-medium mb-4">£{item.price}</p>
                <div className="text-sm text-gray-700 space-y-1 mb-4">
                  <p>✔ Free UK shipping.</p>
                  <p>✔ Always 10% off.</p>
                  <p>✔ Pause, skip or cancel at any time.</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 bg-white text-black rounded-full shadow-sm text-sm font-semibold hover:bg-gray-100 transition"
                >
                  {index === 1 && isCoffee ? "SUBSCRIBE NOW" : "BUY NOW"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Subscribe;

// Gradient color classes
const coffeeCardColors = [
  "from-[#b99f81] to-[#e8d2b4]", // warm tan
  "from-[#e7e2d7] to-[#f4efe7]", // soft cream
  "from-[#b99f81] to-[#e8d2b4]", // light brown
];

const podCardColors = [
  "from-[#b99f81] to-[#e8d2b4]", // soft beige
  "from-[#ac6e6b] to-[#be958f]", // light pink
  "from-[#787c80] to-[#b0b5b6]", // light blue
];

// Dummy product data
const coffeeData = [
  {
    title: "1829 Espresso.",
    description:
      "Our seasonal espresso for milk. We source, roast and brew this coffee specifically for an exceptional milk-based experience.",
    price: "12.00",
    image: "/images/esspresso.png",
  },
  {
    title: "Roaster's Spotlight Subscription.",
    description:
      "Explore the best of our single origin roasts; each delivery will be a different stand out coffee hand picked by our Roastery team for you to enjoy.",
    price: "13.50",
    image: "/images/single.gif",
  },
  {
    title: "Galeras Decaf.",
    description:
      "Clean, sweet and complex. Notes of peach, smooth milk chocolate and a clear orange acidity that will surprise even the most discerning coffee connoisseurs.",
    price: "12.00",
    image: "/images/orange.png",
  },
];

const podData = [
  {
    title: "Rituals Pods.",
    description: "Smooth, balanced coffee for your daily Modern Coffee ritual.",
    price: "18.00",
    image: "/images/beige.png",
  },
  {
    title: "Ventures Pods.",
    description: "Bright, fruit-forward coffee for the curious drinker. ​",
    price: "21.00",
    image: "/images/pink.png",
  },
  {
    title: "Horizons Pods.",
    description: " Bold, expressive coffee pushing boundaries.",
    price: "24.00",
    image: "/images/blue.png",
  },
];
