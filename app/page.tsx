"use client";
import { IntroLoader } from "../app/components/IntroLoader";
import { Header } from "../app/components/Header";
import { Testing } from "../app/components/Testing";
import { IntroductionSection } from "../app/components/IntroductionSection";
import { Project } from "../app/components/Project";
import { Background } from "../app/components/Background";
import { About } from "../app/components/About";
import { Quote } from "../app/components/Quote";
import { useState } from "react";
export default function Home() {
  const [depthName, setDepthName] = useState("Introduction");
  return (
    <main className="bg-white min-h-screen text-black bg-gradient-to-b dark:from-blue-950 dark:to-cyan-700 dark:text-white">
      <IntroLoader />
      <Background label={depthName} />
      <Header />
      <IntroductionSection />
      <Quote quote="Work Hard In Silenece, Let Your Success Be Your Noise" />
      <About />
      <Project />
      {/* <Background label="Project" /> */}
    </main>
  );
}
