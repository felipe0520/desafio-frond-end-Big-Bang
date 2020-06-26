import React from "react";
import { Subtitle, Product, Title, Price } from "./styled.js";

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <img src={props.url} />
      <Product>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </Product>
      <Price>{props.price}</Price>
    </div>
  );
};

export default Card;
