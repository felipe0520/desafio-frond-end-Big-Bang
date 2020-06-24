import styled from "styled-components";
import "../../App.css";

export const Wrapper = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1920px;
  height: 106px;
  border: 1px solid green;
`;

export const WrapperLogo = styled.div`
  border: 1px solid red;
`;

export const WrapperMenu = styled.div`
  margin-left: 100px;
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  border: 1px solid red;
`;

export const WrapperButton = styled.div`
  margin-right: 100px;
  display: grid;
  gap: 70px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  border: 1px solid red;
`;

export const TextFild = styled.span`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height */

  text-transform: uppercase;

  color: #666666;
`;
