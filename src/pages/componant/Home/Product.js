import React from "react";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";


function Product( {product} ) {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: 20,
    value: product.rating,
    isHalf: true,
  };
  return (
    <Link
      href={`/product/${product._id}`}
      className="w-[15vmax] flex flex-col no-underline text-[rgb(48,48,48)] m-[2vmax] transition-all duration-500 hover:shadow-lg hover:-translate-y-[1vmax]"
    >
      <img
        src={product?.images?.[0]?.Url}
        alt={product.name}
        className="w-[15vmax]"
      />
      <p className="text-[1.3vmax] mx-[1vmax] my-[0.5vmax] mb-0 font-bold">
        {product.name}
      </p>
      <div className="m-[0.5vmax] md:flex md:justify-start mde:items-center md:gap-3">
        <ReactStars {...options} />
        <span className="font-bold text-[1vmax] md:mt-2">({product.numberOfReview})</span>
      </div>
      <span className="m-[0.5vmax] text-[tomato] text-[1vmax] font-bold">
        ₹{product.price}
      </span>
    </Link>
  );
}

export default Product;
