import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  const title=['ListrSnap','LantaiKayoe','NLP Toxic Comment Classification'];
  const description=['A mobile application that helps users to create a list of items and share it with others. The app is built using Flutter and Firebase.','A web application that helps users to find the best floor material for their house. The app is built using React and TailwindCSS.','A machine learning project that classifies toxic comments. The project is built using Python and Scikit-learn.']
  return (
    <div className="pt-32 pb-[400px] block w-2/3 m-auto xl:justify-center xl:items-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-bold text-center">
      <motion.div className="text-5xl text-center mb-10">Project</motion.div>
      <div className="grid grid-cols-3">
      {title.map((label,index) => (
        <ProjectCard key ={index} title={label} description={description[index]} index={index} imageSrc="https://via.placeholder.com/150" />
      ))}
      </div>
    </div>
  );
};
