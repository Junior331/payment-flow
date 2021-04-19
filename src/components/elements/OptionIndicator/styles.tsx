import styled from "styled-components";

interface IndicatorProps {
  selected?: boolean;
}

export const Container = styled.div`
  border-radius: 50%;
  border: 4px solid ${(props) => props.theme.palette.text.disabled};
  padding: 3px;
`;

export const Indicator = styled.div<IndicatorProps>`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.selected ? props.theme.palette.primary.main : "transparent"};
`;
