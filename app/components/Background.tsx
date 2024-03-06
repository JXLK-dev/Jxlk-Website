"use client";
import React from "react";

export const Background = ({ label }) => {
  return (
    <div className="fixed -z-0 md:text-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-800 dark:bg-gradient-to-r dark:from-indigo-800 dark:to-cyan-800 inline-block text-transparent bg-clip-text font-extrabold opacity-30">
      {label}
    </div>
  );
};
