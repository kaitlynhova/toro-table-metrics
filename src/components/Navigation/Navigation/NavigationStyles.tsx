import styled from "styled-components";
import { theme } from "../../../theme";

// CONTAINERS
export const ContainerOuter = styled.div`
  background-color: ${theme.palette.background};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  width: 230px;
`;

// IMAGES
export const Logo = styled.img`
  padding-bottom: 30px;
`;

// TABS
export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 400px;
  text-align: left;
`;

// TEXT
export const Title = styled.h1`
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  color: ${theme.palette.text.navigation};
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
  font-size: 1.5em;
  text-align: center;
  transform: rotate(-90deg);
`;
