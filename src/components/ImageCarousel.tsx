"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ImageCarousel = () => {
  const [currentImage, setCurentImage] = useState(
    "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1344,c_limit/974f0e9b-37f9-42e3-9e80-95d5cfbe464c/nike-just-do-it.jpg"
  );
  return (
    <div className="w-5/6 sm:block hidden h-full my-10" id="banner">
      <Image
        className=" object-contain w-full h-full"
        src={
          "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1344,c_limit/974f0e9b-37f9-42e3-9e80-95d5cfbe464c/nike-just-do-it.jpg"
        }
        width={1000}
        height={300}
        alt="Banner"
      />
    </div>
  );
};

export default ImageCarousel;
