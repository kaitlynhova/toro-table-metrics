import React from "react";
import logo from "../../../media/logo.svg";
import * as S from "./NavigationStyles";
import NavigationTab from "../NavigationTab/NavigationTab";
import { generateTableColor } from "../../Utils";
import { Table } from "../../../Types";

// TYPES
type NavigationProps = {
  setActiveTable: (table: Table) => void;
  tablesArray: Table[];
};

// COMPONENT
const Navigation: React.FC<NavigationProps> = ({
  setActiveTable,
  tablesArray,
}) => {
  const tabs = tablesArray.map((tableItem, index) => {
    const { table } = tableItem;
    return (
      <NavigationTab
        color={generateTableColor(index)}
        key={table}
        onClick={() => {
          setActiveTable(tableItem);
        }}
        title={table}
      />
    );
  });
  return (
    <S.ContainerOuter>
      <S.Tabs>{tabs}</S.Tabs>
      <S.Title>Table Metrics</S.Title>
      <S.Logo src={logo} />
    </S.ContainerOuter>
  );
};

export default Navigation;
