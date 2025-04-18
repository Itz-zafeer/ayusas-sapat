import Marquee from "react-fast-marquee";

const MarqueeSlider = () => {
  return (
    <div className="lg:mt-[1.88888888889vh] mt-[2.30769230769vw]">
      <Marquee
        pauseOnHover
        speed={100}
        className="lg:py-[0.61111111111vh] py-[0.76923076923vw] bg-white"
      >
        <span className="lg:text-[2.22222222222vh] lg:leading-[2.22222222222vh] text-[3.58974358974vw] leading-[3.58974358974vw] tracking-[0.07179487179vw] lg:tracking-[0.04444444444vw] font-medium text-[#428C3C]">
          Upto 10% OFF | Win Exciting Offers | EXCLUSIVE Breathing Guide Acccess
          | Upto 10% OFF | Win Exciting Offers | EXCLUSIVE Breathing Guide
          Acccess | Upto 10% OFF | Win Exciting Offers | EXCLUSIVE Breathing
          Guide Acccess | Upto 10% OFF | Win Exciting Offers | EXCLUSIVE
          Breathing Guide Acccess{" "}
        </span>
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
