import React from "react";
import Router from "next/router";
import { BackButton, Logo } from "../..";
import * as S from "./styles";

const Header: React.FC = () => (
  <S.Container>
    <S.Column>
      <BackButton onClick={() => Router.back()} />
    </S.Column>
    <S.Column justifyContent="center">
      <Logo />
    </S.Column>
    <S.Column></S.Column>
  </S.Container>
);

export default Header;
