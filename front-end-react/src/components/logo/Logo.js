import React from "react";
import { WrapperLogo, First, Second, Third, Fourth, Fifth } from "./style";

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
