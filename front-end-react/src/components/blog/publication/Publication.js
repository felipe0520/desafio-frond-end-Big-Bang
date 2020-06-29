import React from "react";

import {
  PublicationImage,
  Title,
  WrapperPublication,
  Subtitle,
  Author,
} from "./style";

const Publication = (props) => {
  return (
    <WrapperPublication>
      <PublicationImage src={props.url} />
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
      <Author>{props.author}</Author>
    </WrapperPublication>
  );
};

export default Publication;
