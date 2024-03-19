import Locatioon from "@/Icons/Locatioon";
import Plus from "@/Icons/Plus";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="w-full  bg-[#111111] mt-16 h-fit flex flex-col justify-center items-center pt-20 pb-6">
      <div className=" w-5/6 flex sm:flex-row flex-col justify-between items-start">
        <div className=" flex w-full sm:flex-row flex-col justify-start sm:gap-20">
          <ul className=" text-white flex flex-col gap-4">
            <li>FIND A STORE</li>
            <li>BECOME A MEMBER</li>
          </ul>
          <ul className="  text-gray-400 sm:flex flex-col gap-3 hidden">
            <li className=" text-white">HELP</li>
            <li>Get help</li>
            <li>Order status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payment options </li>
          </ul>
          <ul className="  text-gray-400 sm:flex hidden flex-col gap-3">
            <li className=" text-white">COMPANY</li>
            <li>About us</li>
            <li>News</li>
            <li>Carrers</li>
            <li>Investors</li>
            <li>Payment options </li>
          </ul>
          <div className=" w-full sm:hidden flex justify-between items-center text-white py-6  mt-5 border-t border-t-gray-400 ">
            <span>HELP</span>
            <Plus />
          </div>
          <div className=" w-full sm:hidden flex justify-between items-center text-white pb-3  ">
            <span>Company</span>
            <Plus />
          </div>
        </div>
      </div>
      <div className=" w-5/6 flex justify-between items-center text-[12px]">
        <div className=" text-white flex justify-start items-center mt-7">
          <Locatioon />
          <span className=" ml-2">India</span>
          <span className=" ml-2 text-gray-400">
            © 2023 All Rights Reserved
          </span>
        </div>
        <div className="  sm:flex hidden justify-start items-center mt-5  gap-4 text-gray-400">
          <span>Guides</span>
          <span>Terms of sale</span>
          <span>Terms of use</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
