import styled from 'styled-components';

export const Container = styled.div`
  background: #3C3B3B;
  padding: 20px 20px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const LogoWrapper = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
  }
`;

export const Logo = styled.img`
  max-width: 150px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const AddressColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 60px;

  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const MenuItem = styled.span`
  font-family: IBMPlexSansBold;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  a {
    color: #FFFFFF;
  }
`;

export const EmailLabel = styled.div`
  font-family: IBMPlexSansBold;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const Email = styled.div`
  font-family: IBMPlexSansBold;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  color: #FFFFFF;
`;

export const Telefone = styled.div`
  font-family: IBMPlexSansBold;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #FFFFFF;
`;

export const AddressTitle = styled.div`
  font-family: Poppins-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 10px;

  @media screen and (max-width: 767px) {
    margin-top: 30px;
  }
`;

export const Address = styled.span`
  font-family: IBMPlexSans;
  font-size: 13px;
  line-height: 24px;
  color: #FFFFFF;
`;

export const Unity = styled.span`
  font-family: IBMPlexSansBold;
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  color: #FFFFFF;
`;

export const CopyrightRow = styled.div`
  font-family: IBMPlexSansBold;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
  padding: 5px;
  background: #292929;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;
