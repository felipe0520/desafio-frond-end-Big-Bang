import React from "react";
import { WrapperCardFooter } from "./style";

const CardFooter = (props) => {
  return (
    <WrapperCardFooter>
      <p>{props.title}</p>
      <p>{props.linkOne}</p>
      <p>{props.linkTwo}</p>
    </WrapperCardFooter>
  );
};

export default CardFooter;
