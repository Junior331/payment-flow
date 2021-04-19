import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import * as S from "./styles";

export interface OptionIndicatorProps {
  selected?: boolean;
}

const OptionIndicator: React.FC<OptionIndicatorProps> = ({ selected }) => (
  <S.Container>
    <S.Indicator selected={selected} />
  </S.Container>
);

export default OptionIndicator;
