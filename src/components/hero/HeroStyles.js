import styled from "styled-components";

export const HeroContainerStyled = styled.div`
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
`;

export const HeroTitleContainerSyled = styled.div`
  height: 100%;
  flex: 1 1 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

export const MainTitleStyled = styled.h1`
  color: ${(props) => props.theme.colors["violet"]};
  font-size: clamp(40px, 5vw, 55px);
  line-height: 1.2;
`;

export const DescriptionStyled = styled.p`
  color: ${(props) => props.theme.colors["violet"]};
  line-height: 1.7;
  font-size: clamp(16px, 2vw, 18px);
  width: 90%;
  z-index: 2;
`;

export const HeroImageContainerStyled = styled.div`
  height: 100%;
  flex: 1 1 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const HeroImageStyled = styled.img`
  width: 100%;
  height: auto;
  max-width: 500px;
  z-index: 2;
`;
