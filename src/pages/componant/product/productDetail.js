import { getProductDetailData } from "@/pages/Store/productSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
// import Carousel from "react-material-ui-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProductDetail({ id }) {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: 20,
    value: 2,
    isHalf: true,
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const dispatch = useDispatch();

  const productData = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductDetailData(id));
    console.log(productData);
  }, [dispatch]);

  const productDetail = productData?.productDetail?.product;
  return (
    <>
      {/* <div className="w-[100vw] px-[6vmax] box-border md:flex">
        <div className="md:w-full flex justify-evenly items-center p-[2vmax] box-border">
          <Carousel responsive={responsive}>
            {productDetail?.images &&
              productDetail?.images?.map((item, index) => {
                return (
                  <img
                    className=""
                    src={item.Url}
                    key={item.Url}
                    alt={`${index} slide`}
                  />
                );
              })}
          </Carousel>
        </div> */}

      {/* <div className="w-[100%] flex flex-col justify-evenly items-start p-[2vmax] box-border"> */}
      {/* 1 */}
      {/* <div className="">
            <p className="text-[rgb(54,54,54)] font-[600] font-sans text-[1.6vmax]">{productDetail?.name}</p>
            <p className="text-[rgba(54,54,54,0.582)] font-[200] font-sans text-[0.6vmax]]">Product: {productDetail?._id}</p>
          </div> */}
      {/* 2 */}
      {/* <div className="flex justify-start items-center border-t-[1px] border-b-[1px] border-gray-400 w-[70%] py-[1vmax] my-[1vmax]">
            <ReactStars {...options} />
            <span>({productDetail?.numberOfReview} Reviews)</span>
          </div> */}
      {/* 3 */}
      {/* <div className="w-[70%]">
            <h1 className="text-[rgba(17,17,17,0.795)] font-[400] text-[1.8vmax] my-[1vmax] font-sans">{`₹${productDetail?.price}`}</h1>
            <div className="flex items-center">
              <div>
                <button className="border-none bg-slate-800 p-[0.5vmax] cursor-pointer text-white transition-all duration-200 hover:bg-slate-900">-</button>
                <input value={1} type="number" className="border-none text-center p-[0.5vmax] w-[1vmax] h-5 outline-none font-[400] text-[0.8vmax] font-sans text-[rgba(0,0,0,0.74)]"/>
                <button className="border-none bg-slate-800 p-[0.5vmax] cursor-pointer text-white transition-all duration-200 hover:bg-slate-900">+</button>
              </div>
              <button className="border-none cursor-pointer text-white transition-all duration-300 bg-[tomato] font-[500] font-sans text-[0.9vmax] rounded-[20px] py-[0.5vmax] px-[2vmax] m-[1vmax] outline-none hover:bg-[rgb(197,68,45)]">Add to Cart</button>
            </div>

            <p className="border-t-[1px] border-b-[1px] border-gray-400 py-[1vmax] my-[1vmax]">
              Status:
              <b
                className={
                  productDetail?.stock < 1 ? "text-red-600" : "text-green-600"
                }
              >
                {productDetail?.stock < 1 ? "outOfSock" : "InStock"}
              </b>
            </p>
          </div> */}

      {/* 4 */}

      {/* <div className="text-[rgba(0,0,0,0.897)] font-[500] font-sans text-[1.7vmax]">
            Description : <p className="text-[rgba(0,0,0,0.534)] font-[300] font-sans text-[1.3vmax]">{productDetail?.description}</p>
          </div>

          <button className="border-none bg-[tomato] font-[500] font-sans text-[0.7vmax] py-[0.6vmax] px-[2vmax] rounded-[20vmax] my-[1vmax] text-white cursor-pointer transition-all duration-300 outline-none hover:bg-[rgb(197,68,45)] hover:scale-x-110 hover:scale-y-110">Submit Review</button>
        </div>
      </div> */}

      <div className="">
        <Carousel
          responsive={responsive}
          >
          <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1862801/2018/2/9/11518155061506-Roadster-Men-Maroon--Navy-Blue-Regular-Fit-Checked-Casual-Shirt-8861518155061131-1.jpg" />
          <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1862801/2018/2/9/11518155061506-Roadster-Men-Maroon--Navy-Blue-Regular-Fit-Checked-Casual-Shirt-8861518155061131-1.jpg" />
          <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1862801/2018/2/9/11518155061506-Roadster-Men-Maroon--Navy-Blue-Regular-Fit-Checked-Casual-Shirt-8861518155061131-1.jpg" />
          <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1862801/2018/2/9/11518155061506-Roadster-Men-Maroon--Navy-Blue-Regular-Fit-Checked-Casual-Shirt-8861518155061131-1.jpg" />
          <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1862801/2018/2/9/11518155061506-Roadster-Men-Maroon--Navy-Blue-Regular-Fit-Checked-Casual-Shirt-8861518155061131-1.jpg" />
          <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1862801/2018/2/9/11518155061506-Roadster-Men-Maroon--Navy-Blue-Regular-Fit-Checked-Casual-Shirt-8861518155061131-1.jpg" />
          <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1862801/2018/2/9/11518155061506-Roadster-Men-Maroon--Navy-Blue-Regular-Fit-Checked-Casual-Shirt-8861518155061131-1.jpg" />
        </Carousel>
      </div>
    </>
  );
}
