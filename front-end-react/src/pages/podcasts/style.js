import styled from "styled-components";

export const WrapperPodcastsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  @media (max-width: 1050px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 24px;
  }
`;
