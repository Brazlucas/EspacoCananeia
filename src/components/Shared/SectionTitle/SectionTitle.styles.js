import styled from 'styled-components';

export const TitleWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: fit-content;

  @media screen and (max-width: 767px) {
    padding: 0 30px;
  }
`;

export const Title = styled.div`
  color: #000;
  font-weight: bold;
  font-size: 38px;
  line-height: 150%;
  font-family: Poppins-Bold;

  @media screen and (max-width: 767px) {
    font-size: 26px;
    text-align: center;
  }
`;
