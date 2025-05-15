import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import Table from "./Table";

interface TableOneProps {
  setTableOneData: (data: string[][]) => void;
}

const TableOne: React.FC<TableOneProps> = ({ setTableOneData }) => {
  const [table, setTable] = useState<string[][]>([]);

  useEffect(() => {
    fetch("/Mulah-Assessment/Table_Input.csv")
      .then((res) => res.text())
      .then((csvText) => {
        Papa.parse<string[]>(csvText, {
          header: false,
          complete: (results) => {
            const data = results.data as string[][];
            setTable(data);
            setTableOneData(data);
          },
        });
      })
      .catch((err) => console.error("Failed to load CSV:", err));
  }, []);

  return (
    <div>
      <Table data={table} hasHeader={true} title="Table 1"/>
    </div>
  );
};

export default TableOne;
