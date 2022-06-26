import styled from "styled-components";

export const ButtonContainerStyled = styled.button`
  padding: 15px;
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
  font-size: 16px;
  text-align: center;

  &:hover {
    background: ${(props) => props.theme.colors["orangeLight"]};
    color: ${(props) => props.theme.colors["orange"]};
    border: 1px solid ${(props) => props.theme.colors["orange"]};
  }
`;
