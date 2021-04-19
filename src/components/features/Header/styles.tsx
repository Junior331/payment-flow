import styled from "styled-components";

interface ColumnProps {
  justifyContent?: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
`;

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex: 1;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
`;
