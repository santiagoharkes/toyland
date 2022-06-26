import styled from "styled-components";

export const ProductsContainerStyled = styled.section``;

export const ProductsTitleContainerStyled = styled.div`
  width: 100%;
  padding: 30px;
  height: 10vh;
  background: ${(props) => props.theme.colors["violetLight"]};
  color: ${(props) => props.theme.colors["violet"]};
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export const ProductsContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 0;
`;

export const ProductCardsContainerStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  padding: 20px;
  margin: 30px 0;
`;
