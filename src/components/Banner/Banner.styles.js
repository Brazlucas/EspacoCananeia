import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  @media screen and (max-width: 767px) {
    z-index: -1;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('images/benefits/12618f05-0f09-41d0-a550-1ac89835afb6.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  padding-bottom: 170px;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 767px) {
    border-radius: 0;
    padding-bottom: 0px;
  }
`;

export const Address = styled.div`
  position: relative;
  text-shadow: 1px 1px 20px #000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background: linear-gradient(#B59031 40%, #614D1E 100%);
`;

export const InfoWrapper = styled.div`
  position: relative;
  padding: 60px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background: linear-gradient(#1C1C1C, #000);

  @media screen and (max-width: 767px) {
    padding: 15px;
  }
`;

export const Info = styled.div`
  position: relative;
  gap: 8%;
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 767px) {
    gap: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

export const InfoText = styled.div`
  letter-spacing: 1px;
  line-height: 30px;
  padding: 15px;
  text-align: center;
  font-size: 1.2rem;
  margin: 0 auto;
  color: #fff;
  font-family: Times;

  span {
    color: rgba(255, 255, 255, 0.7);
  }

  h4 {
    margin-bottom: 8px;
  }

  @media screen and (max-width: 767px) {
      width: 100%;
    span {
      text-align: center;
      letter-spacing: normal !important;
    }
  }
`;

export const AddressSpan = styled.span`
  font-family: Times;
  font-size: 28px !important;
  line-height: 135%;
  letter-spacing: 2px;
  padding: 15px;
  text-align: center;
  font-size: 25px;
  margin: 0 auto;
  color: #fff;
`;

export const DescriptionWrapper = styled.div`
  width: 65%;
  padding-left: 80px;
  border: 1px solid transparent;

  @media screen and (max-width: 767px) {
    padding: 40px;
    width: 100%;
  }
`;

export const Title = styled.div`
  font-family: Times;
  font-size: 4vw;
  line-height: 135%;
  color: #fff;
  text-shadow: 2px 2px 20px #000;
  margin-top: 200px;
  z-index: 9;
  position: sticky;

  @media screen and (max-width: 767px) {
    font-size: 40px;
    margin-top: 90px;
  }
`;

export const Blink = styled.div`
@keyframes blink-animation {
  to {
    opacity: 0%;
  }
}
@-webkit-keyframes blink-animation {
  to {
    opacity: 100%;
  }
}

@media screen and (max-width: 767px) {
  }
`

export const Action = styled.button`
  font-family: IBMPlexSansBold;
  padding: 15px 50px;
  background: transparent;
  border: 2px solid #E0B246;
  border-radius: 3.40426px;
  font-weight: bold;
  font-size: 18.7234px;
  line-height: 18px;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 6px #000;
  margin-bottom: 65px;
  margin-top: 50px;
  transition: 0.5s;
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
    -webkit-transform:translateX(-200%);
    -moz-transform:translateX(-200%);
    transform:translateX(20%);
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const BackgroundLines = styled.div`
  border: 1px solid #E0B246;
  border-top: 0;
  border-bottom-left-radius: 15.0125px;
  border-bottom-right-radius: 15.0125px;
  left: 250px;
  top: 0;
  width: 60%;
  height: 65%;
  position: absolute;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;