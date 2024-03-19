"use client";
import { Product } from "@/types";
import React from "react";
import ProductImage from "./ProductImage";
import AddToCart from "./AddToCart";
import { motion } from "framer-motion";
const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex sm:flex-row  flex-col gap-10 w-full"
    >
      <p className=" text-[20px] leading-8 sm:hidden block">{product.title}</p>
      <ProductImage product={product} />
      <div className=" flex flex-1 flex-col ">
        <p className="lg:text-[20px] lg:leading-8 sm:text-[17px] sm:leading-6 sm:block hidden">
          {product.title}
        </p>
        <p className=" lg:text-[13px] lg:leading-4 sm:text-[10px] sm:leading-5 text-[8px] leading-4 text-gray-500 uppercase mt-2">
          {product.category}
        </p>
        <p className="lg:text-[30px] lg:leading-8 sm:text-[25px] sm:leading-6 text-[20px] leading-5 sm:mt-8 mt-4">
          $9
          <span className=" text-[15px] ml-2 text-gray-700">INC. taxes</span>
        </p>
        <p className=" text-red-600 mt-1">50% OFF with code SHOPEARLY</p>
        <AddToCart product={product} />
        <p className=" lg:text-[20px] lg:leading-8 sm:text-[17px] sm:leading-6 text-[13px] leading-5 font-[600]">
          Product Description
        </p>
        <p className=" lg:text-[13px] lg:leading-4 sm:text-[10px] sm:leading-5 text-[8px] leading-4 text-gray-500 uppercase mt-2">
          {product.description} Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quia, commodi aliquid blanditiis laboriosam dolorem
          nemo possimus excepturi quibusdam eum dignissimos, dolor cum. Cumque
          temporibus tempora est, quasi repellendus voluptatum laborum esse
          minima, laboriosam aspernatur amet. Voluptatum porro dolor pariatur
          natus iste, neque labore, aperiam sapiente omnis rerum, tempore
          aliquam quibusdam?
        </p>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
