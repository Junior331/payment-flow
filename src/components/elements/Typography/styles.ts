import styled, { css } from "styled-components";

interface IVariantProps {
  color?: string;
  muted?: boolean;
}

const mutedStyle = () => css`
  color: ${(props) => props.theme.palette.text.disabled};
`;

const h1 = styled.h1<IVariantProps>`
  ${(props) => props.theme.typography.h1}
  ${(props) => props.muted && mutedStyle()}
  color: ${(props) => props.color || props.theme.palette.text.primary};
`;

const h2 = styled.h2<IVariantProps>`
  ${(props) => props.theme.typography.h2}
  ${(props) => props.muted && mutedStyle()}
  color: ${(props) => props.color || props.theme.palette.text.primary};
`;

const body1 = styled.span<IVariantProps>`
  ${(props) => props.theme.typography.p}
  ${(props) => props.muted && mutedStyle()}
  color: ${(props) => props.color || props.theme.palette.text.primary};
`;

const body2 = styled.span<IVariantProps>`
  ${(props) => props.theme.typography.span}
  ${(props) => props.muted && mutedStyle()}
  color: ${(props) => props.color || props.theme.palette.text.primary};
`;

const Typographies = {
  h1,
  h2,
  body1,
  body2,
};

export { Typographies };
