import React from "react";
import { Title, TitleName } from "./styled";

const TitlePage = (props) => {
  return (
    <Title>
      <TitleName>{props.name}</TitleName>
    </Title>
  );
};

export default TitlePage;
