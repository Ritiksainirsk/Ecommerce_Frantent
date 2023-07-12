import React, { useState } from "react";
import ProductDetailCarousel from "../componant/product/productDetail";
import { useRouter } from "next/router";

import { getProductDetailData } from "@/pages/Store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import Wrapper from "../componant/layout/Header/wrapper";
import ReviewCart from "../componant/product/reviewCart.js";
import Loading from "../componant/layout/Loading/loading";

/// yah swiper ke liye hai----------->>>>>>>
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//<<<<<<<<<<<<<<----------------------

export default function product() {
  // yah url se id ke liye
  const router = useRouter();
  const id = router.query.product;
  //----

  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductDetailData(id));
  }, [dispatch]);

  const productDetail = productData?.productDetail?.product;

  // yah rating stars ke liye hai-----
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: 20,
    value: productDetail?.rating,
    isHalf: true,
  };
  //----------
  return (
    <>
      {productData?.loading ? (
        <Loading />
      ) : (
        <div className="w-full md:py-20">
          <Wrapper>
            <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
              {/* left product start */}
              <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                <ProductDetailCarousel images={productDetail?.images} />;
              </div>
              {/* left product end */}

              {/* Right product start */}
              <div className="md:w-[55%] md:m-auto">
                <div className="w-[100%] flex flex-col justify-evenly items-start">
                  {/* 1 */}
                  <div className="">
                    <p className="text-[rgb(54,54,54)] font-[600] font-sans text-[1.6vmax]">
                      {productDetail?.name}
                    </p>
                    <p className="text-[rgba(54,54,54,0.582)] font-[200] font-sans text-[0.6vmax]]">
                      Product: {productDetail?._id}
                    </p>
                  </div>
                  {/* 2 */}
                  <div className="flex justify-start items-center border-t-[1px] border-b-[1px] border-gray-400 w-[70%] py-[1vmax] my-[1vmax]">
                    <ReactStars {...options} />
                    <span>({productDetail?.numberOfReview} Reviews)</span>
                  </div>
                  {/* 3 */}
                  <div className="w-[70%]">
                    <h1 className="text-[rgba(17,17,17,0.795)] font-[400] text-[1.8vmax] my-[1vmax] font-sans">{`₹${productDetail?.price}`}</h1>
                    <div className="flex items-center">
                      <div>
                        <button className="border-none bg-slate-800 p-[0.5vmax] cursor-pointer text-white transition-all duration-200 hover:bg-slate-900">
                          -
                        </button>
                        <input
                          value={1}
                          type="number"
                          className="border-none text-center p-[0.5vmax] w-[1vmax] h-5 outline-none font-[400] text-[0.8vmax] font-sans text-[rgba(0,0,0,0.74)]"
                        />
                        <button className="border-none bg-slate-800 p-[0.5vmax] cursor-pointer text-white transition-all duration-200 hover:bg-slate-900">
                          +
                        </button>
                      </div>
                      <button className="md:text-[15px] border-none cursor-pointer text-white transition-all duration-300 bg-[tomato] font-[500] font-sans text-[0.9vmax] rounded-[20px] py-[0.5vmax] px-[2vmax] m-[1vmax] outline-none hover:bg-[rgb(197,68,45)]">
                        Add to Cart
                      </button>
                    </div>

                    <p className="border-t-[1px] border-b-[1px] border-gray-400 py-[1vmax] my-[1vmax]">
                      Status:
                      <b
                        className={
                          productDetail?.stock < 1
                            ? "text-red-600"
                            : "text-green-600"
                        }
                      >
                        {productDetail?.stock < 1 ? "outOfSock" : "InStock"}
                      </b>
                    </p>
                  </div>

                  {/* 4 */}

                  <div className="text-[rgba(0,0,0,0.897)] font-[500] font-sans text-[1.7vmax]">
                    Description :{" "}
                    <p className="text-[rgba(0,0,0,0.534)] font-[300] font-sans text-[1.3vmax]">
                      {productDetail?.description}
                    </p>
                  </div>

                  <button className="border-none bg-[tomato] font-[500] font-sans text-[0.7vmax] md:text-[15px] py-[0.6vmax] px-[2vmax] rounded-[20vmax] my-[1vmax] text-white cursor-pointer transition-all duration-300 outline-none hover:bg-[rgb(197,68,45)] hover:scale-x-110 hover:scale-y-110">
                    Submit Review
                  </button>
                </div>
              </div>
              {/* Right product end */}
            </div>

            <div className="font-bold text-center mt-[5vmax] m-auto border-b-2 w-[20vmax] p-[1vmax] text-[1.8vmax]">
              Reviews
            </div>

            {productDetail?.reviews && productDetail?.reviews[0] ? (
              <div className="reviews mt-9">
                <Swiper
                  // install Swiper modules
                  breakpoints={{
                    375: {
                      width: 350,
                      slidesPerView: 1,
                    },
                    576: {
                      width: 696,
                      slidesPerView: 2,
                    },
                    768: {
                      width: 350,
                      slidesPerView: 1,
                    },
                  }}
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                >
                  {productDetail?.reviews &&
                    productDetail?.reviews.map((rev) => {
                      return (
                        <>
                          <SwiperSlide>
                            <ReviewCart review={rev} />
                          </SwiperSlide>
                        </>
                      );
                    })}
                </Swiper>
              </div>
            ) : (
              <div className="mt-[50px] text-center text-[20px]">
                No Reviews yet 🪹
              </div>
            )}
          </Wrapper>
        </div>
      )}
    </>
  );
}
