"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const Header = () => {
  let [isHidden, setIsHidden] = useState(true);
  function removeHiddenClass() {
    isHidden = !isHidden;
    setIsHidden(isHidden);
  }
  const navbarChildAnimation = {
    hidden: {
      opacity: 0,
      transform: "translate(0px,50px)",
    },
    show: {
      opacity: 1,
      transform: "translate(0px,0px)",
    },
  };
  const navbarParent = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  const containerNavBar = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0,
      },
    },
  };
  const elevatedButtonClass =
    "md:px-4 md:py-1 md:hover:text-white md:hover:bg-slate-800";
  return (
    <motion.div className="text-black" initial="initial" animate="loading">
      <motion.nav className="border-gray-200 ">
        <motion.div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <motion.span className="text-black self-center text-2xl font-semibold whitespace-nowrap ">
            JERRY
          </motion.span>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            onClick={removeHiddenClass}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <motion.div
            className={`${isHidden ? "hidden" : ""} w-full md:block md:w-auto `}
            id="navbar-solid-bg"
            initial="hidden"
            animate="show"
            variants={containerNavBar}
          >
            <motion.ul
              className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent"
              variants={navbarParent}
            >
              <motion.li variants={navbarChildAnimation}>
                <a
                  href="#"
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 ${elevatedButtonClass}`}
                  aria-current="page"
                >
                  About
                </a>
              </motion.li>
              <motion.li variants={navbarChildAnimation}>
                <a
                  href="#"
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 ${elevatedButtonClass}`}
                >
                  Project
                </a>
              </motion.li>
              <motion.li variants={navbarChildAnimation}>
                <a
                  href="#"
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 ${elevatedButtonClass}`}
                >
                  Work
                </a>
              </motion.li>
              <motion.li variants={navbarChildAnimation}>
                <a
                  href="#"
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 ${elevatedButtonClass}`}
                >
                  Contact
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.nav>
    </motion.div>
  );
};
