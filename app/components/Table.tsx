import React from "react";

interface Box {
  id: number;
  content: string;
}

interface TableProps {
  boxes: Box[];
  columns: number;
}

const Table: React.FC<TableProps> = ({ boxes, columns }) => {
  return (
    <div className="grid grid-cols-{{columns}} gap-4">
      {boxes.map((box) => (
        <div key={box.id} className="bg-gray-200 p-4">
          {box.content}
        </div>
      ))}
    </div>
  );
};

export default Table;
