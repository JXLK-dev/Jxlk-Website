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
        delay: 4,
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
        delay: 4,
        duration: 1,
      },
    },
  };
  return (
    <div className="pt-32 pb-[400px] block w-1/2 m-auto md:w-full md:flex md:justify-center md:items-center">
      <motion.div initial="hidden" animate="show" variants={image}>
        <Image
          className="rounded-full border-[5px] border-black h-[40vh] w-auto m-auto"
          src="/fullface.jpg"
          width={500}
          height={500}
          alt="Profile picture"
        />
      </motion.div>
      <div className="text-justify mt-10 md:w-2/5 md:ml-10 md:pb-10">
        <motion.div
          className=""
          initial="hidden"
          animate="show"
          variants={introParagraph}
        >
          <h1 className="text-center md:text-left md:text-6xl md:pb-3">
            Hi there, I&apos;m Jerry
          </h1>
          <h2 className="text-center md:text-left md:text-4xl md:pb-7 flex">
            I&apos;m a{" "}
            <div className="md:animate-[slowfloating_3s_infinite] w-fit md:ml-5 text-green-500">
              Software Engineer
            </div>
          </h2>
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
        <motion.div
          className="mt-5"
          initial="hidden"
          animate="show"
          variants={introParagraph}
        >
          <a
            href="https://www.github.com/jxlk-dev"
            type="button"
            class="text-white cursor-pointer bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 hover:animate-[slowfloating_3s_infinite] animate-[exitFloating_2s]"
          >
            <svg
              className="w-5 h-5 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clip-rule="evenodd"
              />
            </svg>
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/jerry-developer"
            type="button"
            class="text-black border-2 border-black cursor-pointer bg-white hover:bg-white/90 focus:ring-4 focus:outline-none focus:ring-white/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 hover:animate-[slowfloating_3s_infinite] animate-[exitFloating_2s]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 me-2"
              fill="blue"
              viewBox="0 0 50 50"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
            LinkedIn
          </a>
          <a
            href="mailto:jerrybudiman03@gmail.com"
            type="button"
            class="text-black border-2 border-black cursor-pointer bg-white hover:bg-white/90 focus:ring-4 focus:outline-none focus:ring-white/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 hover:animate-[slowfloating_3s_infinite] animate-[exitFloating_2s]"
          >
            <svg
              class="w-5 h-5 mr-5 text-gray-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
            </svg>
            Contact me
          </a>
        </motion.div>
      </div>
    </div>
  );
};
