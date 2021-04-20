import React, { InputHTMLAttributes } from "react";
import { masks, typeMask } from "../../../infra/helpers/masks";
import * as S from "./styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  width?: string;
  mask?: typeMask;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  mask,
  width = "100%",
  error,
  value = "",
  onChange,
  ...otherProps
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const maskedValue = masks[mask || "standard"](target?.value || "");
    event.target.value = maskedValue;
    onChange(event);
  };

  const hasError = Boolean(error);
  return (
    <S.InputContainer width={width}>
      <S.Label error={hasError}>{label}</S.Label>
      <S.Input
        {...otherProps}
        // error={touched ? error : ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        value={value}
      />
    </S.InputContainer>
  );
};

export default Input;
