// "use client"
import { citiess } from "@/app/data/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import HighlightCard from "./HighlightCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const CustomLeftArrow = ({ onClick }: any) => {
  return (
    <button
      className="absolute -left-16  w-8 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full z-50 "
      onClick={onClick}
      aria-label="Previous Slide"
    >
      ←
    </button> 
  );
};

const CustomRightArrow = ({ onClick }: any) => {
  return (
    <button
      className="absolute right-0  w-8 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full  z-50"
      onClick={onClick}
      aria-label="Next Slide"
    >
      →
    </button>
  );
};
const Highlightslider = () => {
  return (
    <Carousel
    arrows={true}
    autoPlay={true}
    autoPlaySpeed={5000}
    infinite
    responsive={responsive}
    showDots={false}
    customLeftArrow={<CustomLeftArrow />}
    customRightArrow={<CustomRightArrow />}
    dotListClass="custom-dot-list-style"
    containerClass="space-x-16" // Add spacing between cards
    itemClass="px-1" // Add padding around individual cards
    >
      {citiess.map((city) => {
        return (
          <div key={city.id}>
            {/* citycard */}
            <HighlightCard city={city} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Highlightslider;
