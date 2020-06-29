import React from "react";
import { WrapperPaymentMethod, WrapperIcons } from "./style";
const PaymentMethod = () => {
  return (
    <WrapperPaymentMethod>
      <p>Formas de pagamento:</p>
      <WrapperIcons>
        <img src={require("../../svg/footer/paymentMethod/Visa.svg")} />
        <img src={require("../../svg/footer/paymentMethod/Mastercard.svg")} />
        <img src={require("../../svg/footer/paymentMethod/Rede.svg")} />
        <img src={require("../../svg/footer/paymentMethod/American.svg")} />
        <img src={require("../../svg/footer/paymentMethod/Bilet.svg")} />
      </WrapperIcons>
    </WrapperPaymentMethod>
  );
};

export default PaymentMethod;
