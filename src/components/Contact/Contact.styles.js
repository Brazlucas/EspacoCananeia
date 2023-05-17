import styled from 'styled-components';

export const Container = styled.div`
  padding: 100px;
  background: #1C1C1C;
  display: flex;
  position: relative;
  flex-direction: row;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 100px 20px !important;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`;

export const Title = styled.span`
  font-size: 38px;
  line-height: 150%;
  color: #FFF;
  font-family: Poppins-Bold;

  @media screen and (max-width: 767px) {
    font-size: 28px !important;
  }
`;

export const Description = styled.span`
  font-size: 22px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.5);
  font-family: IBMPlexSans;
  @media screen and (max-width: 767px) {
    font-size: 16px !important;
  }
`;

export const SocialNetwork = styled.div`
  cursor: pointer;
  display: flex;
  gap: 15px;
  img {
    margin-top: 20px;
    background: #E0B246;
    border: 2px solid #E0B246;
    padding: 20px;
    opacity: 0.9;
    transition: 0.5s;
    -webkit-transform:translateY(0px);
    -moz-transform:translateY(0px);
    transform:translateY(0px) -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;

    &:hover {
      background: rgba(255, 255, 255, 0.5);
      border: 2px solid white;
      color: #fff;
      transition: 0.5s;
      opacity: 1;
      -webkit-transform:translateY(-200%);
      -moz-transform:translateY(-200%);
      transform:translateY(-10%);
      -webkit-transition: all 0.5s ease-in-out;
      -moz-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
    }
  }
`;


export const BackgroundLines = styled.div`
  border-bottom: 1px solid #E0B246;
  border-left: 1px solid #E0B246;
  border-bottom-left-radius: 15.0125px;
  left: 50px;
  top: 0;
  width: 100vw;
  height: 80%;
  position: absolute;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const BackgroundLinesDown = styled.div`
  border: 1px solid #E0B246;
  border-bottom: 0;
  border-top-left-radius: 15.0125px;
  border-top-right-radius: 15.0125px;
  left: 15px;
  width: 50vw;
  height: 30%;
  bottom: 0;
  position: absolute;
  z-index: 99;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
