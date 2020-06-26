import styled from "styled-components";

export const WrapperManahPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const WrapperProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  text-align: center;
`;

export const ButtonCurrentItens = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #73a8a0;
  border: none;
  margin-right: 5px;
`;

export const ButtonNextItens = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: none;
  margin-left: 5px;
`;
