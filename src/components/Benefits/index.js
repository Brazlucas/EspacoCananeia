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
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ModalCarousel from "../ModalCarousel";
import itemData from "./photosData";

export default function Benefits() {
  const items = itemData();
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
            A Dieters Lago tem como diferencial uma estrutura completa para todos os tipos de evento, sendo casamentos, aniversários,
            confraternizações e eventos corporativos. Em uma das mais belas paisagens da região, nosso local possui espaço para cerimônia de
            front ao lago, dois ambientes para convidados, estacionamento, espaço para shows, pier para embarcação e muito mais para você a
            realizar seu evento cercado de belezas naturais com toda tranquilidade, privacidade em uma estrutura única, rústica e sofisticada.
          </Description>
          <Wrapper>
            <ImageList sx={{ width: '100%', height: '100%' }} cols={3}>
              {items.map((item) => (
                <ImageListItem style={{ margin: '8px', border: 'solid 1px #EDBC40' }} key={item.img}>
                  <img
                    style={{ maxHeight: '350px', maxWidth: '100%'}}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    style={{backgroundColor: 'rgba(237, 188, 64, 0.8)'}}
                    title={item.title}
                    subtitle={item.author}
                  />
                </ImageListItem>
              ))}
            </ImageList>
              <ModalCarousel />
          </Wrapper>
        </SectionWrapper>
      </Container>
    </>
  );
}
