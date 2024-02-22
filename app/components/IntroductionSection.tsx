"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export const IntroductionSection = () => {
  return (
    <div className="text-black text-center pt-32">
      <div className="h-fit text-black text-center flex justify-center items-center">
        <motion.div initial="hidden" animate="show">
          <Image
            className="rounded-full border-[5px] border-black h-[40vh] w-auto"
            src="/fullface.jpg"
            width={500}
            height={500}
            alt="Profile picture"
          />
        </motion.div>
        <div>
          <h1 className="text-2xl">Jerry</h1>
        </div>
      </div>
    </div>
  );
};
