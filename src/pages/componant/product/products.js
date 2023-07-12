import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../../Store/productSlice";
import Wrapper from "../layout/Header/wrapper";
import Product from "../Home/ProductCard";
import Loading from "../layout/Loading/loading";
import Pagination from "react-js-pagination";

export default function Products({keyword}) {
  const dispatch = useDispatch();
  
  const products = useSelector((state) => state.products);
  
// yah pagination ke liye hai----------->>>>>>>>
  // const [currentPage, setCurrenctPage] = useState(1);
  // const resultPerPage = products.product.resultperpage;
  // const productCount = products.product.productCount;


  // const setCorrentPageNo = (e) => {
  //   setCurrenctPage(e);
  // };
// <<<<<<<<<<<<<<<<<<<<<<<<<-------------------

  useEffect(() => {
    dispatch(getProductsData(keyword));
  }, [dispatch,keyword]);

  return (
    <div>
      {products.loading ? (
        <Loading />
      ) : (
        <Wrapper>
          <h1 className="font-bold text-center my-[2vmax] m-auto border-b-2 w-[20vmax] p-[1vmax] text-[1.8vmax]">
            Products
          </h1>
          <div className=" flex flex-wrap justify-center">
            {products?.product?.products?.map((pro) => {
              return <Product key={pro._id} product={pro} />;
            })}
          </div>

{/* yah pagination ke liye hai----------->>>>>>>> */}
          {/* <div className="flex justify-center m-[6vmax]">
            <Pagination
              activePage={currentPage}
              itemCountPerPage={resultPerPage}
              totalItemsCount={productCount}
              onChange={setCorrentPageNo}
              nextPageText={"Next"}
              prevPageText={"Prev"}
              firstPageText={"1st"}
              lastPageText={"Last"}
              itemClass={"page-item"}
              linkClass={"page-link"}
              activeClass={"pageItemActive"}
              activeLinkClass={"pageLinkActive"}
            />
          </div> */}
{/* <<<<<<<<<<<<<<<<<<<-------------------------- */}
        </Wrapper>
      )}
    </div>
  );
}
