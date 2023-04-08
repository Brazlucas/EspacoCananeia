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

SwiperCore.use([Autoplay, FreeMode]);

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
          <AddressSpan><IoLocationSharp style={{ marginRight: '5px' }} />Rua Cananéia, Nº 51 - Guarulhos (SP)</AddressSpan>
        </Address>
        <InfoWrapper>
          <Info>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              freeMode={true}
              pagination={false}
              autoplay={{
                pauseOnMouseEnter: false,
                loop: true,
                delay: 3000,
                disableOnInteraction: false,
                freeMode: true,
              }}
            >
              <SwiperSlide>
                <InfoText>
                  <img style={{ width: '80px', height: '80px', marginBottom: '20px' }} src="images/icon3.png"></img>
                  <h4>Localização Privilegiada</h4>
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto at, placeat officia obcaecat
                  </span>
                </InfoText>
              </SwiperSlide>
              <SwiperSlide>
                <InfoText>
                  <img style={{ width: '80px', height: '80px', marginBottom: '20px' }} src="images/icon1.png"></img>
                  <h4 style={{ marginBottom: '8px' }}>Decoração Elegante</h4>
                  <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto at, placeat</span>
                </InfoText>
              </SwiperSlide>
              <SwiperSlide>
                <InfoText>
                  <img style={{ width: '80px', height: '80px', marginBottom: '20px' }} src="images/icon2.png"></img>
                  <h4 style={{ marginBottom: '8px' }}>Gastronomia Sofisticada</h4>
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto at, placeat officia.
                  </span>
                </InfoText>
              </SwiperSlide>
              <SwiperSlide>
                <InfoText>
                  <img style={{ width: '80px', height: '80px', marginBottom: '20px' }} src="images/icon2.png"></img>
                  <h4 style={{ marginBottom: '8px' }}>Gastronomia Sofisticada</h4>
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto at, placeat officia.
                  </span>
                </InfoText>
              </SwiperSlide>
            </Swiper>
          </Info>
        </InfoWrapper>
      </Container >
    </>
  );
}