"use client";
import Bag from "@/Icons/Bag";
import { Product } from "@/types";
import React, { useState } from "react";
import Minus from "@/Icons/Minus";
import Plus from "@/Icons/Plus";
interface AddToCartProps {
  product: Product;
}
const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const [qty, setQty] = useState(0);

  return (
    <div className="w-full ">
      {qty > 0 ? (
        <button className="lg:w-1/2 w-2/3  flex justify-around mt-5 items-center py-2 text-black border border-black/30">
          <span
            onClick={() => {
              setQty((n) => n - 1);
            }}
          >
            <Minus />
          </span>

          <span className=" font-[500]">{qty}</span>

          <span
            onClick={() => {
              setQty((n) => n + 1);
            }}
          >
            <Plus />
          </span>
        </button>
      ) : (
        <button
          onClick={() => {
            setQty((n) => n + 1);
          }}
          className="lg:w-1/2 w-2/3  flex justify-center mt-5 items-center bg-[#111111] py-2 text-white "
        >
          <span className=" mr-4">
            <Bag />
          </span>

          <span>Add to bag</span>
        </button>
      )}
      <div className=" w-fit flex justify-between items-center lg:text-[16px] lg:leading-5 sm:text-[13px] sm:leading-4 text-[10px] leading-3 mt-5">
        <p>Quantity:</p>
        <p>{qty}</p>
      </div>
    </div>
  );
};

export default AddToCart;
