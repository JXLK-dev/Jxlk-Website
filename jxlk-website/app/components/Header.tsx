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
    },
    show: {
      opacity: 1,
    },
  };
  const navbarParent = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  const containerNavBar = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 4,
      },
    },
  };
  return (
    <motion.div
      className="text-black"
      initial="initial"
      animate="loading"
      // variants={{
      //   initial: {
      //     opacity: 0,
      //   },
      //   loading: {
      //     opacity: 1,
      //     transition: {
      //       delay: 4,
      //     },
      //   },
      // }}
    >
      <motion.nav className="border-gray-200 ">
        <motion.div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="text-black self-center text-2xl font-semibold whitespace-nowrap ">
            JERRY
          </span>
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
            className={`${isHidden ? "hidden" : ""} w-full md:block md:w-auto`}
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
                  className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:md:"
                  aria-current="page"
                >
                  Home
                </a>
              </motion.li>
              <motion.li variants={navbarChildAnimation}>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:"
                >
                  Services
                </a>
              </motion.li>
              <motion.li variants={navbarChildAnimation}>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:"
                >
                  Pricing
                </a>
              </motion.li>
              <motion.li variants={navbarChildAnimation}>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:"
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
