import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description }) => {
    const variant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variant}
            transition={{ duration: 0.3 }}
            className="m-4 text-white cursor-pointer bg-gradient-to-b from-cyan-600 to-blue-600 p-4 rounded-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:-translate-y-10 transition"
        >
            <motion.img src={imageSrc} alt={title} className="w-full rounded-xl" />
            <motion.h3 className="text-xl font-bold mt-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{title}</motion.h3>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variant}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-justify drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                >
                    {description}
                </motion.p>
        </motion.div>
    );
};

