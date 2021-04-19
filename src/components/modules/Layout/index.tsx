import React from "react-dom";
import { Header } from "../..";
import * as S from "./styles";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <Header />
      <S.ContainerMain>{children}</S.ContainerMain>
    </S.Container>
  );
};

export default Layout;
