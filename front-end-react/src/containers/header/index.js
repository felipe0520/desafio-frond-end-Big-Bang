import React from "react";
import { Wrapper, TextFild, WrapperMenu } from "./styled";
import Logo from "../../components/Logo";
import WrapperButtonHeader from "../../components/WrapperButtonHeader";

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
