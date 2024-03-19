"use client";
import RightChevron from "@/Icons/RightChevron";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Product } from "@/types";
const Move = ({ id }: { id: string }) => {
  const [data, setData] = useState<Product[]>([]);

  const router = useRouter();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const getData = async () => {
      const res = await fetch("https://fakestoreapi.com/products", { signal });

      if (!res.ok) {
        console.error("Failed to fetch data");
        return;
      }

      const data = await res.json();
      setData(data);
    };
    getData().catch((error) => {
      if (error.name === "AbortError") {
        return;
      } else {
        console.error("Error fetching data:", error);
      }
    });

    return () => {
      abortController.abort();
    };
  }, []);

  const handleNextProduct = () => {
    const currentIndex = data.findIndex(
      (item: Product) => item?.id === parseInt(id)
    );
    if (currentIndex === data.length - 1) {
      router.push(`/product/${data[0]?.id}`);
    } else {
      const nextIndex = (currentIndex + 1) % data.length;
      const nextProductId = data[nextIndex]?.id;
      router.push(`/product/${nextProductId}`);
    }
  };

  const handlePreviousProduct = () => {
    const currentIndex = data.findIndex(
      (item: Product) => item?.id === parseInt(id)
    );
    if (currentIndex === 0) {
      router.push(`/product/${data[data.length - 1].id}`);
    } else {
      const previousIndex =
        currentIndex === 0 ? data.length - 1 : currentIndex - 1;
      const previousProductId = data[previousIndex]?.id;
      router.push(`/product/${previousProductId}`);
    }
  };
  return (
    <div className=" w-full absolute  sm:flex hidden justify-between top-1/2 left-0 px-3">
      {data && id && (
        <>
          <motion.button
            initial={{ rotate: 180 }}
            onClick={handlePreviousProduct}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" p-2 border rounded-full  shadow-sm"
          >
            <RightChevron />
          </motion.button>
          <motion.button
            onClick={handleNextProduct}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" p-2 border rounded-full shadow-sm"
          >
            <RightChevron />
          </motion.button>
        </>
      )}
    </div>
  );
};

export default Move;
