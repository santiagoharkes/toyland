import styled from "styled-components";

export const ImageContainerStyled = styled.div`
  position: relative;
  height: 100%;
  width: 80%;

  z-index: 3;
  min-height: 250px;

  grid-row-start: 1;
  grid-row-end: 3;
  grid-column: 1 / 2;
  justify-self: center;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  &::before {
    content: "";
    position: absolute;
    bottom: 1px;
    left: 50%;
    width: 65%;
    height: 10px;
    background: #000000;
    filter: blur(15px);
    border-radius: 50%;
    transform: translate(-50%);
  }
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  max-width: 200px;
  max-height: 100%;
`;

export const TextContainerStyled = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0px 0px 12px #97979769;

  grid-row-start: 2;
  grid-row-end: 4;
  grid-column: 1 / 3;

  transition: all 0.3s ease;
`;

export const TextStyled = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 75px;
`;

export const TitleContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleStyled = styled.h2`
  color: ${(props) => props.theme.colors["orange"]};
  font-weight: 600;
  font-size: 18px;
  transition: all 0.3s ease;
`;

export const SubTitleStyled = styled.p`
  color: ${(props) => props.theme.colors["textSecondary"]};
  font-size: 16px;
  line-height: 1;
  transition: all 0.3s ease;
`;

export const PriceStyled = styled.p`
  color: ${(props) => props.theme.colors["text"]};
  font-weight: 700;
  font-size: 30px;
`;

export const AddToCartButtonStyled = styled.button`
  padding: 10px 15px;
  border-radius: 40px;
  min-width: 200px;
  background: ${(props) => props.theme.colors["orange"]};
  color: #fff;
  font-weight: 600;
  border: none;
  outline: none;
  width: fit-content;
  z-index: 2;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  margin: 0 auto;

  &:hover {
    background: ${(props) => props.theme.colors["orangeLight"]};
    color: ${(props) => props.theme.colors["orange"]};
    border: 1px solid ${(props) => props.theme.colors["orange"]};
  }
`;

export const QuantityButtonContainerStyled = styled.div`
  overflow: hidden;
  display: flex;
  border-radius: 20px;
  min-height: 30px;
  min-width: 135px;
  margin: 0 auto;
`;

export const QuantityButtonStyled = styled.button`
  border: none;
  background: ${(props) =>
    props.showDelete ? "red" : props.theme.colors["violet"]};
  color: ${(props) => (props.showDelete ? "#ffecec" : "#fff")};
  min-width: 25px;
  max-width: 35px;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 10px 0;
  border: 1px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.showDelete ? "#ffecec" : props.theme.colors["violetLight"]};
    color: ${(props) =>
      props.showDelete ? "#ff0000" : props.theme.colors["violet"]};
  }
`;

export const QuantityNumberStyled = styled.div`
  min-width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: ${(props) => props.theme.colors["violetLight"]};
  padding: 10px 0;
`;

export const ProductCardContainerStyled = styled.div`
  width: 100%;
  max-width: 300px;
  border-radius: 20px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(150px, 200px) 75px auto;
  grid-auto-flow: row;
  row-gap: 10px;

  margin: 0 auto;
  min-height: 350px;
  position: relative;

  &:hover {
    ${TextContainerStyled} {
      background: ${(props) => props.theme.colors["orange"]};
    }

    ${TitleStyled} {
      color: #fff;
    }

    ${SubTitleStyled} {
      color: #000000;
    }

    ${AddToCartButtonStyled} {
      background: ${(props) => props.theme.colors["violet"]};

      &:hover {
        background: ${(props) => props.theme.colors["violetLight"]};
        color: ${(props) => props.theme.colors["violet"]};
        border: 1px solid ${(props) => props.theme.colors["violet"]};
      }
    }

    /* ${QuantityButtonStyled} {
      &:hover {
        background: ${(props) =>
      props.showDelete ? "#ffecec" : props.theme.colors["violetLight"]};
        color: ${(props) =>
      props.showDelete ? "#ff0000" : props.theme.colors["violet"]};
      }
    } */
  }
`;
