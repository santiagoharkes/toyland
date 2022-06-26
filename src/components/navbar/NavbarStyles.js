import styled from "styled-components";

export const NavbarContainerStyled = styled.header`
  width: 100%;
  background: ${(props) => props.theme.colors["backgroundTransparent"]};
  position: sticky;
  top: 0;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  z-index: 5;
  backdrop-filter: blur(10px);
`;

export const NavbarContentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoStyled = styled.p`
  font-size: clamp(23px, 5vw, 30px);
  font-weight: 700;
  color: ${(props) => props.theme.colors["orange"]};
  cursor: pointer;
`;

export const NavbarStyled = styled.nav``;

export const NavbarListStyled = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  gap: 30px;
  color: ${(props) => props.theme.colors["violet"]};
`;

export const NavbarItemStyled = styled.li`
  color: ${(props) => props.theme.colors["violet"]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: ${(props) => props.theme.colors["orange"]};
  }
`;

export const CartItemsNumberStyled = styled.div`
  position: absolute;
  left: 100%;
  top: -19%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors["violet"]};
  color: #fff;

  font-size: 14px;
  border-radius: 50%;
  transform: translate(-50%);
  padding: 5px;
`;
