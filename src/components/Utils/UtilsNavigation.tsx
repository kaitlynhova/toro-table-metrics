import { theme } from "../../theme";

/*
 - generateTableColor
*/

// cycles through x available colors in the theme
export const generateTableColor = (index: number | null) => {
  const tableColorsArray = theme.palette.table;
  const color = index
    ? tableColorsArray[index % tableColorsArray.length]
    : tableColorsArray[0];
  return color;
};
