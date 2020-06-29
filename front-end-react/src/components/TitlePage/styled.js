import styled from "styled-components";

export const Title = styled.fieldset`
  border-top: 1px solid #c4c4c4;
  border-bottom: none;
  border-left: none;
  border-right: none;
  display: block;
  text-align: center;
  width: 1200px;
  margin-top: 120px;

  @media (max-width: 1035px) {
    width: 100vw;
  }
`;

export const TitleName = styled.legend`
  padding: 5px 10px;
  font-size: 48px;
  text-align: center;
`;
