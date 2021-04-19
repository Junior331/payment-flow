import styled from "styled-components";

const Container = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: ${(props) => props.theme.shape?.padding.large};
`;

export { Container };
