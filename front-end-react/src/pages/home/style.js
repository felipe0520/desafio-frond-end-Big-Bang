import styled from "styled-components";

export const Welcome = styled.img`
  margin-top: 60px;
`;

export const WrapperHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const WrapperImagensSecondary = styled.div`
  display: flex;
  width: 100%;
  margin-top: 60px;
`;
export const WrapperImagensGrid = styled.div`
  display: grid;
  margin-left: 24px;
  gap: 24px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const PrimaryImagemGrid = styled.img`
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const WrapperProducts = styled.div`
  width: 1200px;
  margin-top: 10px;
  height: 210px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`;

export const WrapperImagens = styled.div`
  display: flex;
  width: 1200px;
  border: 1px solid red;
  justify-content: space-between;
`;

export const ImagemLeft = styled.img`
  position: absolute;
  left: 160px;
  bottom: 40%;
`;

export const ImagemRight = styled.img`
  position: absolute;
  right: 160px;
  bottom: 40%;
`;

export const Title = styled.fieldset`
  border-top: 1px solid #c4c4c4;
  border-bottom: none;
  border-left: none;
  border-right: none;
  display: block;
  text-align: center;
  width: 62.5%;
`;

export const TitleName = styled.legend`
  padding: 5px 10px;
  font-size: 48px;
`;
