"use client";
import React from "react";
import { motion } from "framer-motion";
const TextAnimation = () => {
  const leadingText = "LBJ X LFC".split(" ");
  const secondarytext = "From L.A to Liverpool two icons collide".split(" ");
  return (
    <div className="w-5/6 flex flex-col items-center mb-5 font-mono">
      <p className=" flex items-center">
        {leadingText.map((el, i) => (
          <motion.span
            className={`font-[700] text-[70px] ${el === "X" && "mx-5"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </p>

      <p>
        {secondarytext.map((el, i) => (
          <motion.span
            className={` `}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 9,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </p>
    </div>
  );
};

export default TextAnimation;
