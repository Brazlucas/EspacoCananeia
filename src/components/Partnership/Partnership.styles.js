import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
   margin-bottom: 50px;
  }
`;

export const Container = styled.div`
  text-align: center;
  margin-top: 180px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
`;

export const LogosWrapper = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;

  @media screen and (max-width: 767px) {
    max-width: 100%;
    display: block;
  }
`;

export const LogoMobileRow = styled.div`
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
  display: flex;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
  }
`;

export const Logo = styled.img`
  height: 200px;
  @media screen and (max-width: 767px) {
    max-width: 40%;
  }
`;
