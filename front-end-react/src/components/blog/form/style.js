import styled from "styled-components";

export const WrapperForm = styled.form`
  border: 1px solid black;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.p`
  font-family: Chloe;
  font-style: normal;
  font-weight: bolder;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  max-width: 220px;
  margin: 50px 0 20px 0;
  color: #000000;
`;

export const FormSubTitle = styled.p`
  font-size: 18px;
  font-family: Proxima Nova;
  margin: 0;
`;

export const FormInput = styled.input`
  border: 1px solid #666666;
  box-sizing: border-box;
  width: 303px;
  height: 50px;
  margin: 50px 0 30px 0;
`;

export const FormButton = styled.button`
  display: block;
  background-color: white;
  width: 139px;
  height: 50px;
  border: 1px solid #000000;
  box-sizing: border-box;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 82px;
`;

export const FormDescription = styled.p`
  font-size: 13px;
  max-width: 329px;
`;
