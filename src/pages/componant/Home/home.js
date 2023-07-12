import Link from "next/link";
import { CgMouse } from "react-icons/cg";
import Product from "./ProductCard";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../layout/Loading/loading";
import { getProductsData } from "@/pages/Store/productSlice";
import MetaData from "../layout/metaData";
import "animate.css";
import Pagination from "react-js-pagination";

function Home() {
  // yah data leke redux me push kar dega useDispatch se or redux se data le bhi aayega useSelect se --->>>>>>

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

//this for the pagination------------
  // const [currentPage, setCurrenctPage] = useState(1);
  // const resultPerPage = products.product.resultperpage;
  // const productCount = products.product.productCount;

  // const setCorrentPageNo = (e) => {
  //   setCurrenctPage(e);
  // };
//<<<<<<<<<<<<<<----------------------
  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  //<<<<<<<<<<<<<<<<<<<<<-----------------------------

  return (
    <>
      <MetaData title={"E-commerce"} />
      {products.Loading ? (
        <Loading />
      ) : (
        <Fragment>
          <div className="h-[100vmin] bg-gradient-to-r from-violet-500 to-fuchsia-500 banner text-center flex flex-col justify-center items-center">
            <p className="font-serif text-[1.5vmax] font-bold animate__animated animate__flip">
              Welcome to Ecommerce
            </p>
            <h1 className="m-[5vmax] font-[600] text-[2.5vmax] font-serif">
              FIND AMAZING PRODUCTS BELOW
            </h1>

            <Link href={"#products"}>
              <button
                onClick={() => {}}
                className="flex items-center bg-white py-[0.5vmax] px-[1.5vmax] rounded-md hover:bg-[#9623b9] hover:text-white transition-all duration-300"
              >
                Scroll <CgMouse />
              </button>
            </Link>
          </div>

          <div
            className="font-bold font-serif text-center mt-[10vmax] m-auto border-b-2 w-[20vmax] p-[1vmax] text-[1.8vmax]"
            id="products"
          >
            Product feature
          </div>
          <div className="flex flex-wrap justify-center m-[2vmax]">
            {products &&
              products?.product?.products?.map((p) => {
                return <Product key={p._id} product={p} />;
              })}
          </div>

{/* //this for the pagination------------ */}
          {/* <div className="flex justify-center m-[6vmax]">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
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
{/* <<<<<<<<<<<<<<<<<<<<<<=------------------------- */}
        </Fragment>
      )}
    </>
  );
}

export default Home;
