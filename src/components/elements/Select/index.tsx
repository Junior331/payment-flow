import React, { SelectHTMLAttributes } from "react";
import { masks, typeMask } from "../../../infra/helpers/masks";
import * as S from "./styles";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  width?: string;
  mask?: typeMask;
  error?: boolean;
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
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    const maskedValue = masks[mask || "standard"](target?.value || "");
    event.target.value = maskedValue;
    onChange(event);
  };

  const hasError = Boolean(error);
  return (
    <S.Container width={width}>
      <S.Label error={hasError}>{label}</S.Label>
      <S.Select
        {...otherProps}
        // error={touched ? error : ""}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(e)}
        value={value}
      >
        <option value="0">{otherProps.placeholder}</option>
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.key}
          </option>
        ))}
      </S.Select>
    </S.Container>
  );
};

export default Select;
