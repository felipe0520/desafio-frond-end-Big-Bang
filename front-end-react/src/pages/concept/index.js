import React from "react";
import { WrapperConceptPage, WrapperPhotos } from "./styled";
import TitlePage from "../../components/TitlePage/TitlePage";

const ConceptPage = () => {
  return (
    <WrapperConceptPage>
      <TitlePage name={"@namah.concept"} />
      <WrapperPhotos>
        <img src={require("../../svg/concept/FirstPhoto.svg")} />
        <img src={require("../../svg/concept/SecondPhoto.svg")} />
        <img src={require("../../svg/concept/ThirdPhoto.svg")} />
        <img src={require("../../svg/concept/FourthPhoto.svg")} />
        <img src={require("../../svg/concept/FifthPhoto.svg")} />
        <img src={require("../../svg/concept/SixthPhoto.svg")} />
      </WrapperPhotos>
    </WrapperConceptPage>
  );
};

export default ConceptPage;
