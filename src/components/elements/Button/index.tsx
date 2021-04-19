import React, { ButtonHTMLAttributes } from "react";
import ReactLoading from "react-loading";
import * as S from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "default" | "outlined";
  size?: "large" | "medium" | "small" | "huge";
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick = () => {},
  variant = "default",
  size = "small",
  disabled,
  isLoading = false,
  children,
  type = "button",
  ...rest
}) => (
  <S.ButtonContainer
    type={type}
    onClick={onClick}
    variant={variant}
    size={size}
    disabled={disabled}
    isLoading={isLoading}
    {...rest}
  >
    {isLoading ? (
      <ReactLoading type="spokes" height="20px" width="20px" />
    ) : (
      children
    )}
  </S.ButtonContainer>
);

export default Button;
