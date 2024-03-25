import { motion } from "framer-motion";
import { Skills } from "./Skills";

export const About: React.FC = () => {
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
    <div className="pt-0 pb-[100px] block w-1/2 m-auto xl:w-full xl:justify-center xl:items-center font-bold ">
      <motion.div
        className="m-auto w-1/2 mb-10 xl:py-10 xl:px-10 bg-gradient-to-r from-cyan-800 to-blue-600 rounded-xl hover:shadow-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0)]"
        initial="hidden"
        animate="show"
        variants={introParagraph}
      >
        <div className="text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          About Me
        </div>
        <div className="text-justify text-xl mt-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Welcome to my digital sphere! I&apos;m Jerry, a 20-year-old software
          engineer from the diverse and vibrant landscapes of Indonesia. My
          journey in technology started at BINUS UNIVERSITY, where I honed my
          skills and fueled my passion for computer science, graduating with a
          Bachelor&apos;s degree. This academic adventure wasn&apos;t just about
          gaining knowledge; it was where I learned to innovate, solve problems,
          and prepare myself for the challenges of the tech world.
          <br />
          <br />
          Professionally, I&apos;ve embarked on my career as a Junior Software
          Engineer at WidaTech, an IT consulting company known for pushing the
          boundaries of technology and delivering exceptional solutions to
          clients. Here, I&apos;m not just coding; I&apos;m contributing to a
          team that values creativity and innovation, transforming complex
          problems into elegant, efficient software solutions. Outside the
          office, my life is a tapestry of exploring Indonesia&apos;s natural
          beauty, diving into photography, and embracing the stories and
          experiences that come my way. Join me on this journey as we explore
          the possibilities of technology and the adventures it brings.
        </div>
      </motion.div>
      <Skills />
    </div>
  );
};
