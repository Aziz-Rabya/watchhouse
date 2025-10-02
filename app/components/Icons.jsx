import React from "react";

const Icons = () => {
  return (
    <div className="flex flex-row mt-58 font-serif bg-[#f4f1df] px-5 py-3 gap-6">
      <img src="\images\man.png" className="w-30 h-40" />
      <div>
        <h2 className="text-2xl">Globally sourced. Locally crafted.</h2>
        <p className="mt-6">
          Cupped, tested, developed and roasted at our Coffee Lab right here in
          South London.
        </p>
      </div>
      <img src="\images\barman.png" className="w-30 h-40" />
      <div>
        <h2 className="text-2xl">Modern Coffee. Holistic approach.</h2>
        <p className="mt-6">
          It encapsulates the attention to detail, creativity, and focus on provenance and quality.
        </p>
      </div>
      <img src="\images\coffee.png" className="w-30 h-40" />
      <div>
        <h2 className="text-2xl">No two Houses the same.</h2>
        <p className="mt-6">
          Each of our locations are designed to play a contemporary role in the Modern Coffee experience.
        </p>
      </div>
    </div>
  );
};

export default Icons;
