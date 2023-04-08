import SectionTitle from "../Shared/SectionTitle/SectionTitle.component";
import {
  Container,
  Logo,
  LogoMobileRow,
  LogosWrapper,
  TitleWrapper
} from "./Partnership.styles";

export default function Partnership() {
  return (
    <>
      <Container id="clients">
        <TitleWrapper>
          <SectionTitle text="Parceiros e colaboradores:" />
        </TitleWrapper>
        <LogosWrapper>
          <LogoMobileRow>
            <Logo src="https://espacocananeia.com/_img/parceiros/agari.jpg" />
            <Logo src="https://espacocananeia.com/_img/parceiros/adecor.jpg" />
          </LogoMobileRow>
          <LogoMobileRow>
            <Logo src="https://espacocananeia.com/_img/parceiros/estudio-jf.jpg" />
            <Logo src="https://espacocananeia.com/_img/parceiros/pedro-orley.jpg" />
          </LogoMobileRow>
        </LogosWrapper>
      </Container>
    </>
  );
};