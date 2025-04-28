import React from "react";
import MarqueeSlider from "../extra/results-page/marquee-slider/MarqueeSlider";
import Score from "../extra/results-page/Score";
import FirstBox from "./FirstBox";
import SecondBox from "./second-box/SecondBox";
import ThirdBox from "./ThirdBox";
import SecondA from "./second-box/SecondA";
import BottomDesktop from "./BottomDesktop";
import { BottomMobile } from "./BottomMobile";

const ResultPage = () => {
  return (
    <>
      <section className="minfullVh minfullSvh lg:pt-[14vh] pt-[18.4615384615vw] lg:pb-[6.66666666667vh] text-white relative flex">
        <div className="atlwh_Full top-0 pointer-events-none overflow-hidden">
          <img
            src="/images/extra/abstract_bg.jpeg"
            alt="abstract_bg"
            className="atlwh_Full object-cover"
          />
          <span className="bg-[#056D3699] atlwh_Full"></span>
        </div>

        <div className="relative z-[2] w-full">
          <MarqueeSlider />
          <div className="lg:w-[89%] w-[86.668%] mx-auto">
            <Score
              score={"LOW"}
              desc={`Time to breathe <span class='text-[#FFDA24]'>better.</span>`}
            />
            {/* <Score
              score={"MEDIUM"}
              desc={`Your lungs need a  <span class='text-[#FFDA24] font-medium italic'>little more support.</span>`}
            /> */}
            {/* <Score
              score={"HIGH"}
              desc={`Your lungs say   <span class='text-[#FFDA24] font-medium italic'>thank you!</span>`}
            /> */}
            {/* <Score
              score={"EXCELLENT"}
              desc={`WOW! That's    <span class='text-[#FFDA24] font-medium italic'>superhuman lung control!</span>`}
            /> */}
            <div className="lg:hidden">
              <SecondA
                secondADesc={`You might need to take some  <span>extra care</span> of your lungs. Don’t worry, we’ve got you covered!`}
                // medium
                // secondADesc={`<span> You’re doing well, </span> <br /> but there’s always room <br /> to get even better!`}
                // high
                // secondADesc={`<span> Your lungs are doing well!</span> <br />  We want to reward you to further support your lung health journey.`}
                // excellent
                // secondADesc={`<span> Are you secretly a yogi?</span> <br />  Your lungs are in great shape & we’ve got a surprise gift for you 🎁`}
              />
            </div>
            <div className="flex justify-between flex-wrap lg:gap-[var(--vw8)] gap-y-[4.61538461538vw] gap-x-[1.02564102564vw] lg:mt-[var(--vw22)] mt-[4.61538461538vw]">
              <FirstBox
                number={"10"}
                unit={"%"}
                // medium
                // number={"50"}
                // unit={"RS."}
                // high
                // excellent
              />
              <SecondBox
                secondADesc={`You might need to take some  <span>extra care</span> of your lungs. Don’t worry, we’ve got you covered!`}
                secondBDesc={`Claim Your Free Guide <br class="hidden lg:block" /> to Breathing Better`}
                thirdBoxDesc={`  Here’s your <span> 10% OFF </span> on <br class="hidden lg:block" /> any Ayusas product`}
                // medium
                // secondADesc={`<span> You’re doing well, </span> <br /> but there’s always room <br /> to get even better!`}
                // secondBDesc={`Strengthen your lungs with these expert approved breathing exercises`}
                // thirdBoxDesc={`get <span> ₹50 OFF </span> on your next Ayusas purchase`}
                // high
                // secondADesc={`<span> Your lungs are doing well!</span> <br />  We want to reward you to further support your lung health journey.`}
                // secondBDesc={`Support your lungs with these expert approved breathing exercises`}
                // thirdBoxDesc={`<span> FREE Ayusas </span> Double Strength Cough Syrup `}
                // excellent
                // secondADesc={`<span> Are you secretly a yogi?</span> <br />  Your lungs are in great shape & we’ve got a surprise gift for you 🎁`}
                // secondBDesc={`Support your lungs with these expert approved breathing exercises`}
              />
              <div className="hidden lg:block">
                <ThirdBox
                  thirdBoxDesc={`  Here’s your <span> 10% OFF </span> on <br class="hidden lg:block" /> any Ayusas product`}
                  // thirdBoxDesc={`get <span> ₹50 OFF </span> on your next Ayusas purchase`}
                  // thirdBoxDesc={`Get a FREE 🎁 </br class='hidden lg:block'> Ayusas Double Strength </br class='hidden lg:block'> Cough Syrup `}
                  // excellent
                />
              </div>
            </div>
          </div>
          <BottomDesktop
          // medium
          // high
          // excellent
          />
          <BottomMobile
          // medium
          // high
          // excellent
          />
        </div>
      </section>
    </>
  );
};

export default ResultPage;
