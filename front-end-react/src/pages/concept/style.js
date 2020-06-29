import styled from "styled-components";

export const WrapperConceptPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 383px;
  @media (max-width: 1330px) {
    height: auto;
    margin-bottom: 10px;
  }
`;

export const WrapperPhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
  @media (max-width: 1330px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 24px;
  }
`;
