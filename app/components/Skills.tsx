import React, { useState } from "react";

export const Skills: React.FC = () => {
  const [activeButton, setActiveButton] = useState("Languages");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const buttonNames = [
    "Languages",
    "Framework",
    "Content Creation Tools",
    "Development tools",
  ];

  return (
    <div className="flex flex-col items-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0)]">
      <div className="space-x-4">
        {buttonNames.map((buttonName) => (
          <button
            key={buttonName}
            className={`px-4 py-2 rounded hover:animate-bounce ${
              activeButton === buttonName
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>

      {activeButton && (
        <div className="mt-4">
          <p>Displaying content for: {activeButton}</p>
          {/* Add your content here */}
        </div>
      )}
    </div>
  );
};
