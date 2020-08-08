import React from "react";
import { Table } from "../../../Types";

// used to get the initial list of tables and handles all top level tables logic
export const useTables = () => {
  const [tablesArray, setTablesArray] = React.useState<Table[]>([]);
  const [activeTable, setActiveTable] = React.useState<Table | null>(null);
  React.useEffect(() => {
    const url = `https://interview.torodata.io/tables`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data: Table[]) => {
        setTablesArray(data);
        setActiveTable(data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const activeTableIndex = activeTable
    ? tablesArray.findIndex((table: Table) => {
        return table.table === activeTable.table;
      })
    : null;
  return {
    activeTable,
    activeTableIndex,
    setActiveTable,
    tablesArray,
  };
};
