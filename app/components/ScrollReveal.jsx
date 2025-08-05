"use client";
import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  wordAnimationEnd = "bottom bottom"
}) => {
  const containerRef = useRef(null);

  // Split text into span-wrapped words
  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word text-gray-400 opacity-0" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef?.current || window;

    const wordElements = el.querySelectorAll(".word");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scroller,
        start: "top bottom-=20%",
        end: wordAnimationEnd,
        scrub: 2, // Slower scrub for scroll-based animation
      }
    });

    tl.fromTo(
      wordElements,
      {
        y: 40,
        opacity: 0,
        rotateZ: 5,
        scale: 0.95,
        color: "#b0a99b", // gray
      },
      {
        y: 0,
        opacity: 1,
        rotateZ: 0,
        scale: 1,
        color: "#ffffff",
        stagger: 0.25, // Slower stagger between words
        ease: "power3.out",
        duration: 3.5, // Slower animation duration
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [scrollContainerRef, wordAnimationEnd]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p className={`text-[clamp(2rem,3vw,4rem)] leading-[1.5] font-semibold ${textClassName}`}>
        {splitText}
      </p>
    </h2>
  );
};

export default ScrollReveal;
