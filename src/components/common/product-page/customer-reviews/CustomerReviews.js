import React from "react";
import CircularProgress from "./CircularProgress";
import StarRating from "./StarRating";
import ReviewBreakdown from "./ReviewBreakdown";
import LinkBtn from "../../buttons/LinkButton";
import ReviewCards from "./review-cards/ReviewCards";
import Pagination from "./Pagination";

const CustomerReviews = () => {
  return (
    <section className="lg:pb-[var(--vw200)] pb-32">
      <div className="myContainer lg:w-[88.6243386243vw]">
        <h2 className="lg:text60 mtext30 font-bold text-darkblack text-center">
          Customer Reviews
        </h2>
        <div className="flex flex-col lg:mt-[var(--vw100)] mt-8">
          <div className="lg:border-[#DBDBDB] lg:border-b lg:pb-[var(--vw30)] lg:mb-[var(--vw20)]">
            <div className="lg:p-[var(--vw30)] lg:rounded-[var(--vw20)] p-5 rounded-[20px] border-2 border-[#DBDBDB] flex justify-between items-center">
              <div className="flex flex-wrap items-center lg:gap-[var(--vw30)] gap-4">
                <CircularProgress />
                <StarRating />
                <ReviewBreakdown />
              </div>
              <div className="hidden lg:block">
                <LinkBtn
                  text={"Write a review"}
                  link={"/"}
                  fontSizes={"lg:text20 mtext14"}
                  gapping={
                    "lg:py-[var(--vw19)] py-[13px] lg:px-[var(--vw75)] px-[36px]"
                  }
                  colors={"bg-green text-white"}
                />
              </div>
            </div>
          </div>
          <div className="lg:hidden block text-center mt-6">
            <LinkBtn
              text={"Write a review"}
              link={"/"}
              gapping={
                "lg:py-[var(--vw19)] py-[19px] lg:px-[var(--vw75)] px-[36px]"
              }
              colors={"bg-green text-white"}
            />
          </div>
          <ReviewCards />
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
