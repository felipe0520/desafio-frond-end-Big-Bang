import styled from "styled-components";

export const WrapperCardSecondary = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  max-height: 338px;
  width: 384px;
`;

export const Date = styled.p`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #73a8a0;
`;
export const Title = styled.h3`
  margin: 0 22px 20px 22px;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
`;

export const Description = styled.p`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  max-width: 344px;
  margin-top: 0;
`;
export const Arrow = styled.p`
  color: #73a8a0;
  width: 15px;
`;

export const ArrowPlay = styled.div`
  display: flex;
  justify-content: center;
  right: 10px;
  top: 19px;
  background: #73a8a0;
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

export const WrapperFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 22px;
`;

export const Duration = styled.p`
  margin: 0;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  max-width: 344px;
`;
