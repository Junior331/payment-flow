import React from "react";
import * as S from "./styles";

interface LogoProps {
  width: string;
  height: string;
  padding: string;
  margin: string;
}

const Logo = ({
  width = "150px",
  height = "auto",
  padding = "0",
  margin = "0",
}: LogoProps) => (
  <S.LogoContainer
    src="/logo.png"
    width={width}
    height={height}
    padding={padding}
    margin={margin}
  />
);

export default Logo;
