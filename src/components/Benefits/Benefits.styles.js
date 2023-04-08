import styled from 'styled-components';

export const Container = styled.div`
  scroll-behavior: smooth;
  text-align: center;
  padding-top: 130px;
  background-color: #1C1C1C;
  max-width: 100%;
`;

export const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 30px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const SectionWrapper = styled.div`
  padding: 120px 200px;
  opacity: 90%;
  background-color: black;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 767px) {
    padding: 50px !important;
    max-width: 100vw;
    padding: 0 15px;
    font-size: 16px;
  }
`;

export const Description = styled.div`
  margin: 0 auto;
  font-family: Times;
  letter-spacing: 0.5px;
  text-shadow: 0.1px 0.1px 10px #000;
  font-size: 22px;
  line-height: 150%;
  text-align: justify;
  color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  max-width: 87%;
  margin-top: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    max-width: 100vw;
    padding: 0px !important;
    font-size: 1.1rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  h1 {
    color: #fff;
  }

  @media screen and (max-width: 767px) {
   margin-bottom: 50px;
  }
`;

export const DivisorWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

