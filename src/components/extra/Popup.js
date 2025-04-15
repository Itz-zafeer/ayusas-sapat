import React from "react";

const Popup = () => {
  return (
    <section className="minfullVh minfullSvh lg:py-[21.151586369vh] py-36 bg-[#9DAD3D] text-white lg:px-[var(--vw20)] px-5 flex justify-center items-center">
      <div className="atlwh_Full top-0 pointer-events-none">
        <img
          src="/images/extra/abstract_bg.jpeg"
          alt="abstract_bg"
          className="atlwh_Full object-cover"
        />
      </div>
      <div className="relative z-[2] lg:w-[65.0694444444vw] w-[93.429%] lg:border-4 border border-white bg-[#FFFFFF1A] lg:rounded-[2.43055555556vw] rounded-[35px] lg:p-[3.33333333333vw] pt-8 pb-12 px-9">
        <span className="underline underline-offset-2 capitalize lg:text-[1.73611111111vw] lg:leading-[1.98888888889vw] block sm:mtext18 text-[14px]">
          Please fil the details below to begin:
        </span>
        <form className="flex flex-col lg:gap-[1.38888888889vw] gap-3 w-full capitalize lg:mt-10 mt-7">
          <div className="w-full lg:h-[3.33333333333vw] h-8 bg-[#EAEAEA] px-2">
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                placeholder="name"
                className="bg-transparent size-full outline-none capitalize placeholder:capitalize text-darkblack placeholder:text-darkblack lg:text-[2.08333333333vw] mtext10"
              />
            </label>
          </div>
          <div className="lg:w-[15.625vw] w-[50%] lg:h-[3.33333333333vw] h-8 bg-[#EAEAEA] px-2">
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                placeholder="Chemist Code"
                className="bg-transparent size-full outline-none capitalize placeholder:capitalize text-darkblack placeholder:text-darkblack lg:text-[2.08333333333vw] mtext10"
              />
            </label>
          </div>

          <div className="flex flex-wrap lg:gap-[2.77777777778vw] gap-8 lg:mt-[1.52777777778vw] lg:mb-[1.11111111111vw] mt-4">
            <label
              htmlFor="female"
              className="flex flex-col lg:gap-4 gap-2.5 items-center text-center text-[16px] cursor-pointer"
            >
              <input
                type="checkbox"
                name="female"
                id="female"
                className="appearance-none size-1.5 lg:size-2.5 rounded-full bg-white border border-white checked:bg-black"
              />
              <span className="mtext10 lg:text-[1.11111111111vw]">FEMALE</span>
            </label>
            <label
              htmlFor="male"
              className="flex flex-col lg:gap-4 gap-2.5 items-center text-center text-[16px] cursor-pointer"
            >
              <input
                type="checkbox"
                name="male"
                id="male"
                className="appearance-none size-1.5 lg:size-2.5 rounded-full bg-white border border-white checked:bg-black"
              />
              <span className="mtext10 lg:text-[1.11111111111vw]">MALE</span>
            </label>
            <label
              htmlFor="others"
              className="flex flex-col lg:gap-4 gap-2.5 items-center text-center text-[16px] cursor-pointer"
            >
              <input
                type="checkbox"
                name="others"
                id="others"
                className="appearance-none size-1.5 lg:size-2.5 rounded-full bg-white border border-white checked:bg-black"
              />
              <span className="mtext10 lg:text-[1.11111111111vw]">OTHERS</span>
            </label>
          </div>

          <div className="flex items-center flex-wrap lg:gap-[2.08333333333vw] gap-4 w-full">
            <div className="lg:w-[11.8055555556vw] w-[47%] lg:h-[3.33333333333vw] h-8 bg-[#EAEAEA] px-2">
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  placeholder="age"
                  className="bg-transparent size-full outline-none capitalize placeholder:capitalize text-darkblack placeholder:text-darkblack lg:text-[2.08333333333vw] mtext10"
                />
              </label>
            </div>
            <div className="lg:w-[28.4027777778vw] w-[79%] lg:h-[3.33333333333vw] h-8 bg-[#EAEAEA] px-2">
              <label htmlFor="name">
                <input
                  type="number"
                  id="name"
                  placeholder="Phone Number"
                  className="bg-transparent size-full outline-none capitalize placeholder:capitalize text-darkblack placeholder:text-darkblack lg:text-[2.08333333333vw] mtext10"
                />
              </label>
            </div>
            <button className="lg:ml-[0.34722222222vw] mt-2 lg:mt-0 bg-white text-darkblack lg:rounded-[var(--vw100)] rounded-3xl lg:text-[1.52777777778vw] lg:leading-[1.66666666667vw] mtext14 capitalize lg:px-[1.73611111111vw] lg:py-[0.48611111111vw] px-5 py-1">
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* <div className="relative z-[2] lg:w-[31.5972222222vw] w-[93.429%] lg:border-4 border border-white bg-[#FFFFFF1A] lg:rounded-[2.43055555556vw] rounded-[35px] lg:py-[3.33333333333vw] lg:px-[2.33333333333vw] pt-8 pb-10 px-7">
        <span className="underline underline-offset-2 capitalize lg:text-[1.38888888889vw] lg:leading-[1.59722222222vw] block sm:mtext18 text-[14px]">
          Please enter the OTP to start recording:
        </span>
        <form className="flex flex-col items-center lg:gap-8 gap-7 w-full capitalize lg:mt-10 mt-7">
          <div className="lg:w-[15.625vw] w-full lg:h-[3.33333333333vw] h-12 bg-[#EAEAEA] px-2">
            <label htmlFor="name">
              <input
                type="number"
                id="name"
                placeholder="OTP"
                className="bg-transparent size-full outline-none capitalize placeholder:capitalize text-darkblack placeholder:text-darkblack lg:text-[2.08333333333vw] mtext20"
              />
            </label>
          </div>
          <button className="bg-darkblack text-white lg:rounded-[var(--vw100)] rounded-3xl lg:text-[1.38888888889vw] lg:leading-[1.59722222222vw] mtext20 capitalize lg:px-[5vw] lg:py-[0.625vw] px-6 py-[7.5px]">
            Record
          </button>
        </form>
      </div> */}
    </section>
  );
};

export default Popup;
