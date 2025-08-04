"use client";
import React, { useRef, useState, useEffect } from "react";

const CARD_WIDTH = 320;
const GAP = 48;
const ITEM_WIDTH = CARD_WIDTH + GAP;
const VISIBLE_COUNT = 3;

const products = [
  {
    title: "Pods | Mixed Set",
    description: "A journey across Rituals, Ventures and Horizons.",
    price: "21.00",
    image: "/images/Product_Shots_July_2025_Mixed_Pods.png",
  },
  {
    title: "Kinto Travel Tumbler.",
    description:
      "Double-walled stainless steel vacuum flask, perfect for hot or cold brews (up to 6 hours)",
    price: "35.00",
    image: "/images/KINTOTUMBLER_BOTTOM_ALIGNED.png",
  },
  {
    title: "WatchHouse x Monoware Mug.",
    description:
      "Enhance your daily coffee ritual with this everyday mug, a ceramic piece conceived with care.",
    price: "22.00",
    image: "/images/MonowareMug_BOTTOM_ALIGNED.png",
  },
  {
    title: "Another Mug.",
    description: "Just another ceramic piece.",
    price: "20.00",
    image: "/images/MizuMiruku.png",
  },
  {
    title: "Yet Another Mug.",
    description: "Stylish & simple design.",
    price: "24.00",
    image: "/images/MatchaMiruku.png",
  },
  {
    title: "Mug Life.",
    description: "You mug, I mug, we all mug.",
    price: "19.00",
    image: "/images/WHCUPPINGSPOON.png",
  },
   {
    title: "Mug Life.",
    description: "You mug, I mug, we all mug.",
    price: "19.00",
    image: "/images/1829_x5_Bundle_June_2024.png",
  },
  {
    title: "Mug Life.",
    description: "You mug, I mug, we all mug.",
    price: "19.00",
    image: "/images/AEROPRESS_BOTTOM_ALIGNED_V3.png",
  },
];

const Products = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Scroll to given index smoothly
  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * ITEM_WIDTH,
        behavior: "smooth",
      });
    }
  };

  // Scroll left with wrap-around
  const scrollLeft = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev === 0 ? products.length - 1 : prev - 1;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  };

  // Scroll right with wrap-around
  const scrollRight = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev === products.length - 1 ? 0 : prev + 1;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  };

  // When component mounts, scroll to first item just in case
  useEffect(() => {
    scrollToIndex(currentIndex);
  }, []);

  return (
    <section className="w-full px-6 md:px-16 py-20 font-serif bg-white relative">
      {/* Header */}
      <div className="flex justify-between items-start mb-14">
        <h2 className="text-5xl font-semibold text-black">Our favourites.</h2>
        <button className="border border-black rounded-full px-6 py-2 text-black uppercase text-sm hover:bg-black hover:text-white transition duration-300">
          Shop Now
        </button>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full flex justify-center items-center">
        <div
          ref={scrollRef}
          className="flex gap-12 overflow-hidden scroll-smooth"
          style={{ width: `${ITEM_WIDTH * VISIBLE_COUNT}px` }}
        >
          {products.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[320px] bg-transparent text-center shrink-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-contain mb-6"
              />
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-black/70 mb-2 max-w-xs">
                {item.description}
              </p>
              <p className="text-base font-semibold mt-2">£{item.price}</p>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition"
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Products;
