"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export const IntroductionSection = () => {
  const image = {
    hidden: {
      opacity: 0,
      transform: "translate(10%,0%)",
    },
    show: {
      opacity: [0, 1, 1, 1],
      transform: "translate(0%,0%)",

      transition: {
        ease: "easeIn",
        delay: 0,
        duration: 1,
      },
    },
  };
  const introParagraph = {
    hidden: {
      opacity: 0,
      transform: "translate(10%,0%)",
    },
    show: {
      opacity: [0, 1, 1, 1],
      transform: "translate(0%,0%)",

      transition: {
        ease: "easeIn",
        delay: 0,
        duration: 1,
      },
    },
  };
  return (
    <div className="text-black pt-32 block w-1/2 m-auto md:w-full md:flex md:justify-center md:items-center">
      <motion.div initial="hidden" animate="show" variants={image}>
        <Image
          className="rounded-full border-[5px] border-black h-[40vh] w-auto m-auto"
          src="/fullface.jpg"
          width={500}
          height={500}
          alt="Profile picture"
        />
      </motion.div>
      <div className="text-justify mt-10 md:w-2/5 md:ml-10">
        <motion.div
          className=""
          initial="hidden"
          animate="show"
          variants={introParagraph}
        >
          <h1 className="text-center md:text-left md:text-4xl">
            Hi there, I&apos;m Jerry
          </h1>
        </motion.div>
        <motion.div initial="hidden" animate="show" variants={introParagraph}>
          <p className="md:text-xl">
            Welcome to my personal website! a final year college student
            pursuing my degree at Bina Nusantara University. As an enthusiastic
            programmer, I&apos;ve dedicated my academic journey to mastering the
            art of software development. With a keen interest in crafting
            efficient and innovative solutions, I am eager to leverage my skills
            and knowledge in real-world scenarios. Feel free to explore my
            portfolio to discover more about my projects and experiences.
            Let&apos;s connect and explore opportunities for collaboration and
            growth!
          </p>
        </motion.div>
      </div>
    </div>
  );
};
