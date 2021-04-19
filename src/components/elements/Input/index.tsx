import React, { InputHTMLAttributes } from "react";
import * as S from "./styles";
// import { masks, typeMask } from "../../../utils/masks";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  width?: string;
  // mask?: typeMask;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  // mask,
  width = "100%",
  error,
  ...otherProps
}) => {
  // const handleChange = (event: Event) => {
  //   const target = event.target as HTMLInputElement;
  //   const maskedValue = masks[mask || "standard"](target?.value || "");
  //   setFieldValue(name, maskedValue);
  //   if (onChange) {
  //     onChange(maskedValue);
  //   }
  // };

  const hasError = Boolean(error);
  return (
    <S.InputContainer width={width}>
      <S.Label error={hasError}>{label}</S.Label>
      <S.Input
        // error={touched ? error : ""}
        // onChange={(e: Event) => handleChange(e)}
        {...otherProps}
      />
    </S.InputContainer>
  );
};

export default Input;
