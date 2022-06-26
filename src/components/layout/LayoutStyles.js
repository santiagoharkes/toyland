import styled from "styled-components";

export const LayoutContainerStyled = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors["background"]};
  position: relative;
  /* overflow: hidden; */
`;
