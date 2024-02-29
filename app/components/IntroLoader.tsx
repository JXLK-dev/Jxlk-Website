"use client";
import { motion } from "framer-motion";

export const IntroLoader = () => (
  <motion.div
    className="absolute"
    initial="onLoad"
    animate="loaded"
    variants={{
      onLoad: {
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.5,
        },
      },
      loaded: {
        height: "0vh",
        transition: {
          when: "afterChildren",
          delay: 2,
          duration: 1.5,
        },
      },
    }}
  >
    <motion.h1
      className="left-1/2 absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-white lg:text-8xl text-4xl"
      initial="onLoad"
      animate="loading"
      variants={{
        onLoad: {
          opacity: 0,
        },
        loading: {
          opacity: [0, 1, 1, 1, 0, 0, 0],
          top: ["50%", "40%", "40%", "30%", "0%"],
          transition: {
            duration: 4,
            times: [0, 0.3, 0.4, 0.7, 0.79, 1],
          },
        },
      }}
    >
      Jerry
    </motion.h1>
    <motion.h2
      className="left-1/2 absolute -translate-y-1/2 -translate-x-1/2 text-white lg:text-5xl lg:mt-0 -mt-10 text-xl"
      initial="onLoad"
      animate="loading"
      variants={{
        onLoad: {
          opacity: 0,
        },
        loading: {
          opacity: [0, 0, 1, 1, 0, 0, 0],
          top: ["60%", "50%", "50%", "45%", "0%"],
          transition: {
            duration: 4,
            times: [0, 0.2, 0.5, 0.7, 0.79, 1],
          },
        },
      }}
    >
      Software Engineer
    </motion.h2>
  </motion.div>
);
