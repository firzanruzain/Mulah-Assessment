import React from "react";

interface TableProps {
  data: (string | number)[][];
  className?: string;
  hasHeader?: boolean; 
  title?: string;
}

const Table: React.FC<TableProps> = ({
  data,
  className = "",
  hasHeader = false,
  title
}) => {
  if (!data.length) {
    return <p className="text-gray-500 italic">No data available.</p>;
  }

  const headerRow = hasHeader ? data[0] : null;
  const bodyRows = hasHeader ? data.slice(1) : data;

  return (
      <div className="overflow-auto px-10 flex flex-col items-center text-center mb-6">
    
      <h2 className="text-xl font-semibold mb-2 text-amber-100">{title}</h2>
      <table
        className={` border-collapse border w-full border-white ${className}`}
      >
        <thead className="bg-gray-200">
          {headerRow && (
            <tr>
              {headerRow.map((cell, idx) => (
                <th
                  key={idx}
                  className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 whitespace-nowrap"
                >
                  {cell}
                </th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {bodyRows.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-gray-800">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border border-gray-300 px-3 py-2 text-sm text-white whitespace-nowrap"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
