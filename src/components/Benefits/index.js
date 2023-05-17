import {
  SectionWrapper,
  Description,
  Container,
  TitleWrapper,
  DivisorWrapper,
  Wrapper
} from "./Benefits.styles";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ModalCarousel from "../ModalCarousel";
import itemData from "./photosData";
import { useMediaQuery } from 'react-responsive';

export default function Benefits() {
  const items = itemData();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Container id="benefits">
        <SectionWrapper>
          <TitleWrapper>
            <h1>Fotos do espaço:</h1>
          </TitleWrapper>
          <br />
          <DivisorWrapper style={{ width: '84%', margin: '0 auto' }}>
            <img style={{ width: '50%', height: '20px' }} src="images/line.png" alt="" />
            <img style={{ width: '115px', height: '30px' }} src="images/divisor_03.png" alt="" />
            <img style={{ width: '50%', height: '20px' }} src="images/line.png" alt="" />
          </DivisorWrapper>
          <Description>
            Espaço luxuoso - Decorado para cerimônia - Cardápio de alta gastronomia - Decoração permanente - DJ, Som e Iluminação - 
            Jardim - Chefe de cozinha - Garçons - Segurança.
          </Description>
            <ImageList
              sx={{ width: '100%', height: '100%', marginBottom: '65px' }} cols={3}
            >
              {items.map((item) => (
                <ImageListItem 
                  style={{ margin: '8px', marginBottom: '10px', border: 'solid 2px #EDBC40', height: '350px' }}
                  key={item.img}
                  cols={isMobile ? 3 : 1}
                >
                  <img
                    style={{ maxWidth: '100%', maxHeight: '346px' }}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          <ModalCarousel />
        </SectionWrapper>
      </Container>
    </>
  );
}
