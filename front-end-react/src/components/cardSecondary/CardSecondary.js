import React from "react";
import {
  WrapperCardSecondary,
  WrapperFooter,
  Date,
  Title,
  Description,
  Arrow,
} from "./style";

const CardSecondary = (props) => {
  return (
    <WrapperCardSecondary>
      <img src={props.url} />
      <Date>{props.date}</Date>
      <Title>{props.title}</Title>
      <WrapperFooter>
        <Description>{props.description}</Description>
        <Arrow>&rarr;</Arrow>
      </WrapperFooter>
    </WrapperCardSecondary>
  );
};

export default CardSecondary;
