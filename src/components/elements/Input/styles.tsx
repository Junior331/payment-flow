import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { InputProps } from ".";

export const InputContainer = styled.div<{ width: string }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  padding: 15px 4px;
  position: relative;
`;

export const Input = styled.input<InputProps>`
  ${(props) => props.theme.typography.input}
  padding: 5px 0px;
  border-width: 0 0 2px 0;
  border-style: solid;
  width: 100%;
  height: 44px;
  ::placeholder {
    color: ${(props) => props.theme.palette.text.disabled};
  }
  border-color: ${(props) =>
    props.error
      ? props.theme.palette.error.main
      : props.theme.palette.text.disabled};
  :focus {
    border-color: ${(props) => props.theme.palette.primary.main};
    outline: none;
  }
`;

export const Label = styled.label<{ error?: boolean }>`
  font-size: 14px;
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  color: ${(props) =>
    props.error
      ? props.theme.palette.error.main
      : props.theme.palette.text.secondary};
`;

export const HintLabel = styled.span`
  margin: 3px 0;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.palette.text.primary};
`;

export const ErrorMessageStyled = styled.span`
  position: absolute;
  bottom: 0px;
  left: 4px;
  color: ${(props) => props.theme.palette.error.main};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  font-size: 10px;
`;
