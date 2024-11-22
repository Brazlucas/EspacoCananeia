import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #1c1c1c;

  @media screen and (max-width: 767px) {
    padding-top: 15px !important;
  }

  span {
    font-family: Times;
    letter-spacing: 0.5px;
    text-shadow: 0.1px 0.1px 2px #000;
    font-size: 22px;
    line-height: 150%;
    text-align: justify;
    color: rgba(255, 255, 255, 0.9);
    padding: 20px;
    max-width: 55vw;
    margin-top: 10px;
  }
`;

export const ContainerBelow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;
  background-color: #1c1c1c;

  @media screen and (max-width: 767px) {
    padding-top: 15px !important;
  }

  span {
    font-family: Times;
    letter-spacing: 0.5px;
    text-shadow: 0.1px 0.1px 2px #000;
    font-size: 22px;
    line-height: 150%;
    text-align: justify;
    color: rgba(255, 255, 255, 0.9);
    padding: 20px;
    max-width: 55vw;
    margin-top: 10px;
  }
`;

export const DivisorWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`

export const SectionWrapper = styled.div`
  padding: 200px;
  opacity: 90%;
  background-image: url('images/espaco/noivos.png');
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 767px) {
    padding: 30px !important;
    max-width: 100vw;
    padding: 0 15px;
    font-size: 16px;
  }
`;

export const SectionWrapperBelow = styled.div`
  opacity: 90%;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 767px) {
    padding: 50px !important;
    max-width: 100vw;
    padding: 0 15px;
    font-size: 16px;
  }
`;

export const SectionTitle = styled.h1`
  text-shadow: 1px 1px 10px #000;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: fit-content;
  color: #fff;

  @media screen and (max-width: 767px) {
    padding-bottom: 5px;
  }
`;

export const Description = styled.div`
  margin: 0 auto;
  font-family: Times;
  letter-spacing: 0.5px;
  text-shadow: 0.1px 0.1px 10px #000;
  font-size: 22px;
  line-height: 150%;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  max-width: 55vw;
  margin-top: 10px;
  @media screen and (max-width: 767px) {
    max-width: 100vw;
    padding: 15px 0px 0px 0px !important;
    font-size: 1.1rem;
  }
`;

export const Button = styled.button`
  width: 500px;
  padding: 12px;
  background: transparent;
  border: 2px solid #E0B246;
  color: #FFF;
  font-family: 'Times New Roman', Times, serif;
  border-radius: 3.40426px;
  font-weight: bold;
  font-size: 22px;
  margin-top: 30px;
  transition: 0.5s;
  @media screen and (max-width: 767px) {
    font-size: 18px;
    width: 280px;
  }
  cursor: pointer;
  z-index: 9;
  -webkit-transform:translateX(0px);
  -moz-transform:translateX(0px);
  transform:translateY(0px) -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: rgba(0, 0, 0 , 0.3);
    border: 2px solid rgba(255, 255, 255, 0.9);
    color: #FFFFFF;
    transition: 0.5s;
    opacity: 1;
    -webkit-transform:translateY(-200%);
    -moz-transform:translateY(-200%);
    transform:translateY(-20%);
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
`;

export const ButtonWrapper = styled.div`
  max-width: 68%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1700px) {
    max-width: 100%;
    font-size: 16px;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    font-size: 16px;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;

export const PhotosWrapper = styled.div`
  display: flex;
  padding-top: 40px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const SquarePhotoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  width: 35vw;
  margin: 0 20px;

  @media screen and (max-width: 767px) {
    width: 40vw;
    alingn-items: center;
    justify-content: center;
  }
`;

export const SquareFirstPhoto = styled.div`
  background: url('images/operation/square-lines-first.svg'), #E0B246;
  border-radius: 20px;
  width: 100%;
  height: 80%;
  text-align: center;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 767px) {
  }
`;

export const SquareSecondPhoto = styled.div`
  background: url('images/operation/square-lines-second.svg'), #E0B246;
  border-radius: 20px;
  width: 100%;
  height: 80%;
  text-align: center;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 767px) {
  }
`;

export const Photo = styled.img`
  z-index: 99;
  margin: auto;

  @media screen and (max-width: 767px) {
    width: 50vw;
  }
`;

export const SquarePhotoDescription = styled.span`
  font-family: Kalam;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 150%;
  text-align: center;
  color: #3C3B3B;

  @media screen and (max-width: 767px) {
    font-size: 24px;
    max-width: 40vw;
  }
`;

export const ArrowPhoto = styled.img`
  margin-top: 10px;
  width: 100%;
`;

export const Action = styled.button`
  font-family: IBMPlexSansBold;
  background: #E0B246;
  border: 1.70213px solid #E0B246;
  box-sizing: border-box;
  border-radius: 3.40426px;
  color: #fff;
  font-size: 18.7234px;
  line-height: 18px;
  padding: 20px;
  margin-top: 50px;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }

  @media screen and (max-width: 767px) {
    max-width: 100vw;
    margin-left: 15px;
    margin-right: 15px;
    font-size: 14px !important;
  }
`;

export const MobileContentRight = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const MobileContentLeft = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

