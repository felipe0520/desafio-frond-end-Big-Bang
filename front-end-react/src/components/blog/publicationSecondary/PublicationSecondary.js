import React from "react";
import {
  WrapperPublicationSecondaty,
  PublicationImageSecondary,
  Title,
  Description,
  Type,
} from "./styled";

const PublicationSecondary = (props) => {
  return (
    <WrapperPublicationSecondaty>
      <PublicationImageSecondary src={props.url} />
      <Title> {props.title} </Title>
      <Type>{props.type}</Type>
      <Description> {props.description} </Description>
    </WrapperPublicationSecondaty>
  );
};

export default PublicationSecondary;
