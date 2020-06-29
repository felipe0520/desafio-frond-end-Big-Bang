import React from "react";
import { Wrapper, TextFild, WrapperMenu } from "./style";
import Logo from "../../components/logo/Logo";
import WrapperButtonHeader from "../../components/header/WrapperButtonHeader";

const Header = () => {
  return (
    <Wrapper>
      <WrapperMenu>
        <TextFild> Contato</TextFild>
        <TextFild>Podcast</TextFild>
        <TextFild>Loja</TextFild>
        <TextFild>Blog</TextFild>
        <TextFild>Inicio</TextFild>
      </WrapperMenu>
      <Logo />
      <WrapperButtonHeader />
    </Wrapper>
  );
};

export default Header;
