import React from "react";

const Visit = () => {
  return (
    <section className="bg-[#f8f1e5] px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-16">
      {/* Left Image (Main Location) */}
      <div className="w-full flex justify-center">
        <img
          src="/images/Visit_us_homepage.jpg.jpeg"
          alt="WatchHouse Entrance"
          className="rounded-2xl shadow-xl w-full h-[850px] object-cover"
        />
      </div>

      {/* Right Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">Visit us.</h1>
        <p className="text-gray-800 text-lg max-w-[450px] mx-auto lg:mx-0 leading-relaxed mb-8">
          25 square metres on London’s famous Bermondsey Street was all it took
          to conceive WatchHouse and lay the foundations of everything to come.
        </p>

        {/* Button */}
        <button className="border border-black rounded-full px-6 py-3 uppercase font-medium text-sm transition hover:bg-black hover:text-white">
          Our Locations
        </button>

        {/* Small Secondary Image */}
        <div className="mt-10">
          <img
            src="/images/bermo.jpg.jpeg"
            alt="Bermondsey Street"
            className="rounded-xl shadow-md max-w-[350px] mx-auto lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Visit;
