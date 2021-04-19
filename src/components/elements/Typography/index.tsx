import React from "react";
import * as S from "./styles";

interface TypographyProps {
  children?: React.ReactNode;
  weight?: "Ligth" | "Bold" | "Bolder";
  italic?: boolean;
  variant?: "h1" | "h2" | "body1" | "body2";
  muted?: boolean;
}

const Typography = ({
  children,
  weight,
  italic = false,
  muted = false,
  variant = "body1",
  ...otherStyles
}: TypographyProps) => {
  const Element = S.Typographies[variant];

  if (!children) return <></>;

  return (
    <Element weight={weight} italic={italic} muted={muted} {...otherStyles}>
      {children}
    </Element>
  );
};

export default Typography;
