import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <video
          className="w-full h-full object-cover"
          loop
          autoPlay
          muted
          playsInline
          src="/videos/WatchHouse Modern Coffee .mp4"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center mt-43
       h-full text-white font-serif text-center px-4">
        <h1 className="text-5xl md:text-7xl">Modern Coffee.</h1>
        <p className="mt-6 text-base md:text-lg leading-relaxed">
          Pourers of the world's best coffees and providers of the tools and
          techniques from our <br className="hidden md:block" />
          <span className="block">House to yours.</span>
        </p>
        <button className="group relative overflow-hidden rounded-full px-6 py-2 mt-6 bg-white text-black font-thin uppercase">
          <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0" />
          <span className="relative z-10 group-hover:text-white transition-colors duration-700">
            Shop Now
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
