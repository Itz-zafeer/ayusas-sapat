import React from "react";

const Popup = () => {
  return (
    <section className="minfullVh minfullSvh lg:py-[21.151586369vh] py-36 bg-[#9DAD3D] text-white lg:px-[var(--vw20)] px-5 flex justify-center items-center">
      <div className="atlwh_Full lg:top-[11.3333333333vh] top-[8%] pointer-events-none">
        <img
          src="/images/extra/leaf.png"
          alt="leaf"
          className="absolute left-0 top-0 lg:w-[32vh] w-[30%]"
        />
        <img
          src="/images/extra/leaf.png"
          alt="leaf"
          className="absolute right-0 top-0 lg:w-[32vh] w-[30%] -scale-x-100"
        />
      </div>
      <div className="relative z-[2] lg:w-[66.3888888889vw] border-4 border-[rgba(255,255,255,0.10)] lg:rounded-[2.43055555556vw] lg:p-[4.16666666667vw] px-5 py-10">
        <span className="underline capitalize lg:text-[1.38888888889vw] lg:leading-[1.98888888889vw] block mt-3">
          Please fil the details below to begin:
        </span>
        <form className="flex flex-wrap lg:gap-6 gap-4 w-full capitalize lg:mt-10 mt-8">
          <div className="w-full lg:h-[3.33333333333vw] h-8 bg-[#EAEAEA] px-2">
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                placeholder="name"
                className="bg-transparent size-full outline-none capitalize placeholder:capitalize text-green placeholder:text-white lg:text-[2.08333333333vw] mtext18"
              />
            </label>
          </div>
          <div className="w-full lg:h-[3.33333333333vw] h-8 bg-[#EAEAEA] px-2">
            <label htmlFor="name">
              <input
                type="number"
                id="name"
                placeholder="Phone Number"
                className="bg-transparent size-full outline-none capitalize placeholder:capitalize text-green placeholder:text-white lg:text-[2.08333333333vw] mtext18"
              />
            </label>
          </div>
          <div className="flex flex-wrap lg:gap-6 gap-4 w-full">
            <div className="flex flex-col items-start lg:w-[15.625vw] w-[50%]">
              <div className="lg:h-[3.33333333333vw] h-8 bg-[#EAEAEA] px-2">
                <label htmlFor="name">
                  <input
                    type="number"
                    id="name"
                    placeholder="OTP"
                    className="bg-transparent size-full outline-none capitalize placeholder:capitalize text-green placeholder:text-white lg:text-[2.08333333333vw] mtext18"
                  />
                </label>
              </div>
              <button className="underline capitalize lg:text-[1.38888888889vw] lg:leading-[1.98888888889vw] mt-1">
                Resend:
              </button>
            </div>
            <button className="bg-darkblack lg:rounded-[var(--vw100)] rounded-3xl text-white lg:text-[1.38888888889vw] lg:leading-[1.38888888889vw] mtext16 capitalize lg:px-7 lg:py-[10.5px] px-5 py-2 lg:mt-2 mb-auto">
              Submit
            </button>
          </div>
          <div className="lg:w-[15.625vw] w-[50%] lg:h-[3.33333333333vw] h-8 bg-[#EAEAEA] px-2">
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                placeholder="Chemist Code"
                className="bg-transparent size-full outline-none capitalize placeholder:capitalize text-green placeholder:text-white lg:text-[2.08333333333vw] mtext18"
              />
            </label>
          </div>
          <div className="flex items-start flex-wrap lg:gap-[4.58333333333vw] gap-4 w-full">
            <div className="flex flex-wrap lg:gap-[2.77777777778vw] gap-8 mt-1.5">
              <label
                htmlFor="female"
                className="flex flex-col gap-4 items-center text-center text-[16px] cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="female"
                  id="female"
                  className="appearance-none size-2.5 rounded-full bg-white border border-white checked:bg-black"
                />
                <span>FEMALE</span>
              </label>
              <label
                htmlFor="male"
                className="flex flex-col gap-4 items-center text-center text-[16px] cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="male"
                  id="male"
                  className="appearance-none size-2.5 rounded-full bg-white border border-white checked:bg-black"
                />
                <span>MALE</span>
              </label>
              <label
                htmlFor="others"
                className="flex flex-col gap-4 items-center text-center text-[16px] cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="others"
                  id="others"
                  className="appearance-none size-2.5 rounded-full bg-white border border-white checked:bg-black"
                />
                <span>OTHERS</span>
              </label>
            </div>
            <div className="lg:w-[11.8055555556vw] w-[50%] lg:h-[3.33333333333vw] h-8 bg-[#EAEAEA] px-2">
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  placeholder="age"
                  className="bg-transparent size-full outline-none capitalize placeholder:capitalize text-green placeholder:text-white lg:text-[2.08333333333vw] mtext18"
                />
              </label>
            </div>
            <button className="lg:ml-[0.97222222222vw] bg-white lg:rounded-[var(--vw100)] rounded-3xl text-darkblack lg:text-[2.88888888889vh] lg:leading-[3.44444444444vh] mtext16 capitalize lg:px-[5.33333333333vh] lg:py-[1.5vh] px-6 py-2">
              Start your test
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Popup;
