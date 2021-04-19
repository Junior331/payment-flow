import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import * as S from "./styles";

export interface BackButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick = () => {} }) => (
  <S.Container onClick={onClick}>
    <IoIosArrowBack />
  </S.Container>
);

export default BackButton;
