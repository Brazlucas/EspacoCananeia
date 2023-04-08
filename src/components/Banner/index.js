// import styles from '../../styles/Home.module.css';
import {
  Container,
  Content,
  Title,
  InfoWrapper,
  Info,
  InfoText,
  Address,
  AddressSpan,
  Action,
  DescriptionWrapper,
  BackgroundLines,
  BackgroundSecondLine,
  Blink
} from "./Banner.styles";
import { IoLocationSharp } from 'react-icons/io5'
export default function Banner() {
  return (
    <>
      <Container>
        <Content src="" alt="Banner Infovist">
          <DescriptionWrapper>
            <Title>O melhor espaço<br />de Guarulhos!</Title>
            <Blink>
              <Action>Saiba mais!</Action>
            </Blink>
          </DescriptionWrapper>
        </Content>
        <Address>
          <AddressSpan><IoLocationSharp style={{marginRight: '5px'}}/>Rua Cananéia, Nº 51 - Guarulhos (SP)</AddressSpan>
        </Address>
        <InfoWrapper>
          <Info>
            <InfoText>
            <img style={{width: '80px', height: '80px', marginBottom: '20px'}} src="images/icon3.png"></img>
            <h4>Localização Privilegiada</h4>
            <span>
              Com uma localização privilegiada em SBC,
              em uma das mais belas paisagens da região,
              com espaço para cerimônia de front ao lago.
            </span>
            </InfoText>
            <InfoText>
            <img style={{width: '80px', height: '80px', marginBottom: '20px'}} src="images/icon1.png"></img>
            <h4 style={{marginBottom: '8px'}}>Decoração Elegante</h4>
            <span>Planejamos a decoração do seu evento com muita criatividade, bom gosto e sofisticação.</span>
            </InfoText>
            <InfoText>
            <img style={{width: '80px', height: '80px', marginBottom: '20px'}} src="images/icon2.png"></img>
            <h4 style={{marginBottom: '8px'}}>Gastronomia Sofisticada</h4>
            <span>
              Com uma localização privilegiada em SBC,
              em uma das mais belas paisagens da região,
              com espaço para cerimônia de front ao lago.
            </span>
            </InfoText>
          </Info>
        </InfoWrapper>
      </Container>
    </>
  );
}