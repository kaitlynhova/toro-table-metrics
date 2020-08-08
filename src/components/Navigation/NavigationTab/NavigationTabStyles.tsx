import styled from "styled-components";
import { theme } from "../../../theme";
type TabProps = {
  color: string;
};

export const Tab = styled.button<TabProps>`
  background-color: ${(p) => p.color};
  border: 0;
  box-sizing: border-box;
  color: ${theme.palette.text.paragraph};
  cursor: pointer;
  font-size: 20px;
  min-width: 180px;
  padding: 26px;
  text-align: left;
  width: 230px;
  word-break: break-all;
  &:focus {
    font-weight: bold;
    outline: none;
  }
`;
