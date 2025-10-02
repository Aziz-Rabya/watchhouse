import React from "react";

const Top = () => {
  return (
    <div className="flex items-center justify-center bg-black p-2">
      <a
        href="#"
        className="text-white font-serif relative inline-block
        after:content-[''] after:absolute after:bottom-0 after:left-1/2
        after:translate-x-[-50%] after:h-[2px] after:w-0
        after:bg-white after:transition-all after:duration-700
        hover:after:w-full"
      >
        Subscribe and save 10%, with free UK shipping
      </a>
    </div>
  );
};

export default Top;
