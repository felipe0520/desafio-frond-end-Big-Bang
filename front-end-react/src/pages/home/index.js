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
import Card from "../../components/home/Card.js";

const HomePage = () => {
  return (
    <WrapperHomePage>
      <Welcome src={require("../../svg/home/Welcome.svg")}></Welcome>
      <WrapperImagens>
        <WrapperImagensSecondary>
          <img src={require("../../svg/home/PrincipalImage.svg")} />
          <WrapperImagensGrid>
            <PrimaryImagemGrid
              src={require("../../svg/home/grid/PrimaryImageGrid.svg")}
            />
            <img src={require("../../svg/home/grid/SecondImageGrid.svg")} />
            <img src={require("../../svg/home/grid/ThirdImageGrid.svg")} />
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
          url={require("../../svg/home/products/Book.svg")}
        />
        <Card
          title="Camisa solidária"
          subtitle="Tamanho único"
          price="R$ 149,00"
          url={require("../../svg/home/products/T-shirt.svg")}
        />
        <Card
          title="Tapete Viagem Pássaro"
          price="R$ 237,00"
          url={require("../../svg/home/products/Carpet.svg")}
        />
        <Card
          title="Livro Acenda a Sua Luz"
          subtitle="Carol Rache"
          price="R$ 54,00"
          url={require("../../svg/home/products/Book.svg")}
        />

        <Card
          title="Camisa solidária"
          subtitle="Tamanho único"
          price="R$ 149,00"
          url={require("../../svg/home/products/T-shirt.svg")}
        />
        <Card
          title="Tapete Viagem Pássaro"
          price="R$ 237,00"
          url={require("../../svg/home/products/Carpet.svg")}
        />
      </WrapperProducts>
      <Title />
    </WrapperHomePage>
  );
};

export default HomePage;
