import React from "react";
import * as S from "./NavigationTabStyles";

// TYPES
type NavigationTabProps = {
  color: string;
  onClick: () => void;
  title: string;
};

// COMPONENT
const NavigationTab: React.FC<NavigationTabProps> = ({
  color,
  onClick,
  title,
}) => {
  return (
    <S.Tab color={color} onClick={onClick}>
      {title}
    </S.Tab>
  );
};

export default NavigationTab;
