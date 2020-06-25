import React from "react";
import SVG from "react-inlinesvg";
import { WrapperButton } from "./WrapperButtonHeaderStyle";

const WrapperButtonHeader = () => {
  const Search = () => <SVG src={require("../svg/buttonsHeader/Search.svg")} />;
  const Profile = () => (
    <SVG src={require("../svg/buttonsHeader/Profile.svg")} />
  );
  const Box = () => <SVG src={require("../svg/buttonsHeader/Box.svg")} />;
  const Heart = () => <SVG src={require("../svg/buttonsHeader/Heart.svg")} />;
  const Cart = () => <SVG src={require("../svg/buttonsHeader/Cart.svg")} />;
  const Exit = () => <SVG src={require("../svg/buttonsHeader/Exit.svg")} />;
  return (
    <WrapperButton>
      <Search />
      <Profile />
      <Box />
      <Heart />
      <Cart />
      <Exit />
    </WrapperButton>
  );
};

export default WrapperButtonHeader;
