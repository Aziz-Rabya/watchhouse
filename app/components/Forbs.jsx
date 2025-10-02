import React from "react";
import InfiniteLoop from "./InfiniteLoop";

const items = [
  {
    icon: "/images/66.png",
    text: "“WatchHouse have placed a focus on sourcing the best quality coffee, as fairly and sustainably as possible.”"
  },
  {
    icon: "/images/kdfjgrhg.png",
    text: '"Best Independent Coffee Shop - Europe"'
  },
  {
    icon: "/images/vogue_test.png",
    text: "“The food at every one of its locations is excellent.”"
  },
  {
    icon: "/images/wb.png",
    text: "“WatchHouse’s well-crafted coffee might just tip into the bucket of essentialism.”"
  },
];

const Forbs = () => {
  return (
    <div className="my-20 px-4 md:px-10">
      <InfiniteLoop items={items} speed={50} />
    </div>
  );
};

export default Forbs;
