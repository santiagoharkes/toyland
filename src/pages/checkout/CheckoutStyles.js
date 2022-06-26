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

export const ProductCardsContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin: 30px 0;
`;

export const CheckoutContainerStyled = styled.div`
  padding: 0 20px;
`;

export const TotalContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  border-top: 1px solid #ebebeb;
  padding: 10px;
`;

export const TotalStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 25px;
  padding: 0 10px;

  & > span {
    font-weight: 700;
  }
`;

export const SuccessContainerStyled = styled.div`
  margin: 20px 0;
  padding: 20px 0;
  border-radius: 20px;
  min-height: 79px;
  background: #dff5df;
  color: #029102;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  border: 1px solid #029102;
`;
