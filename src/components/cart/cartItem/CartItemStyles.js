import styled from "styled-components";

export const CartItemContainerStyled = styled.div`
  width: 100%;
  border-radius: 15px;
  /* border: 1px solid #dedede; */
  box-shadow: 0px 0px 10px #bcbcbc42;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  background: ${(props) => props.theme.colors["background"]};
  position: relative;
`;

export const CartItemImageContainerStyled = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartItemImageStyled = styled.img`
  height: 100%;
  width: auto;
`;

export const CartInfoContainerStyled = styled.div`
  flex: 1 1 150px;
  display: flex;
  flex-direction: column;
`;

export const CartProductNameStyled = styled.p`
  color: ${(props) => props.theme.colors["text"]};
  font-weight: 600;
`;

export const CartProductTypeStyled = styled.p`
  color: ${(props) => props.theme.colors["textSecondary"]};
`;

export const PriceButtonContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 20px 0;
  width: 100%;
  margin: 0 auto;
  max-width: 200px;
`;

export const PriceStyled = styled.p`
  color: ${(props) => props.theme.colors["text"]};
  font-weight: 600;
  font-size: 20px;
  width: 50%;
`;

export const AddDeleteContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
`;

export const DeleteItemStyled = styled.div`
  /* position: absolute; */

  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  padding: 15px 10px;
  width: 100px;
  border-bottom-right-radius: 0;
  top: 100%;
  right: 13%;
  /* transform: translate(50%, -50%); */

  background: ${(props) => props.theme.colors["violetLight"]};
  color: ${(props) => props.theme.colors["violet"]};

  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors["violet"]};
    color: #fff;
  }
`;

export const ButtonContainerStyled = styled.div`
  overflow: hidden;
  display: flex;
  border-radius: 20px;
  height: 30px;
`;

export const ButtonStyled = styled.button`
  border: none;
  background: ${(props) =>
    props.showDelete ? "#ffecec" : props.theme.colors["violetLight"]};
  color: ${(props) =>
    props.showDelete ? "red" : props.theme.colors["violet"]};
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const QuantityStyled = styled.div`
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
