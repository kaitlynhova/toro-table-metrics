import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation/Navigation";
import TableArea from "./components/Table/TableArea/TableArea";
import * as S from "./AppStyles";
import { generateTableColor } from "./components/Utils";
import { useTables } from "./components/Table/TableHooks";

function App() {
  const {
    tablesArray,
    activeTable,
    setActiveTable,
    activeTableIndex,
  } = useTables(); // Following a View/Controller pattern

  let activeTableColor = generateTableColor(activeTableIndex);

  return (
    <S.ContainerOuter>
      <Navigation setActiveTable={setActiveTable} tablesArray={tablesArray} />
      {activeTable && (
        <TableArea color={activeTableColor} table={activeTable} />
      )}
    </S.ContainerOuter>
  );
}

export default App;
