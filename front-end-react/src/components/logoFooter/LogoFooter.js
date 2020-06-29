import React from "react";
import { WrapperLogo } from "./style";

const LogoFooter = () => {
  return (
    <WrapperLogo>
      <img src={require("../../svg/footer/logo/FirstLetter.svg")} />
      <img src={require("../../svg/footer/logo/SecondLetter.svg")} />
      <img src={require("../../svg/footer/logo/ThirdLetter.svg")} />
      <img src={require("../../svg/footer/logo/FourthLetter.svg")} />
      <img src={require("../../svg/footer/logo/FifthLetter.svg")} />
    </WrapperLogo>
  );
};

export default LogoFooter;
