import { renderHook } from "@testing-library/react-hooks";
import { useTable } from "..";
import { tablesArray } from "./useTablesTestData";

const table = tablesArray[0];
const { result } = renderHook(() => useTable({ table }));

test("should return accurate cellWidth", () => {
  const expectedCellWidth = 100 / table.columns.length;
  expect(result.current.cellWidth).toBe(expectedCellWidth);
});
