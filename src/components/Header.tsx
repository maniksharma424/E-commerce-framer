import Bag from "@/Icons/Bag";
import Heart from "@/Icons/Heart";
import Logo from "@/Icons/Logo";
import Search from "@/Icons/Search";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="w-full flex justify-center lg:py-[20px] h-[100px] sticky top-0 bg-white z-50 lg:h-fit">
      <div className="w-5/6 flex justify-center items-center relative sm:border-b-0 border-b">
        <Link href={"/all-products"} className=" absolute left-0">
          <Logo />
        </Link>
        <ul className=" lg:flex justify-start sm:gap-10 gap-5 items-center hidden">
          <li
            className={`border-b-[2px] hover:border-black border-white cursor-pointer`}
          >
            New & featured
          </li>
          <li
            className={`border-b-[2px] hover:border-black border-white cursor-pointer`}
          >
            Mens
          </li>
          <li
            className={`border-b-[2px] hover:border-black border-white cursor-pointer`}
          >
            Womens
          </li>
          <li
            className={`border-b-[2px] hover:border-black border-white cursor-pointer`}
          >
            Kids
          </li>
          <li
            className={`border-b-[2px] hover:border-black border-white cursor-pointer`}
          >
            Sale
          </li>
        </ul>
        <div className=" absolute right-0 flex items-center">
          <div className=" sm:flex hidden justify-start border rounded-[15px] bg-gray-100  pl-3 sm:pr-12 pr-6 py-1">
            <Search />
            <p className=" ml-2 text-gray-400">Search</p>
          </div>
          <div className=" flex justify-start items-center ml-10">
            <Heart />
            <span className=" ml-5">
              <Bag />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
