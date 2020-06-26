import React from "react";
import TitlePage from "../../components/TitlePage/TitlePage";
import {
  WrapperBlogPage,
  WrapperPublications,
  WrapperPublicationsSecondary,
} from "./styled";
import Publication from "../../components/blog/publication/Publication";
import PublicationSecondary from "../../components/blog/publicationSecondary/PublicationSecondary";
import Form from "../../components/blog/form/Form";
import ButtonFinalPage from "../../components/buttonFinalPage/ButtonFinalPage";

const BlogPage = () => {
  return (
    <WrapperBlogPage>
      <TitlePage name={"Blog"} />
      <WrapperPublications>
        <Publication
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          url={require("../../svg/blog/publicationPrimary/FirstPublication.svg")}
          subtitle={"desenvolvimento pessoal"}
          author={"por Fulano de Tal"}
        />
        <Publication
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          url={require("../../svg/blog/publicationPrimary/SecondPublication.svg")}
          subtitle={"desenvolvimento pessoal"}
          author={"por Fulano de Tal"}
        />
      </WrapperPublications>
      <WrapperPublicationsSecondary>
        <PublicationSecondary
          title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit "}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.."
          }
          type={"Viagem"}
          url={require("../../svg/blog/publicationSecondary/PublicationSecondaryFirst.svg")}
        />
        <PublicationSecondary
          title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit "}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.."
          }
          type={"Viagem"}
          url={require("../../svg/blog/publicationSecondary/PublicationSecondarySecond.svg")}
        />

        <Form
          title={"Namah no seu e-mail"}
          subtitle={"Assine nossa newsletter"}
          placeholder={"Seu email"}
          nameButton={"Assinar"}
          description={` Ao clicar em “assinar”, você concorda em receber e-mails do Espaço Namah a aceita nossos Termos de Uso e nossas Políticas de Privacidade.`}
        />
      </WrapperPublicationsSecondary>
      <ButtonFinalPage name={"Veja todos os posts"} />
    </WrapperBlogPage>
  );
};

export default BlogPage;
