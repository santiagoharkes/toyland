// Components
import Hero from "components/hero/Hero";

// Styles
import { Container } from "styles/Container";
import { HomeContainerStyled, WaveContainerStyled } from "./HomeStyles";

function Home() {
  return (
    <HomeContainerStyled>
      <Container>
        <WaveContainerStyled>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path d="M0,224L80,234.7C160,245,320,267,480,245.3C640,224,800,160,960,122.7C1120,85,1280,75,1360,69.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </WaveContainerStyled>
        <Hero />
      </Container>
    </HomeContainerStyled>
  );
}

export default Home;
