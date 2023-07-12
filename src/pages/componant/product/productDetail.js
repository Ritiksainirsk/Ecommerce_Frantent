import React from "react";
// import Carousel from "react-material-ui-carousel";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function ProductDetailCarousel({ images }) {
  return (
    <>
      <div className=" text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
        <Carousel
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          thumbWidth={60}
          className="productCarousel"
        >
          {images?.map((img) => {
            return <img src={img.Url} key={img.Url} />
          })}
        </Carousel>
      </div>
    </>
  )
}
