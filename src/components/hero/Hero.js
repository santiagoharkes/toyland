// Components
import HeroImage from "assets/img/hero-img.png";
import Button from "components/button/Button";

//Styles
import {
  DescriptionStyled,
  HeroContainerStyled,
  HeroImageContainerStyled,
  HeroImageStyled,
  HeroTitleContainerSyled,
  MainTitleStyled,
} from "./HeroStyles";

// Hooks & Context
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <HeroContainerStyled>
      <HeroTitleContainerSyled>
        <MainTitleStyled>Las mejores figuras para tu juego!</MainTitleStyled>
        <DescriptionStyled>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          numquam exercitationem ad provident eveniet ut!
        </DescriptionStyled>
        <Button onClick={() => navigate("products")}>Explorar más</Button>
      </HeroTitleContainerSyled>
      <HeroImageContainerStyled>
        <HeroImageStyled src={HeroImage} />
      </HeroImageContainerStyled>
    </HeroContainerStyled>
  );
}

export default Hero;
