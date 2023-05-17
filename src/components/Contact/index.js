import Form from "./components/Form";
import {
  Container,
  Description,
  TextWrapper,
  Title,
  SocialNetwork
} from "./Contact.styles";

export default function Contact() {
  return (
    <>
      <Container id="contact">
        <TextWrapper>
          <Title>Leve sua festa para o Espaço Cananeia</Title>
          <Description>Fale com um de nossos atendentes... </Description>
        <SocialNetwork>
          <a href="https://www.instagram.com/espacocananeia/" target="_blank">
            <img
              width="80px"
              height="80px"
              src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
            ></img>
          </a>
          <a href="https://wa.me/5511998992034" target="_blank">
            <img
              width="80px"
              height="80px"
              src="https://cdn-icons-png.flaticon.com/512/152/152740.png"
            ></img>
          </a>
        </SocialNetwork>
        </TextWrapper>
        <Form />
      </Container>
    </>
  );
};
