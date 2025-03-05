import React from "react";

const Pagination = () => {
  return (
    <div className="product_page_pagination">
      <div className="number active">1</div>
      <div className="number">2</div>
      <div className="number">3</div>
      <div className="flex gap-0.5 items-center cursor-pointer">
        <span className="block size-1.5 min-w-1.5 rounded-full bg-[#D9D9D9]"></span>
        <span className="block size-1.5 min-w-1.5 rounded-full bg-[#D9D9D9]"></span>
        <span className="block size-1.5 min-w-1.5 rounded-full bg-[#D9D9D9]"></span>
        <span className="block size-1.5 min-w-1.5 rounded-full bg-[#D9D9D9]"></span>
      </div>
      <div className="number">11</div>
    </div>
  );
};

export default Pagination;
