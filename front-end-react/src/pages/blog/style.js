import styled from "styled-components";

export const WrapperBlogPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 120px;
`;

export const WrapperPublications = styled.div`
  width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  @media (max-width: 1330px) {
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 24px;
  }
`;

export const WrapperPublicationsSecondary = styled.div`
  width: 1200px;
  height: 519px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  @media (max-width: 1050px) {
    width: 100vw;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    height: 1000px;
    border: 1px solid red;
  }
`;
