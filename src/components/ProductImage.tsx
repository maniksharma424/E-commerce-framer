"use client";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Product } from "@/types";
const ProductImage = ({ product }: { product: Product }) => {
  return (
    
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className=" h-fit sm:w-2/5 w-full  flex items-center relative border py-8 px-4 rounded-[10px] shadow-md"
    >
      <Image
        className=" object-contain w-full h-fit "
        src={product.image}
        width={300}
        height={300}
        alt="Banner"
      />
    </motion.div>
  );
};

export default ProductImage;
