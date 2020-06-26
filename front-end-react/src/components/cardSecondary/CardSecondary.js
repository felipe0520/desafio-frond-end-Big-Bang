import React from "react";
import {
  WrapperCardSecondary,
  WrapperFooter,
  Date,
  Title,
  Description,
  Duration,
  Arrow,
  ArrowPlay,
} from "./style";

const CardSecondary = (props) => {
  console.log(props);

  return (
    <WrapperCardSecondary>
      <img src={props.url} />
      <Date>{props.date}</Date>
      <Title>{props.title}</Title>
      <WrapperFooter>
        <div>
          <Duration>{props.duration}</Duration>
          <Description>{props.description}</Description>
        </div>
        {props.arrowPlay && (
          <ArrowPlay>
            <img src={require("../../svg/podcast/icon/Arrow.svg")} />
          </ArrowPlay>
        )}
        {props.arrowSimple && <Arrow>&rarr;</Arrow>}
      </WrapperFooter>
    </WrapperCardSecondary>
  );
};

export default CardSecondary;
