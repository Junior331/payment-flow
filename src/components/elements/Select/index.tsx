import React, { SelectHTMLAttributes, useState } from "react";
import { masks, typeMask } from "../../../infra/helpers/masks";
import * as S from "./styles";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  width?: string;
  mask?: typeMask;
  error?: string;
  options?: Array<{ key: string; value: string }>;
}

const Select: React.FC<SelectProps> = ({
  label,
  mask,
  width = "100%",
  error,
  value = "",
  options = [],
  onChange,
  ...otherProps
}) => {
  const [touched, setTouched] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    const maskedValue = masks[mask || "standard"](target?.value || "");
    event.target.value = maskedValue;
    onChange(event);
  };

  const errorMessage = touched ? error : "";
  const hasError = Boolean(error && touched);
  return (
    <S.Container width={width}>
      <S.Label error={hasError}>{label}</S.Label>
      <S.Select
        {...otherProps}
        error={errorMessage}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(e)}
        value={value}
        onBlur={() => setTouched(true)}
      >
        <option value="0">{otherProps.placeholder}</option>
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.key}
          </option>
        ))}
      </S.Select>
      <S.ErrorMessageStyled>{errorMessage}</S.ErrorMessageStyled>
    </S.Container>
  );
};

export default Select;
