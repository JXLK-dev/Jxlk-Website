import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export const BackgroundLabel = ({ label }: { label: string }) => {
  const lineAnimation = {
    hidden: { width: "0vw", x: "50vw" },
    show: {
      width: "200%",
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const labelAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 4,
      },
    },
  };
  const [depth, setDepth] = useState(0);
  const [depthName, setDepthName] = useState("Introduction");
  function setDepthNameHandler(name: string) {
    switch (name) {
      case "Introduction":
        setDepth(0);
        break;
      case "About Me":
        setDepth(400);
        break;
      case "Project":
        setDepth(800);
        break;
      case "Experience":
        setDepth(1200);
        break;
      case "Contact":
        setDepth(1600);
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    const scrollHandler = () => {
      const threshold = 10; // Define the threshold number here
      const currentNumber = document.documentElement.scrollTop;
      console.log(currentNumber);
      if (currentNumber < 400) {
        setDepthName("Introduction");
      } else if (currentNumber < 1500) {
        setDepthName("About Me");
      } else if (currentNumber < 2400) {
        setDepthName("Project");
      } else if (currentNumber < 3000) {
        setDepthName("Experience");
      } else {
        setDepthName("Contact");
      }
      /* Calculate the current number based on the event */
    };

    document.addEventListener("scroll", scrollHandler);
  });
  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={container}
      className="fixed -z-0 lg:text-5xl bottom-20 right-10 bg-white inline-block text-transparent bg-clip-text font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
    >
      <AnimatePresence>
        <motion.div
          key={depthName}
          variants={labelAnimation}
          className="text-white"
        >
          {depthName}
        </motion.div>
      </AnimatePresence>
      <motion.div
        variants={lineAnimation}
        className="bg-white h-1 mt-2"
      ></motion.div>
    </motion.div>
  );
};
