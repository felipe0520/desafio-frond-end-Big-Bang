import React from "react";
import {
  Product,
  Subtitle,
  ProductInfo,
  Title,
  Price,
  Heart,
  HeartFiled,
} from "./styled.js";

const Card = (props) => {
  return (
    <Product>
      {props.heartFiled && (
        <HeartFiled heart={props.heart}>
          <img src={require("../../svg/mamahShop/icon/Heart.svg")} />
        </HeartFiled>
      )}

      {props.heart && (
        <Heart heart={props.heart}>
          <img src={require("../../svg/mamahShop/icon/Heart.svg")} />
        </Heart>
      )}

      <img src={props.url} />
      <ProductInfo>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </ProductInfo>
      <Price>{props.price}</Price>
    </Product>
  );
};

export default Card;
