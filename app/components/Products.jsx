"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const CARD_WIDTH = 320;
const GAP = 48;
const ITEM_WIDTH = CARD_WIDTH + GAP;
const VISIBLE_COUNT = 3;
const AUTO_SCROLL_INTERVAL = 5000; // 5 seconds

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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  // Calculate max index based on visible items
  const maxIndex = Math.max(0, products.length - VISIBLE_COUNT);

  const scrollToIndex = useCallback((index) => {
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: clampedIndex * ITEM_WIDTH,
        behavior: "smooth",
      });
    }
    setCurrentIndex(clampedIndex);
  }, [maxIndex]);

  const scrollLeft = useCallback(() => {
    scrollToIndex(currentIndex - 1);
  }, [currentIndex, scrollToIndex]);

  const scrollRight = useCallback(() => {
    scrollToIndex(currentIndex + 1);
  }, [currentIndex, scrollToIndex]);

  // Handle scroll events for better UX
  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / ITEM_WIDTH);
      setCurrentIndex(Math.max(0, Math.min(newIndex, maxIndex)));
    }
  }, [maxIndex]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
      if (currentIndex >= maxIndex) {
        scrollToIndex(0); // Loop back to start
      } else {
        scrollRight();
      }
    }, AUTO_SCROLL_INTERVAL);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying, maxIndex, scrollRight, scrollToIndex]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        scrollLeft();
      } else if (e.key === "ArrowRight") {
        scrollRight();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollLeft, scrollRight]);

  // Initialize scroll position
  useEffect(() => {
    scrollToIndex(0);
  }, [scrollToIndex]);

  return (
    <section className="w-full px-6 md:px-16 py-20 font-serif bg-white relative">
      {/* Header */}
      <div className="flex justify-between items-start mb-14">
        <motion.h2
          className="text-5xl font-semibold text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our favourites.
        </motion.h2>

        <motion.button
          className="border border-black rounded-full px-6 py-2 text-black uppercase text-sm hover:bg-black hover:text-white transition duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Shop Now
        </motion.button>
      </div>

      {/* Carousel */}
      <div 
        className="relative w-full flex justify-center items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={scrollRef}
          className="flex gap-12 overflow-hidden scroll-smooth"
          style={{ width: `${ITEM_WIDTH * VISIBLE_COUNT}px` }}
          onScroll={handleScroll}
        >
          {products.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center w-[320px] bg-transparent text-center shrink-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
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
            </motion.div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={scrollLeft}
          disabled={currentIndex === 0}
          className={`absolute left-0 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          disabled={currentIndex >= maxIndex}
          className={`absolute right-0 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition ${
            currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          →
        </button>
      </div>

      {/* Navigation Dots */}
      {maxIndex > 0 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-black scale-125" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;