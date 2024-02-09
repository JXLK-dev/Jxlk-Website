"use client";
import { motion } from "framer-motion";

export const Testing = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemA = {
    hidden: { scale: 0, top: 100 },
    show: { scale: 1, top: 30 },
  };

  const itemB = {
    hidden: { scale: 0, top: 200 },
    show: { scale: 1, top: 80 },
  };

  return (
    <div>
      <motion.ul
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: "red",
          position: "relative",
        }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.li style={{ ...blobStyle, left: 30 }} variants={itemA} />
        <motion.li style={{ ...blobStyle, left: 80 }} variants={itemA} />
        <motion.li style={{ ...blobStyle, left: 30 }} variants={itemB} />
        <motion.li style={{ ...blobStyle, left: 80 }} variants={itemB} />
      </motion.ul>
    </div>
  );
};

const blobStyle: React.CSSProperties = {
  width: 40,
  height: 40,
  borderRadius: 75,
  backgroundColor: "#1d1ef0",
  position: "absolute",
};
