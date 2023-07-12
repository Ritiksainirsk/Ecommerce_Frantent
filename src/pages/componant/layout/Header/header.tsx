import { useState, useEffect } from "react";

import Wrapper from "./wrapper";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import 'animate.css';

function header() {
  const [hiddsearch, sethiddsearch] = useState(false);
  const [HumburgerMenu, setHumburgerMenu] = useState(false);

  // yah scroll ke liye hai--->>>>>>>>>>>>>
  const [show, setShow] = useState("translate-y-[-80px]");
  const [lastScrolly, setLastScroll] = useState(0);

  const NavbarControll = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrolly) {
        setShow("-translate-y-80");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", NavbarControll);
    return () => {
      window.removeEventListener("scroll", NavbarControll);
    };
  }, [lastScrolly]);
  //<<<<<<-------------------

  //---------
  const [keyword, setKeyword] = useState("");
  //<<<<<<<<<<<------

  return (
    <header
      className={`w-full h-[60px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper
        className={`h-[60px] flex justify-between items-center shadow-md`}
      >
        <div
          className="font-bold text-2xl flex items-center gap-2 px-2 animate__swing animate-bounce"
          style={{ color: "#3c0979" }}
        >
          <HiOutlineShoppingBag />
          R&K
        </div>
        <ul className="hidden md:flex gap-5 mt-1">
          <li>
            <Link href={"/"}> Home</Link>
          </li>
          <li>
            <Link href={"/products"}> Products</Link>
          </li>
          <li>
            <Link href={"/about"}> About</Link>
          </li>
          <li>
            <Link href={""}> Contact</Link>
          </li>
        </ul>

        <div className=" flex gap-6 text-[18px] md:text-[22px] mt-1 pr-2">
          <Link href={""}>
            <AiOutlineSearch
              className="cursor-pointer"
              onClick={() => {
                if (hiddsearch == false) {
                  sethiddsearch(true);
                  setHumburgerMenu(false);
                } else {
                  sethiddsearch(false);
                }
              }}
            />
          </Link>
          <RiShoppingBag3Fill />
          <BsFillPersonFill />
          <div className="md:hidden cursor-pointer">
            <GiHamburgerMenu
              onClick={() => {
                if (HumburgerMenu == true) {
                  setHumburgerMenu(false);
                } else {
                  sethiddsearch(false);
                  setHumburgerMenu(true);
                }
              }}
            />
          </div>
        </div>
      </Wrapper>
      {HumburgerMenu && (
        <div
          className={`humburgermenu md:hidden absolute w-full bg-white opacity-[0.8]`}
        >
          <ul className="" onClick={()=>{setHumburgerMenu(false);}}>
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/products"}>
              <li>Products</li>
            </Link>
            <Link href={"/about"}>
            <li>About</li>
            </Link>
            <Link href={"/"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      )}

      {hiddsearch && (
        <form className="w-full h-[50px] absolute top-[60px] left-0 opacity-50 flex">
          <input
            placeholder="Search..."
            className="text-center px-5 py-2 text-black w-full"
            autoFocus
            type="text"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Link href={keyword.trim() !== "" ? `/products/${keyword}` : ""}>
            <input
              type="submit"
              value="Search"
              className="bg-white h-[50px] w-12 flex justify-center items-center cursor-pointer font-bold px-[50px]"
              onClick={()=>{sethiddsearch(false);}}
            />
          </Link>
        </form>
      )}
    </header>
  );
}

export default header;
