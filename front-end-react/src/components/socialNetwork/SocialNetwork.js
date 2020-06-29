import React from "react";
import { WrapperSocialNetwork } from "./style";
const SocialNetwork = () => {
  return (
    <WrapperSocialNetwork>
      <img src={require("../../svg/footer/socialNetwork/Instagram.svg")} />
      <img src={require("../../svg/footer/socialNetwork/Facebook.svg")} />
      <img src={require("../../svg/footer/socialNetwork/Twitter.svg")} />
    </WrapperSocialNetwork>
  );
};

export default SocialNetwork;
