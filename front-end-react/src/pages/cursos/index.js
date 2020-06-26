import React from "react";
import { WrapperCursosPage, WrapperCards } from "./styled";
import CardSecondary from "../../components/cardSecondary/CardSecondary";
import TitlePage from "../../components/TitlePage/TitlePage";
import ButtonFinalPage from "../../components/buttonFinalPage/ButtonFinalPage";

const CursosPage = () => {
  return (
    <WrapperCursosPage>
      <TitlePage name="Cursos" />
      <WrapperCards>
        <CardSecondary
          url={require("../../svg/cursos/Curse.svg")}
          date=" 04 Abr - 05 Abr "
          title="Imersão Vinyasa Flow"
          description=" Por Fernanda Cunha 2 dias de curso *"
        />
        <CardSecondary
          url={require("../../svg/cursos/Curse.svg")}
          date=" 04 Abr - 05 Abr "
          title="Imersão Vinyasa Flow"
          description=" Por Fernanda Cunha 2 dias de curso *"
        />
        <CardSecondary
          url={require("../../svg/cursos/Curse.svg")}
          date=" 04 Abr - 05 Abr "
          title="Imersão Vinyasa Flow"
          description=" Por Fernanda Cunha 2 dias de curso *"
        />
      </WrapperCards>
      <ButtonFinalPage name="Veja todos os cursos" />
    </WrapperCursosPage>
  );
};

export default CursosPage;
