import React, { InputHTMLAttributes, useState } from "react";
import { masks, typeMask } from "../../../infra/helpers/masks";
import * as S from "./styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  width?: string;
  mask?: typeMask;
  error?: string;
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
  const [touched, setTouched] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const maskedValue = masks[mask || "standard"](target?.value || "");
    event.target.value = maskedValue;
    onChange(event);
  };

  const errorMessage = touched ? error : "";
  const hasError = Boolean(error && touched);
  return (
    <S.InputContainer width={width}>
      <S.Label error={hasError}>{label}</S.Label>
      <S.Input
        {...otherProps}
        error={errorMessage}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        value={value}
        onBlur={() => setTouched(true)}
      />
      <S.ErrorMessageStyled>{errorMessage}</S.ErrorMessageStyled>
    </S.InputContainer>
  );
};

export default Input;
