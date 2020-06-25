import React from "react";
import SVG from "react-inlinesvg";

const First = () => <SVG src={require("../svg/logo/FirstLetter.svg")} />;
const Second = () => <SVG src={require("../svg/logo/SecondLetter.svg")} />;
const Third = () => <SVG src={require("../svg/logo/ThirdLetter.svg")} />;
const Fourth = () => <SVG src={require("../svg/logo/FourthLetter.svg")} />;
const Fifth = () => <SVG src={require("../svg/logo/FifthLetter.svg")} />;

const Logo = () => {
  return (
    <div>
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
    </div>
  );
};

export default Logo;
