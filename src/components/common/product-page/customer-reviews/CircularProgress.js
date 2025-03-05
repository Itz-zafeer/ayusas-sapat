import React from "react";

const CircularProgress = () => {
  return (
    <div className="relative lg:size-[var(--vw102)] size-[74px] flex items-center justify-center">
      {/* Circular Progress */}
      <div
        className="w-full h-full rounded-full bg-gray-200"
        style={{
          background: `conic-gradient(
          #3FAEFF 0deg,   /* Start with Light Blue */
          #218AD6 330deg, /* Smooth transition to Dark Blue */
          #e5e7eb 330deg  /* Gray for Remaining */
        )`,
        }}
      ></div>

      {/* Inner White Circle */}
      <div className="absolute size-[90%] bg-white rounded-full"></div>

      {/* Centered Number */}
      <span className="absolute text-black lg:text-vw38 lg:leading-[var(--vw48)] mtext24 font-bold">
        4.5
      </span>
    </div>
  );
};

export default CircularProgress;
