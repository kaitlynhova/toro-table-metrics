import { generateTableColor } from "./UtilsNavigation";
import { theme } from "../../theme";

/*
 - generateTableColor
*/

describe("generateTableColor", () => {
  it("returns a color from the theme", () => {
    expect(generateTableColor(1)).toBe(theme.palette.table[1]);
  });
  it("loops through theme colors when you run out of unique colors", () => {
    const colorsLength = theme.palette.table.length;
    expect(generateTableColor(colorsLength + 1)).toBe(theme.palette.table[1]);
  });
});
