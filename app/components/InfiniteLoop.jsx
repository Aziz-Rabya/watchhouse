"use client";
import { useRef, useLayoutEffect, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import "../globals.css";

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (ref.current) setWidth(ref.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

const InfiniteLoop = ({
  items = [],
  speed = 30,
  numCopies = 2,
  containerClassName = "parallax",
  scrollerClassName = "scroller",
  parallaxStyle = {},
  scrollerStyle = {},
}) => {
  const baseX = useMotionValue(0);
  const ref = useRef(null);
  const width = useElementWidth(ref);

  const wrap = (min, max, v) => {
    const range = max - min;
    return ((((v - min) % range) + range) % range) + min;
  };

  const x = useTransform(baseX, (v) => `${wrap(-width, 0, v)}px`);

  useAnimationFrame((_, delta) => {
    const moveBy = (speed * delta) / 1000;
    baseX.set(baseX.get() - moveBy);
  });

  const renderedItems = [];
  for (let i = 0; i < numCopies; i++) {
    renderedItems.push(
      <div className="scroller-row" key={i} ref={i === 0 ? ref : null}>
        {items.map((item, idx) => (
          <div key={idx} className="scroller-card">
            {item.icon && (
              <img src={item.icon} alt={`icon-${idx}`} className="scroller-icon" />
            )}
            {item.text && (
              <p className="scroller-text">{item.text}</p>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`${containerClassName}`} style={parallaxStyle}>
      <motion.div className={`${scrollerClassName}`} style={{ x, ...scrollerStyle }}>
        {renderedItems}
      </motion.div>
    </div>
  );
};

export default InfiniteLoop;
