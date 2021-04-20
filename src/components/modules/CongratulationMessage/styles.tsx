import styled from "styled-components";
import { Typography } from "../..";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(props) => props.theme.shape.margin.medium} 0;
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.shadows[0]};
`;

export const HighlightText = styled(Typography).attrs({
  variant: "h1",
})`
  font-size: 1.4em;
  margin: ${(props) => props.theme.shape.margin.medium};
  font-weight: 500;
`;

export const Text = styled(Typography).attrs({
  variant: "h2",
})`
  font-size: 1.2em;
  margin: ${(props) => props.theme.shape.margin.medium};
  font-weight: 400;
  width: 250px;
  text-align: center;
  color: ${(props) => props.theme.palette.text.secondary};
`;
