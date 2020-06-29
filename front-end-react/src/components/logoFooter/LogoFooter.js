import React from "react";
import { WrapperLogo, First, Second, Third, Fourth, Fifth } from "./style";

const LogoFooter = () => {
  return (
    <WrapperLogo>
      <First src={require("../../svg/footer/logo/FirstLetter.svg")} />
      <Second src={require("../../svg/footer/logo/SecondLetter.svg")} />
      <Third src={require("../../svg/footer/logo/ThirdLetter.svg")} />
      <Fourth src={require("../../svg/footer/logo/FourthLetter.svg")} />
      <Fifth src={require("../../svg/footer/logo/FifthLetter.svg")} />
    </WrapperLogo>
  );
};

export default LogoFooter;
