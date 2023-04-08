import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
   margin-bottom: 50px;
  }
`;

export const CardapioWrapper = styled.div`
  width: 90%;
  display: table;
  margin: 0 auto;
  justify-content: center;
`;

export const Container = styled.div`
  text-align: center;
  padding-top: 100px;
`;

export const ListWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 5%;

  @media screen and (max-width: 767px) {
    margin: 0 10%;
  }
`;

export const ListItem = styled.span`
  font-family: IBMPlexSans;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #3C3B3B;
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const SecurityInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const SecutiryIconWrapper = styled.div`
  width: 110%;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 767px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const SecurityDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 90px;
  justify-content: center;
  text-align: left;
  padding-right: 10vw;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0 20px !important;
    margin: 0 !important;
    text-align: center;
  }
`;

export const SecurityDescription = styled.span`
  font-family: IBMPlexSans;
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 150%;
  color: #3C3B3B;

  @media screen and (max-width: 767px) {
    font-size: 16px !important;
  }
`;

export const SecurityDescriptionTitle = styled.span`
  font-family: IBMPlexSansBold;
  font-weight: 600;
  font-size: 28px;
  line-height: 150%;
  color: #3C3B3B;

  @media screen and (max-width: 767px) {
    font-size: 20px !important;
  }
`;
