import React from "react-dom";
import { Header } from "../..";
import * as S from "./styles";

interface LayoutProps {
  children?: React.ReactNode;
  hideBackButton?: boolean;
}

const Layout = ({ children, hideBackButton }: LayoutProps) => {
  return (
    <S.Container>
      <Header hideBackButton={hideBackButton} />
      <S.ContainerMain>{children}</S.ContainerMain>
    </S.Container>
  );
};

export default Layout;
