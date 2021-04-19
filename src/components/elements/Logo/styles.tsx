import styled from "styled-components";

interface ContainerProps {
  padding?: string;
  margin?: string;
}

export const Container = styled.div<ContainerProps>`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;
