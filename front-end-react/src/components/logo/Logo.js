import React from "react";
import { WrapperLogo } from "./style";

const Logo = () => {
  return (
    <WrapperLogo>
      <img src={require("../../svg/logo/FirstLetter.svg")} />
      <img src={require("../../svg/logo/SecondLetter.svg")} />
      <img src={require("../../svg/logo/ThirdLetter.svg")} />
      <img src={require("../../svg/logo/FourthLetter.svg")} />
      <img src={require("../../svg/logo/FifthLetter.svg")} />
    </WrapperLogo>
  );
};

export default Logo;
