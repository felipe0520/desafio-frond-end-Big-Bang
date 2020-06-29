import styled from "styled-components";

export const WrapperPublication = styled.div`
  position: relative;
  @media (max-width: 1050px) {
    text-align: center;
  }
`;

export const PublicationImage = styled.img``;

export const Title = styled.label`
  color: white;
  position: absolute;
  font-size: 36px;
  top: 271px;
  left: 20px;
  width: 500px;
`;

export const Author = styled.label`
  color: white;
  position: absolute;
  font-size: 14px;
  top: 360px;
  width: 180px;
  left: 260px;
`;

export const Subtitle = styled.label`
  color: white;
  position: absolute;
  font-size: 14px;
  text-decoration-line: underline;
  text-transform: uppercase;
  top: 360px;
  width: 300px;
  left: 20px;
`;
