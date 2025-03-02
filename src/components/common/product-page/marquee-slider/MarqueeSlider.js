import Marquee from "react-fast-marquee";

const MarqueeSlider = () => {
  return (
    <div className="bg-darkgreen">
      <Marquee
        pauseOnHover
        speed={100}
        className="lg:py-[var(--vw50)] py-[20.5px]"
      >
        {[
          "Fast Acting Formula",
          "NON Drowsy",
          "100% Natural",
          "HELPs TARGET THe root cause",
          "100% paraben free",
          "pure",
          "effective ",
          "Child safe",
        ].flatMap((value, index) => [
          <span
            key={`text-${index}`}
            className="lg:text60 mtext30 fenix font-normal uppercase text-white lg:mx-[var(--vw44)] mx-5"
          >
            {value}
          </span>,

          <span
            key={index}
            className="block lg:size-[var(--vw19)] lg:min-w-[var(--vw19)] size-1.5 min-w-1.5 bg-[#D9D9D9] rounded-full overflow-hidden"
          ></span>,
        ])}
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
