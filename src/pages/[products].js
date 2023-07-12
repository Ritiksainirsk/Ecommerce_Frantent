import React, { useEffect } from "react";
import Products from "./componant/product/products";
import { useRouter } from "next/router";

const products = () => {
  
  return (
    <div>
      <Products/>
    </div>
  );
};

export default products;
