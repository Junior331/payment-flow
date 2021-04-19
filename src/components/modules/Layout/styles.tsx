import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const ContainerMain = styled.div`
  width: 100%;
  padding: 0 ${(props) => props.theme.shape.padding.huge};
  max-width: 768px;
`;
