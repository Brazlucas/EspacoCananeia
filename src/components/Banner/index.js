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
  Blink
} from "./Banner.styles";
import { IoLocationSharp } from 'react-icons/io5'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, FreeMode } from "swiper";
import 'swiper/css';
import styles from '../../styles/Home.module.css';

SwiperCore.use([Autoplay, FreeMode]);

export default function Banner() {
  return (
    <>
      <Container id="banner">
        <Content>
          <DescriptionWrapper>
            <Title>O melhor espaço<br />de Guarulhos!</Title>
            <Blink>
              <a target="_blank" href="https://www.instagram.com/espacocananeia/">
                <Action>Saiba mais!</Action>
              </a>
            </Blink>
          </DescriptionWrapper>
        </Content>
        <Address>
          <AddressSpan><IoLocationSharp style={{ marginRight: '5px' }} />Rua Cananéia, Nº 51 - Guarulhos (SP)</AddressSpan>
        </Address> 
          <div style={{background: "#000"}}>
            <InfoWrapper className={styles.hiddeOnMobile}>
              <Info>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  freeMode={true}
                  loopMode={true}
                  autoplay={{
                    pauseOnMouseEnter: false,
                    delay: 1800,
                    disableOnInteraction: false,
                  }}
                >
                  <SwiperSlide>
                    <InfoText>
                      <img style={{ width: '80px', height: '80px', marginBottom: '20px' }} src="images/icon3.png"></img>
                      <h4>Localização Privilegiada</h4>
                      <span>
                        Buffet Glamouroso localizado no coração de Guarulhos
                      </span>
                    </InfoText>
                  </SwiperSlide>
                  <SwiperSlide>
                    <InfoText>
                      <img style={{ width: '80px', height: '80px', marginBottom: '20px' }} src="images/icon1.png"></img>
                      <h4 style={{ marginBottom: '8px' }}>Decoração Elegante</h4>
                      <span>Espaço luxuoso e climatizado, Decorado para cerimônia, Decoração permanente, Som e iluminação, Jardim</span>
                    </InfoText>
                  </SwiperSlide>
                  <SwiperSlide>
                    <InfoText>
                      <img style={{ width: '80px', height: '80px', marginBottom: '20px' }} src="images/icon2.png"></img>
                      <h4 style={{ marginBottom: '8px' }}>Gastronomia Sofisticada</h4>
                      <span>
                        Chefe de cozinha, Garçons e Copeiros
                      </span>
                    </InfoText>
                  </SwiperSlide>
                  <SwiperSlide>
                    <InfoText>
                      <img style={{ width: '80px', height: '80px', marginBottom: '20px' }} src="images/icon4.png"></img>
                      <h4 style={{ marginBottom: '8px' }}>Cardápios Personalizados</h4>
                      <span>
                        Cardápio com gastronomia de alto padrão
                      </span>
                    </InfoText>
                  </SwiperSlide>
                </Swiper>
              </Info>
            </InfoWrapper>
          </div>
      </Container >
    </>
  );
}