import React from "react";
import SVG from "react-inlinesvg";

const First = () => <SVG src={require("../svg/menu/FirstLetter.svg")} />;
const Second = () => <SVG src={require("../svg/menu/SecondLetter.svg")} />;
const Third = () => <SVG src={require("../svg/menu/ThirdLetter.svg")} />;
const Fourth = () => <SVG src={require("../svg/menu/FourthLetter.svg")} />;
const Fifth = () => <SVG src={require("../svg/menu/FifthLetter.svg")} />;

const Logo = () => {
  return (
    <div>
      {First()}
      {Second()}
      {Third()}
      {Fourth()}
      {Fifth()}
    </div>
  );
};

export default Logo;
