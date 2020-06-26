import React from "react";
import SVG from "react-inlinesvg";
import { WrapperLogo, First, Second, Third, Fourth, Fifth } from "./styled";

// const First = () => <SVG src={require("../../svg/logo/FirstLetter.svg")} />;
// const Second = () => <SVG src={require("../../svg/logo/SecondLetter.svg")} />;
// const Third = () => <SVG src={require("../../svg/logo/ThirdLetter.svg")} />;
// const Fourth = () => <SVG src={require("../../svg/logo/FourthLetter.svg")} />;
// const Fifth = () => <SVG src={require("../../svg/logo/FifthLetter.svg")} />;

const Logo = () => {
  return (
    <WrapperLogo>
      <First src={require("../../svg/logo/FirstLetter.svg")} />
      <Second src={require("../../svg/logo/SecondLetter.svg")} />
      <Third src={require("../../svg/logo/ThirdLetter.svg")} />
      <Fourth src={require("../../svg/logo/FourthLetter.svg")} />
      <Fifth src={require("../../svg/logo/FifthLetter.svg")} />
    </WrapperLogo>
  );
};

export default Logo;
