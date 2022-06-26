import styled from "styled-components";

export const HomeContainerStyled = styled.section`
  min-height: calc(100vh - 85px);
  padding: 30px;
  display: grid;
  place-items: center;
  position: relative;
`;

export const WaveContainerStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 1;
  display: flex;

  & > svg {
    width: 100%;
  }

  & > svg > path {
    fill: ${(props) => props.theme.colors["orange"]};
  }
`;
