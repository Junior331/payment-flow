import Image from "next/image";
import React from "react";
import * as S from "./styles";

export interface LogoProps {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
}

const Logo = ({
  width = "40px",
  height = "40px",
  padding = "0px",
  margin = "0px",
}: LogoProps) => (
  <S.Container margin={margin} padding={padding}>
    <Image
      src="/images/logo.png"
      width={width}
      height={height}
      objectFit="contain"
    />
  </S.Container>
);

export default Logo;
