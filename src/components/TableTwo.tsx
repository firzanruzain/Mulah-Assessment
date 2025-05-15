import React from "react";
import Table from "./Table";

interface TableTwoProps {
  tableOneData: string[][];
}

const TableTwo: React.FC<TableTwoProps> = ({ tableOneData }) => {
  if (!tableOneData.length) return null;

  const parse = (val: string): number => parseFloat(val) || 0;

  const alpha =
    parse(tableOneData[5]?.[1] ?? "") + parse(tableOneData[20]?.[1] ?? "");
  const beta =
    parse(tableOneData[15]?.[1] ?? "") /
    (parse(tableOneData[7]?.[1] ?? "") || 1);
  const charlie =
    parse(tableOneData[13]?.[1] ?? "") * parse(tableOneData[12]?.[1] ?? "");

  const tableData = [
    ["Category", "Value"],
    ["Alpha", alpha],
    ["Beta", beta],
    ["Charlie", charlie],
  ];

  return (
    <div>
      <Table data={tableData} hasHeader title="Table 2"/>
    </div>
  );
};

export default TableTwo;
