import styled from "styled-components";
import { Typography } from "../..";

interface ColumnProps {
  alignItems?: "center" | "flex-end" | "flex-start";
  flex?: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 2px solid;
  outline: none;
  cursor: pointer;
  border-radius: 16px;
  padding: ${(props) => props.theme.shape?.padding.medium};
  margin: ${(props) => props.theme.shape.margin.medium} 0;
`;

export const Column = styled.div<ColumnProps>`
  display: flex;
  align-items: ${(props) => props.alignItems || "flex-start"};
  flex-direction: column;
  flex: ${(props) => props.flex};
`;

export const PercentText = styled(Typography).attrs({
  variant: "body1",
})`
  background-color: ${(props) => props.theme.palette.secondary.main};
  color: ${(props) => props.theme.palette.secondary.contrastText};
  border-radius: 12px;
  padding: 2px 8px;
  font-size: 0.8em;
  margin: 0 ${(props) => props.theme.shape.margin.small};
`;

export const TimeText = styled(Typography).attrs({
  variant: "body1",
})`
  font-size: 0.9em;
  margin: ${(props) => props.theme.shape.margin.smallest};
  font-weight: 700;
`;

export const ValueText = styled(Typography).attrs({
  variant: "body1",
})`
  margin: ${(props) => props.theme.shape.margin.smallest};
  font-size: 0.8em;
`;

export const QuotaText = styled(Typography).attrs({
  variant: "body1",
})`
  color: ${(props) => props.theme.palette.secondary.main};
  margin: ${(props) => props.theme.shape.margin.smallest};
  font-size: 0.8em;
`;
