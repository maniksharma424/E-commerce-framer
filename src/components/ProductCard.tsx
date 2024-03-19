"use client";
import { Product } from "@/types"; // Assuming Product is the correct type name
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const ref = useRef(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && !hasEnteredView) {
      setHasEnteredView(true);
    }
  }, [isInView, hasEnteredView]);
  const router = useRouter();
  const buttonVariants = {
    hover: {
      background: "linear-gradient(to bottom, black, black)",
      backgroundSize: "100% 200%",
      transition: {
        backgroundPosition: { duration: 0.5 },
      },
    },
  };
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        router.push(`/product/${product.id}`);
      }}
      className=" cursor-pointer sm:w-full w-full h-[400px] border hover:shadow-md rounded-t-[10px] pt-5"
    >
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: hasEnteredView ? 1 : 1.1 }}
        transition={{ delay: 0.3, duration: 0.2 }}
        ref={ref}
        className="w-full h-3/5 sm:px-4"
      >
        <Image
          className="object-contain w-full h-full rounded-t-[15px]"
          src={product.image}
          height={100}
          width={100}
          alt="product"
        />
      </motion.div>
      <div id="info" className="p-3 h-2/5 justify flex flex-col">
        <p className=" lg:text-[13px] lg:leading-4 sm:text-[10px] sm:leading-5 text-[8px] leading-4 text-gray-500 uppercase">
          {product.category}
        </p>
        <p className="lg:text-[18px] lg:leading-5 sm:text-[15px] sm:leading-4 text-[13px] leading-4  my-1 block truncate">
          {product.title}
        </p>
        <p className="lg:text-[14px] lg:leading-4 sm:text-[11px] sm:leading-3 text-[8px] leading-2  text-gray-600 block truncate">
          {product.description}
        </p>
        <p className="lg:text-[18px] lg:leading-5 sm:text-[15px] sm:leading-4 text-[13px] leading-4 font-[800] text-[#2e2c2e] my-2">
          $9.00
        </p>

        <motion.button
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.1 }}
          className=" px-2 py-1 w-full flex justify-center items-center  rounded-[5px] text-[#272727] border  "
        >
          Buy now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
