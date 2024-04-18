import React from "react";

interface quoteProps {
  quote: string;
}
export const Quote: React.FC<quoteProps> = ({ quote }) => {
  return (
    <div className="my-60 text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] xl:text-4xl w-1/2 m-auto">
      <p>&quot;{quote}&quot;</p>
    </div>
  );
};
