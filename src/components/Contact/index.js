import Form from "./components/Form";
import {
  BackgroundLines,
  BackgroundLinesDown,
  Container,
  Description,
  TextWrapper,
  Title,
} from "./Contact.styles";

export default function Contact() {
  return (
    <>
      <Container id="contact">
        <BackgroundLines />
        <BackgroundLinesDown />
        <TextWrapper>
          <Title>Leve sua festa para o Espaço Cananeia</Title>
          <Description>Fale com nossos especialistas para saber mais como podemos te ajudar e qual o melhor plano para a sua empresa!  </Description>
        </TextWrapper>
        <Form />
      </Container>
    </>
  );
};
