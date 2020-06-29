import React from "react";
import { WrapperConceptPage, WrapperPhotos } from "./style";
import TitlePage from "../../components/TitlePage/TitlePage";

const ConceptPage = () => {
  return (
    <WrapperConceptPage>
      <TitlePage name={"@namah.concept"} />
      <WrapperPhotos>
        <img src={require("../../svg/concept/ThirdPhoto.svg")} />
        <img src={require("../../svg/concept/ThirdPhoto.svg")} />
        <img src={require("../../svg/concept/ThirdPhoto.svg")} />
        <img src={require("../../svg/concept/ThirdPhoto.svg")} />
        <img src={require("../../svg/concept/ThirdPhoto.svg")} />
        <img src={require("../../svg/concept/ThirdPhoto.svg")} />
      </WrapperPhotos>
    </WrapperConceptPage>
  );
};

export default ConceptPage;
