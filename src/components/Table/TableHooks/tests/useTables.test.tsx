import { renderHook, act } from "@testing-library/react-hooks";
import { useTables } from "..";
import { tablesArray } from "./useTablesTestData";

test("should update active table", () => {
  const { result } = renderHook(() => useTables());

  // Set active table to table 0
  let newActiveTable = tablesArray[0];

  act(() => {
    result.current.setActiveTable(newActiveTable);
  });

  expect(result.current.activeTable).toBe(newActiveTable);

  // Reset active table to table 1
  newActiveTable = tablesArray[1];
  act(() => {
    result.current.setActiveTable(newActiveTable);
  });
  expect(result.current.activeTable).toBe(newActiveTable);
});
