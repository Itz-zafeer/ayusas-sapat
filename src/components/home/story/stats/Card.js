"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Card = ({ data }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // Animation duration in milliseconds
      const startValue = 0;
      const endValue = data?.title || 0;
      const decimalPlaces = data?.decimal || 0;

      let startTime = null;

      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const value = (
          startValue +
          (endValue - startValue) * percentage
        ).toFixed(decimalPlaces);
        setCurrentValue(value);

        if (percentage < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isVisible, data]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col gap-y-2 items-center text-center text-white lg:p-[var(--vw40)] p-6 w-[50%]"
    >
      <span className="felixti lg:text-vw94 lg:leading-[var(--vw94)] text-[44px] leading-[52px]">
        {currentValue}
        {data.suffix && data.suffix}
      </span>
      <div
        dangerouslySetInnerHTML={{ __html: data.description }}
        className="lg:text22 mtext12"
      ></div>
    </div>
  );
};

export default Card;
