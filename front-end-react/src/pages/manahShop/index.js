import React from "react";
import TitlePage from "../../components/TitlePage/TitlePage";
import {
  WrapperManahPage,
  WrapperProducts,
  ButtonCurrentItens,
  ButtonNextItens,
} from "./style";
import Card from "../../components/home/Card";
import ButtonFinalPage from "../../components/buttonFinalPage/ButtonFinalPage";

const MamahShop = () => {
  return (
    <WrapperManahPage>
      <TitlePage name="Namah Shop" />
      <WrapperProducts>
        <Card
          title="Ovo de Páscoa de Paçoca"
          subtitle=" Lorem ipsum dolor"
          price="R$ 65,00"
          url={require("../../svg/mamahShop/products/EasterEgg.svg")}
          heartFiled
        />
        <Card
          title="Chantighee com Wasabi 200g"
          subtitle=" Lorem ipsum dolor"
          price="R$ 32,00"
          url={require("../../svg/mamahShop/products/Chantighee.svg")}
          heart
        />
        <Card
          title="Shampoo Sólido Namah"
          subtitle=" Lorem ipsum dolor"
          price="R$ 49,00"
          url={require("../../svg/mamahShop/products/Shampoo.svg")}
          heartFiled
        />
        <Card
          title="/Condicionador Namah "
          subtitle=" Lorem ipsum dolor"
          price="R$ 69,00"
          url={require("../../svg/mamahShop/products/Conditioner.svg")}
          heartFiled
        />
      </WrapperProducts>

      <div>
        <ButtonCurrentItens /> <ButtonNextItens />
      </div>

      <ButtonFinalPage name="Veja todos os produtos" />
    </WrapperManahPage>
  );
};

export default MamahShop;
