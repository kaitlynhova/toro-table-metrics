import React from "react";
import * as S from "./TableStyles";
import { Table as TableType } from "../../../Types";
import { useTable } from "../TableHooks";

//TYPES
type TableParams = {
  table: TableType;
};

// COMPONENT
const Table: React.FC<TableParams> = ({ table: tableItem }) => {
  const { columns, table } = tableItem;
  const { cellWidth, metricsDictionary } = useTable({
    table: tableItem,
  }); // Following a View/Controller pattern

  const header = columns.map((column) => {
    const { name } = column;
    return (
      <S.Line cellWidth={cellWidth} key={name}>
        {name}
      </S.Line>
    );
  });

  const tableLineItem = columns.map((column, index) => {
    const { name } = column;
    const columnValue = metricsDictionary[name] ? (
      metricsDictionary[name]
    ) : (
      <S.EmptyValue />
    );
    return (
      <S.Line cellWidth={cellWidth} key={name}>
        {columnValue}
      </S.Line>
    );
  });

  return (
    <S.ContainerOuter>
      <S.Title>{table}</S.Title>
      <S.ContainerInner>{header}</S.ContainerInner>
      <S.LineItem>{tableLineItem}</S.LineItem>
    </S.ContainerOuter>
  );
};

export default Table;
