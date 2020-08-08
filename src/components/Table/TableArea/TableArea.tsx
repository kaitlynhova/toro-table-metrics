import React from "react";
import * as S from "./TableAreaStyles";
import Table from "../Table/Table";
import { Table as TableType } from "../../../Types";

// TYPES
type TableParams = {
  color: string;
  table: TableType;
};

//COMPONENT
const TableArea: React.FC<TableParams> = ({ color, table }) => {
  return (
    <S.ContainerOuter color={color}>
      <S.ContainerInner>
        <Table table={table} />
      </S.ContainerInner>
    </S.ContainerOuter>
  );
};

export default TableArea;
