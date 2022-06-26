import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LabelStyled = styled.label``;

export const InputContainerStyled = styled.div`
  border-radius: 30px;
  max-width: 250px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors["violetLight"]};
  border: 1px solid transparent;
  transition: all 0.3s ease;

  &:focus-within {
    border: 1px solid ${(props) => props.theme.colors["violet"]};
  }
`;

export const InputStyled = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
`;

export const IconStyled = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: ${(props) => props.clear && "pointer"};
`;
