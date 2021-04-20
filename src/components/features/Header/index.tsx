import React from "react";
import Router from "next/router";
import { BackButton, Logo } from "../..";
import * as S from "./styles";

interface HeaderProps {
  hideBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ hideBackButton }) => (
  <S.Container>
    <S.Column>
      {!hideBackButton && <BackButton onClick={() => Router.back()} />}
    </S.Column>
    <S.Column justifyContent="center">
      <Logo />
    </S.Column>
    <S.Column></S.Column>
  </S.Container>
);

export default Header;
