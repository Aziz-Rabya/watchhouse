import React from "react";
import ScrollReveal from "./ScrollReveal";

const Story = () => {
  return (
    <section
      className="relative w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-4 mt-20"
      style={{ backgroundImage: 'url("/images/about-quote-image.png")' }}
    >
      <div className="bg-transparent font-serif text-white p-8 rounded-lg max-w-[1000px] mt-20 mb-20">
        <ScrollReveal
          baseOpacity={1}
          enableBlur={false}
          baseRotation={5}
        >
          WatchHouse is a slow take on instant gratification. Thoughtful pours,
          rare flavour profiles and paraphernalia for your daily cup.
        </ScrollReveal>

        <button className="group relative overflow-hidden mt-20 rounded-full px-6 py-2 bg-transparent text-white border border-white font-light uppercase">
          <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0" />
          <span className="relative z-10 group-hover:text-black transition-colors duration-700">
            our Story
          </span>
        </button>
      </div>
    </section>
  );
};

export default Story;
