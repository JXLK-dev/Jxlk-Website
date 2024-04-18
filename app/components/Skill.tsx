import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface SkillProps {
  label: string;
  icon: any;
}

export const Skill: React.FC<SkillProps> = ({ label, icon }) => {
  return (
    <div className="bg-blue-500 block text-center p-4 rounded-lg m-2 hover:animate-[slowfloating_3s_infinite] hover:shadow-lg border-4">
      <div className="flex justify-center items-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        {icon}
      </div>
      <div className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-4">
        {label}
      </div>
    </div>
  );
};
