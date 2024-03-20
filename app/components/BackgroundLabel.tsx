import { motion } from "framer-motion";

export const BackgroundLabel = ({ label }: { label: string }) => {
  const lineAnimation = {
    hidden: { width: "0vw", x: "50vw" },
    show: {
      width: "120%",
      x: 0,
      transition: {
        delay: 6,
        duration: 1,
      },
    },
  };
  const container = {
    hidden: {
      opacity: 0,
      right: "-50px",
    },
    show: {
      opacity: 1,
      right: "40px",
      transition: {
        delay: 6,
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="fixed -z-0 lg:text-5xl bottom-20 bg-white inline-block text-transparent bg-clip-text font-extrabold shadow-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
    >
      {label}
      <motion.div
        variants={lineAnimation}
        className="h-1 bg-white mt-2"
      ></motion.div>
    </motion.div>
  );
};
