import styled from "styled-components";

export const CartBackgroundStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000000ad;
  backdrop-filter: blur(10px);
  z-index: 9;

  opacity: ${(props) => (props.$showCart ? 1 : 0)};
  visibility: ${(props) => (props.$showCart ? "visible" : "hidden")};

  transition: all 0.3s ease;

  overflow: hidden;
`;

export const CartContainerStyled = styled.div`
  overflow: hidden;
  width: 500px;
  height: 100vh;
  max-height: 100vh;
  max-width: ${(props) => (props.$showCart ? "80vw" : "0px")};

  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  z-index: 10;

  transition: all 0.3s ease;
`;

export const CartContentStyled = styled.div`
  width: 100%;
  height: 100%;
  min-width: 250px;
  background-color: ${(props) => props.theme.colors["orangeLight"]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const CartTitleStyled = styled.div`
  color: ${(props) => props.theme.colors["orange"]};
  font-weight: 600;
  font-size: 18px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors["orange"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseIconStyled = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const CartItemsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  overflow: scroll;
  padding: 20px;
`;

export const CartTotalContainer = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  padding: 20px;
  font-weight: 600;
  font-size: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  box-shadow: 0px 0px 17px #00000063;
  border-radius: 20px 20px 0 0;
  background: ${(props) => props.theme.colors["violet"]};
  color: #fff;
`;

export const TotalContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalStyled = styled.div`
  font-weight: 300;
`;

export const CheckoutButtonStyled = styled.div`
  padding: 10px;
  border-radius: 40px;
  min-width: 200px;
  background: ${(props) => props.theme.colors["background"]};
  color: ${(props) => props.theme.colors["violet"]};
  font-weight: 600;
  border: none;
  outline: none;
  width: fit-content;
  z-index: 2;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  font-size: 16px;
  text-align: center;
  width: 100%;

  /* &:hover {
    background: ${(props) => props.theme.colors["orangeLight"]};
    color: ${(props) => props.theme.colors["orange"]};
    border: 1px solid ${(props) => props.theme.colors["orange"]};
  } */
`;
