import Image from "next/image";
import React from "react";

const Location = () => {
  return (
    <section className="lg:py-[var(--vw127)] py-[69px] relative">
      <div className="atlwh_Full pointer-events-none">
        <Image
          fill
          alt="map"
          src={"/images/home/location/map.jpg"}
          className="object-cover"
        />
      </div>
      <div className="relative z-[2] flex flex-col items-center lg:w-[57.3412698413vw] w-[89.744%] mx-auto text-center">
        <h2 className="text50 text-[#286746]">
          Wellness is Closer Than You Think. Find Your Nearest Ayusas Store!
        </h2>
        <div className="flex flex-col items-center text-center lg:w-[48.082010582vw] w-[87.708%] mx-auto lg:mt-[var(--vw76)] mt-20">
          <span className="text-darkblack font-medium lg:text30 mtext18">
            Find your nearest store
          </span>
          <div className="w-full lg:mt-[var(--vw20)] mt-4 lg:h-[var(--vw69)] h-10 lg:rounded-[var(--vw50)] rounded-[20px] bg-white border border-[rgba(5,109,54,0.38)] focus-within:border-darkblack lg:px-[var(--vw30)] px-[15px] flex justify-between gap-2 items-center">
            <label htmlFor="search" className="size-full">
              <input
                id="search"
                type="text"
                placeholder="City/Town/Pincode"
                className="placeholder:text-c818080 text-darkblack lg:text22 mtext12 font-medium outline-none bg-transparent size-full"
              />
            </label>
            <div className="relative lg:size-[var(--vw41)] lg:min-w-[var(--vw41)] size-[22px] min-w-[22px]">
              <Image
                fill
                alt="search"
                src={"/images/icons/location_search.svg"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
