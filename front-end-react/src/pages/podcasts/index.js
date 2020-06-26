import React from "react";
import { WrapperPodcastsPage, WrapperCards } from "./styled";
import CardSecondary from "../../components/cardSecondary/CardSecondary";
import TitlePage from "../../components/TitlePage/TitlePage";
import ButtonFinalPage from "../../components/buttonFinalPage/ButtonFinalPage";

const PodcastsPage = () => {
  return (
    <WrapperPodcastsPage>
      <TitlePage name="Podcasts" />
      <WrapperCards>
        <CardSecondary
          url={require("../../svg/podcast/FirstPhoto.svg")}
          date=" 04 Abr - 05 Abr "
          title="Título do podcast lorem ipsum dolor sit amet, consectetur elit tempor ut labore magna aliqua et dolore"
          description="Descrição do episódio do podcast lorem ipsum dolor sit amet, consectetur elit tempor"
          arrowPlay
        />
        <CardSecondary
          url={require("../../svg/podcast/SecondPhoto.svg")}
          date=" 04 Abr - 05 Abr "
          title="Título do podcast lorem ipsum dolor sit amet, consectetur elit tempor ut labore magna aliqua et dolore"
          description=" Descrição do episódio do podcast lorem ipsum dolor sit amet, consectetur elit tempor"
          arrowPlay
        />
        <CardSecondary
          url={require("../../svg/podcast/ThirdPhoto.svg")}
          date=" 04 Abr - 05 Abr "
          title="Título do podcast lorem ipsum dolor sit amet, consectetur elit tempor ut labore magna aliqua et dolore"
          description=" Descrição do episódio do podcast lorem ipsum dolor sit amet, consectetur elit tempor"
          arrowPlay
        />
      </WrapperCards>
      <ButtonFinalPage name="Veja todos os podcasts" />
    </WrapperPodcastsPage>
  );
};

export default PodcastsPage;
