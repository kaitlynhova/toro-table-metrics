import styled from "styled-components";
import { theme } from "../../../theme";

// CONTAINERS
export const ContainerOuter = styled.div`
  color: ${theme.palette.background};
`;
export const ContainerInner = styled.div`
  display: flex;
`;

// LINE
type LineProps = {
  cellWidth: number;
};

export const Line = styled.div<LineProps>`
  align-items: center;
  display: flex;
  font-weight: bold;
  height: 25px;
  padding: 16px;
  width: ${(p) => `${p.cellWidth}%`};
  word-break: break-all;
`;

export const LineItem = styled.div`
  background: ${theme.palette.background};
  color: ${theme.palette.text.table};
  display: flex;
  & > p {
    padding: 0;
  }
`;

export const Title = styled.div`
  color: ${theme.palette.text.paragraph};
  font-size: 30px;
  font-weight: bold;
`;

export const EmptyValue = styled.div`
  background-color: ${theme.palette.text.table};
  height: 5px;
  width: 100%;
`;
