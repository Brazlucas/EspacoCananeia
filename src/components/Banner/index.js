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
import FadeIn from 'react-fade-in';
import { useState, useEffect } from "react";
import { useRef } from "react";

SwiperCore.use([Autoplay, FreeMode]);

export default function Banner() {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (bannerRef.current) {
        const top = bannerRef.current.getBoundingClientRect().top;
        const isVisible = (top + 100) < window.innerHeight;
        setVisible(isVisible);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Container id="banner">
        <Content>
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
          <div style={{background: "#000"}} ref={bannerRef}>
            {visible &&
            <FadeIn delay={100}>
              <InfoWrapper>
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
                        <img style={{ width: '80px', height: '80px', marginBottom: '20px' }} src="images/icon4.png"></img>
                        <h4 style={{ marginBottom: '8px' }}>Cardápios Personalizados</h4>
                        <span>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto at, placeat officia.
                        </span>
                      </InfoText>
                    </SwiperSlide>
                  </Swiper>
                </Info>
              </InfoWrapper>
            </FadeIn>
            }
          </div>
      </Container >
    </>
  );
}