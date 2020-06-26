import React from "react";
import {
  WrapperForm,
  FormTitle,
  FormSubTitle,
  FormInput,
  FormButton,
  FormDescription,
} from "./style";

const disableDefault = (e) => {
  e.preventDefault();
};

const Form = (props) => {
  return (
    <WrapperForm onSubmit={disableDefault}>
      <FormTitle>{props.title}</FormTitle>
      <FormSubTitle>{props.subtitle}</FormSubTitle>
      <FormInput placeholder={props.placeholder} />
      <FormButton type="submit">{props.nameButton}</FormButton>
      <FormDescription>{props.description}</FormDescription>
    </WrapperForm>
  );
};

export default Form;
