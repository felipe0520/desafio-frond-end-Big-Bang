import React from "react";
import {
  WrapperFooter,
  Wrapper,
  FormFooter,
  ButtonForm,
  InputForm,
  WrapperSecondary,
  PadLockDiv,
} from "./style";
import LogoFooter from "../../components/logoFooter/LogoFooter";
import SocialNetwork from "../../components/socialNetwork/SocialNetwork";
import CardFooter from "../../components/cardFooter/CardFooter";
import LineFooter from "../../components/lineFooter/LineFooter";
import PaymentMethod from "../../components/paymentMethod/PaymentMethod";

const Footer = () => {
  return (
    <WrapperFooter>
      <Wrapper>
        <LogoFooter />

        <SocialNetwork />
        <CardFooter
          title="Institucional"
          linkOne="Sobre nós"
          linkTwo="Contato"
        />
        <CardFooter
          title="Loja"
          linkOne="Cadastre-se"
          linkTwo="Área do lojista"
        />
        <CardFooter
          title="Atendimento"
          linkOne="Shello@espaconamah.com.br"
          linkTwo="(31) 2515 6200"
        />

        <FormFooter>
          <p>Assine nossa Newsletter</p>
          <div>
            <InputForm placeholder="Seu endereço de email" />{" "}
            <ButtonForm>ASSINAR</ButtonForm>
          </div>
        </FormFooter>
      </Wrapper>
      <LineFooter />
      <WrapperSecondary>
        <p>
          © 2020 Espaço Namah. Todos os direitos reservados. CNPJ:
          19.035.854/0001-31.
        </p>
        <PaymentMethod />
        <PadLockDiv>
          <img src={require("../../svg/footer/Padlock.svg")} />
          <p>Site seguro</p>
        </PadLockDiv>
        <p>Dúvidas frequentes | Políticas da Loja</p>
        <p>Site por BIG BANG SHOP</p>
      </WrapperSecondary>
    </WrapperFooter>
  );
};

export default Footer;
