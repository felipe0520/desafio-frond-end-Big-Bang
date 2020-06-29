import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 187px;
  background-color: black;
`;

export const WrapperFooter = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 258px;
  background-color: black;
  color: white;
`;

export const WrapperSecondary = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 70px;
  background-color: black;
`;

export const FormFooter = styled.form`
  color: white;

  @media (max-width: 1400px) {
    width: 15vw;
  }
`;

export const InputForm = styled.input`
  width: 371px;
  height: 43px;
  @media (max-width: 1400px) {
    width: 10vw;
    margin-right: 0;
  }
`;

export const ButtonForm = styled.button`
  background: #000000;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 15px;
  border: 1px solid #fff;
  width: 121px;
  height: 43px;
  color: white;
  margin-left: 54px;
  margin-right: 100px;
  text-align: center;
  @media (max-width: 900px) {
    width: 70px;
    margin-right: 0;
  }
`;

export const PadLockDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
`;
