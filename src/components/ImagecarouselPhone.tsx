import Image from "next/image";
import React from "react";

const ImagecarouselPhone = () => {
  return (
    <div className="w-5/6 sm:hidden block  h-fit my-10" id="banner">
      <Image
        className=" object-contain w-full h-full"
        src={
          "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_779,c_limit/e3cec619-c740-4b2e-ae2b-035d60290f85/nike-just-do-it.jpg"
        }
        width={500}
        height={300}
        alt="Banner"
      />
    </div>
  );
};

export default ImagecarouselPhone;
