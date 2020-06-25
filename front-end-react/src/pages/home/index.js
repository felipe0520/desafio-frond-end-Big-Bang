import React from "react";
import {
  Welcome,
  WrapperHomePage,
  WrapperImagensSecondary,
  WrapperImagensGrid,
  PrimaryImagemGrid,
  WrapperProducts,
  WrapperImagens,
  Title,
} from "./style";
import Card from "../../components/homePage/Card.js";
import TitlePage from "../../components/TitlePage/TitlePage";

const HomePage = () => {
  return (
    <WrapperHomePage>
      <Welcome src={require("../../svg/imgHome/Welcome.svg")}></Welcome>
      <WrapperImagens>
        <WrapperImagensSecondary>
          <img src={require("../../svg/imgHome/PrincipalImage.svg")} />
          <WrapperImagensGrid>
            <PrimaryImagemGrid
              src={require("../../svg/imgHome/grid/PrimaryImageGrid.svg")}
            />
            <img src={require("../../svg/imgHome/grid/SecondImageGrid.svg")} />
            <img src={require("../../svg/imgHome/grid/ThirdImageGrid.svg")} />
          </WrapperImagensGrid>
        </WrapperImagensSecondary>
      </WrapperImagens>
      <WrapperProducts>
        <div>
          <p>Nossos especialistas </p>
          <h3>recomendam</h3>
        </div>
        <Card
          title="Livro Acenda a Sua Luz"
          subtitle="Carol Rache"
          price="R$ 54,00"
          url={require("../../svg/imgHome/products/Book.svg")}
        />
        <Card
          title="Camisa solidária"
          subtitle="Tamanho único"
          price="R$ 149,00"
          url={require("../../svg/imgHome/products/T-shirt.svg")}
        />
        <Card
          title="Tapete Viagem Pássaro"
          price="R$ 237,00"
          url={require("../../svg/imgHome/products/Carpet.svg")}
        />
        <Card
          title="Livro Acenda a Sua Luz"
          subtitle="Carol Rache"
          price="R$ 54,00"
          url={require("../../svg/imgHome/products/Book.svg")}
        />

        <Card
          title="Camisa solidária"
          subtitle="Tamanho único"
          price="R$ 149,00"
          url={require("../../svg/imgHome/products/T-shirt.svg")}
        />
        <Card
          title="Tapete Viagem Pássaro"
          price="R$ 237,00"
          url={require("../../svg/imgHome/products/Carpet.svg")}
        />
      </WrapperProducts>
      <Title />
    </WrapperHomePage>
  );
};

export default HomePage;
