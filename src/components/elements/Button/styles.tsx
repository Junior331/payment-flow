import styled, { css } from "styled-components";
import { shade } from "polished";
import { ButtonProps } from "./";

const SIZE = {
  small: css`
    width: 136px;
  `,
  medium: css`
    width: 200px;
  `,
  large: css`
    width: 70%;
  `,
  huge: css`
    width: 100%;
  `,
};

const VARIANT = {
  default: css`
    background-color: ${(props) => props.theme.palette.primary.main};
    border-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.contrastText};
    &:hover {
      background-color: ${(props) =>
        shade(0.15, props.theme.palette.primary.main)};
      border-color: ${(props) => shade(0.15, props.theme.palette.primary.main)};
    }
    &:active {
      background-color: ${(props) => props.theme.palette.primary.main};
      border-color: ${(props) => props.theme.palette.primary.main};
    }
  `,
  outlined: css`
    background-color: transparent;
    border-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.main};
    &:hover {
      border-color: ${(props) => shade(0.15, props.theme.palette.primary.main)};
      color: ${(props) => shade(0.15, props.theme.palette.primary.main)};
    }
    &:active {
      border-color: ${(props) => props.theme.palette.primary.main};
      color: ${(props) => props.theme.palette.primary.main};
    }
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background-color: ${(props) => props.theme.palette.grey[500]};
  border-color: ${(props) => props.theme.palette.grey[500]};
  color: ${(props) => props.theme.palette.grey[400]};
  &:hover {
    background-color: ${(props) => props.theme.palette.grey[500]};
    border-color: ${(props) => props.theme.palette.grey[500]};
    color: ${(props) => props.theme.palette.grey[400]};
  }
`;

const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: solid 2px;
  transition-property: background-color, border-color;
  transition: 0.1s;
  cursor: ${(props) => (props.isLoading ? "wait" : "pointer")};
  box-shadow: ${(props) => props.theme.shadows[0]};
  height: 60px;
  border-radius: 30px;
  margin: 20px 0;
  ${(props) => props.theme.typography.button};
  ${(props) => props.variant && VARIANT[props.variant]};
  ${(props) => props.disabled && DISABLED};
  ${(props) => props.size && SIZE[props.size]};
`;

export { ButtonContainer };
