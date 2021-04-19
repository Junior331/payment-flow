import styled from "styled-components";
import Image from "next/image";

interface ContainerProps {
  padding?: string;
  margin?: string;
}

export const Container = styled.div<ContainerProps>`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;
