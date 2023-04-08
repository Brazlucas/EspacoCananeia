import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 120px;
  background: #1C1C1C;
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;

  @media screen and (max-width: 767px) {
    padding: 0 !important;
    margin-top: 40px;
  }
`;

export const FormItem = styled.div`
  margin-bottom: 20px;
  max-width: 400px;
  width: 100%;
`;

export const Forms = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.span`
  font-family: IBMPlexSansBold;
  font-weight: bold;
  font-size: 13px;
  color: #FFF;
`;

export const TextField = styled.input`
  font-family: IBMPlexSans;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #BFBEBE;
  padding: 5px 10px;
  font-size: 13px;
  line-height: 19px;
  border-radius: 2px;
  margin-top: 5px;

  position: sticky;
  flex: 999;
`;

export const Action = styled.button`
  width: 100%;
  font-family: IBMPlexSansBold;
  padding: 10px;
  cursor: pointer;
  background: #E0B246;
  border: 2px solid #E0B246;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #FFFFFF;
  z-index: 999;
  position: sticky;
  max-width: 400px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 30px;
  &:hover {
    opacity: 0.7;
  }
`;

export const Error = styled.div`
  color: #E0B246;
  font-family: IBMPlexSansBold;
  font-size: 14px;
`;

export const Loader = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #fff;
  width: 25px;
  height: 25px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  /* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export const SuccessLabel = styled.div`
  font-size: 18px;
  line-height: 150%;
  width: 100%;
  text-align: center;
  color: #3C3B3B;
  font-family: Poppins-Bold;

  @media screen and (max-width: 767px) {
    font-size: 14px !important;
  }
`;

export const ErrorLabel = styled.div`
  font-size: 18px;
  line-height: 150%;
  width: 100%;
  text-align: center;
  color: #E0B246;
  font-family: Poppins-Bold;

  @media screen and (max-width: 767px) {
    font-size: 14px !important;
  }
`;
