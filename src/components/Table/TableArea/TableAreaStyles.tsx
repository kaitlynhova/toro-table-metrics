import styled from "styled-components";

// CONTAINERS
export const ContainerInner = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  max-width: 800px;
  padding: 30px;
  width: 100%;
`;

type ContainerOuterProps = {
  color: string;
};

export const ContainerOuter = styled.div<ContainerOuterProps>`
  align-items: center;
  background-color: ${(p) => p.color};
  display: flex;
  justify-content: center;
  transition: all 0.5s;
  width: 100%;
`;
