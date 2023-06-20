import React, { Fragment } from "react";
import Wrapper from "../Header/wrapper";
import PlayStore from "../../../../../public/images/playstore.png";
import AppStore from "../../../../../public/images/appstore.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="mt-[10vmax] p-[3vmax] bg-black text-white md:flex md:flex-row items-center md:justify-between flex-col"
    >
      {/* left footer  */}
      <div className="md:w-1/5 flex flex-col items-center text-center border-b-2 mb-4 md:border-b-0 md:mb-0">
        <h4 className="font-bold mb-5">DOWNLOAD OUR APP</h4>
        <p className="">Download App from Android and IOS mobile phone</p>
        <Image src={AppStore} alt="AppStore" className="w-[10vmax] m-[1vmax]" />
        <Image
          src={PlayStore}
          alt="PlayStore"
          className="w-[10vmax] m-[1vmax] mb-9 md:mb-0"
        />
      </div>
      {/* mid footer  */}
      <div className="text-center border-b-2 mb-4 md:border-b-0 md:mb-0">
        <h1 className="text-5xl text-[tomato] font-serif">ECOMMERCE</h1>
        <p className="mt-8 my-[1vmax] mx-auto">
          High Quality is our first priority
        </p>
        <p className="mb-9 md:mb-0">copyright 2023 &copy; Ritiksaini</p>
      </div>
      {/* right footer  */}
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-lg font-serif mb-5">Follow us</h1>
        <Link
          href={"http://instagram.com/ritiksainirs"}
          target="_blank"
          className="hover:text-[#d62976] transition-all duration-500"
        >
          Instagram
        </Link>
        <Link
          href={"http://facebook.com/ritiksaini"}
          target="_blank"
          className="hover:text-[#3b5998] transition-all duration-500"
        >
          Facebook
        </Link>
        <Link
          href={"http://youtube.com"}
          target="_blank"
          className=" hover:text-[#c4302b] transition-all duration-500"
        >
          Youtube
        </Link>
      </div>
      
    </footer>
  );
};

export default Footer;
