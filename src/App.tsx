// src/App.tsx
import React, { useState } from "react";
import TableOne from "./components/TableOne";
import TableTwo from "./components/TableTwo";

const App: React.FC = () => {
  const [tableOneData, setTableOneData] = useState<string[][]>([]);

  return (
    <div className="bg-blue-950 flex flex-col">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">CSV Table Render</h1>
      <TableOne setTableOneData={setTableOneData} />
      <TableTwo tableOneData={tableOneData} />
    </div>
  );
};

export default App;
