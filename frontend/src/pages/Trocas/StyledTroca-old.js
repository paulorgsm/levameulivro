import styled, { css } from "styled-components";

export const StyledTroca = styled.div`

*{
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box
}

  body {
    height: 100vh;
    background-color: #fff;
  }

  button,
  select,
  option {
    cursor: pointer;
  }

  .prosseguir-pedido {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 35px;
    background-color: #4285f4;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    margin-top: 20px;
  }

  .passos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-around;
    align-content: center;
    margin: 20px;
  }

  .passo-um {
    flex-basis: 50%;
  }

  .passo-um h1 {
    width: 681px;
    height: 29px;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #34a853;
    margin-bottom: 10px;
  }

  .passo-um input {
    margin-top: -1.3ex;
  }

  .passo-um label {
    position: absolute;
    width: 642.99px;
    color: #000000;
    margin-bottom: 20px;
    padding-left: 0.5%;
  }

  .btns-endereco {
    margin-top: 2.1%;
    display: block;
    border: none;
  }

  .passo-um button {
    border-radius: 10px;
    background: #e0e0e0;
  }

  .btn-editar {
    width: 90px;
    height: 35px;
    border: none;
    margin-right: none;
    border: none;
  }

  .btn-apagar {
    width: 90px;
    height: 35px;
    border: none;
    margin-left: none;
    margin-left: -3%;
    border: none;
  }

  .btn-incluir {
    border: none;
    width: 227.23px;
    font-size: 14px;
    line-height: 24px;
    height: 35px;
    border-color: #4285f4;
    color: #4285f4;
    margin-left: 5%;
  }

  .passo-dois h1 {
    flex-basis: 50%;
    width: 422px;
    height: 29px;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #eb4335;
    margin-bottom: 10px;
  }

  .passo-dois h3 {
    width: 421px;
    height: 27px;
    font-size: 16px;
    line-height: 21px;
    color: #000000;
    margin-bottom: 20px;
  }

  .btn-solicitar-troca {
    border: none;
    width: 227.23px;
    background: #eb4335;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    height: 35px;
    text-align: center;
    color: #ffffff;
    border-radius: 10px;
  }

  /* BOTÃO OPÇÃO LIGA E DESLIGA */

  .pessoalmente {
    display: flex;
    margin-left: 5.1%;
    margin-bottom: 2%;
  }

  .btn-pessoalmente input[type="checkbox"] {
    border: none;
    position: absolute;
    width: 30px;
    height: 15px;
    -webkit-appearance: none;
    background-color: #828282;
    outline: none;
    border-radius: 20px;
    box-shadow: inset #34a853;
    transition: 0.2s;
  }

  .btn-pessoalmente input[type="checkbox"]::before {
    border: none;
    position: absolute;
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #fff;
    transform: scale(1.2);
    box-shadow: 0 2px 5px #828282;
    transition: 0.2s;
  }

  .btn-pessoalmente input:checked[type="checkbox"]::before {
    left: 15px;
  }

  .btn-pessoalmente input:checked[type="checkbox"] {
    background-color: #34a853;
  }

  .pessoalmente label {
    flex: 1;
    padding-right: -20%;
    margin-left: 35px;
  }

  /* FORMULARIO DE ENDEREÇO */

  fieldset {
    border: 0;
  }

  form {
    margin-top: -1%;
    /* position: absolute; */
    width: 130ex;
  }

  input {
    height: 35px;
  }

  .container {
    display: inline-block;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .container label {
    font-size: 16px;
    height: 22px;
    line-height: 24px;
    color: #000000;
  }

  .container input {
    border-radius: 10px;
    background: #e0e0e0;
  }

  .container input:placeholder-shown {
    font-size: 14px;
    line-height: 26px;
    color: #4f4f4f;
    padding-left: 12px;
    border: none;
  }

  /* CEP */

  .cep-checkbox {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-around;
    align-content: flex-start;
    margin-bottom: 1%;
    width: 440px;
    height: 73px;
  }

  .cep label {
    width: 122.96px;
    top: 1323px;
    margin-left: 18%;
  }

  .cep input {
    display: block;
    width: 201.57px;
    top: 1356px;
    margin-left: 18%;
  }

  .checkbox {
    align-self: flex-end;
  }

  .checkbox input[type="checkbox"] {
    width: 10.58px;
    height: 10.5px;
  }

  .checkbox label {
    width: 97.76px;
    font-size: 12px;
  }

  /* LOGRADOURO E NUMERO */

  .logradouro-numero {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-around;
    align-content: flex-start;
    margin-bottom: 1%;
    width: 1185px;
    height: 73px;
  }

  .logradouro label {
    width: 97.76px;
    margin-left: 3%;
  }

  .logradouro input {
    display: block;
    width: 600px;
    margin-left: 3%;
  }

  .numero label {
    width: 69.54px;
    margin-left: -20%;
  }

  .numero input {
    display: block;
    width: 201.57px;
    margin-left: -20%;
  }

  .checkbox-dois {
    align-self: flex-end;
  }

  .checkbox-dois input[type="checkbox"] {
    width: 10.58px;
    height: 10.5px;
    margin-left: -140%;
  }

  .checkbox-dois label {
    width: 97.76px;
    font-size: 12px;
  }

  /* COMPLEMENTO E BAIRRO */

  .complemento-bairro {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-around;
    align-content: flex-start;
    margin-bottom: 1%;
    width: 1185px;
    height: 73px;
  }

  .complemento label {
    width: 118.93px;
    margin-left: 5%;
  }

  .complemento input {
    display: block;
    width: 600px;
    margin-left: 5%;
  }

  .bairro label {
    width: 53.42px;
  }

  .bairro input {
    display: block;
    width: 431.36px;
  }

  /* CIDADE  ESTADO */

  .cidade-estado {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-around;
    align-content: flex-start;
    margin-bottom: 1%;
    width: 550px;
    height: 73px;
  }

  .cidade label {
    width: 61.48px;
    margin-left: 15%;
  }

  .cidade input {
    display: block;
    width: 201.57px;
    margin-left: 15%;
  }

  .estado label {
    width: 60.47px;
  }

  .estado select {
    display: block;
    width: 201.57px;
    height: 35px;
    background: #e0e0e0;
    border-radius: 10px;
    font-size: 16px;
    line-height: 24px;
    color: #4f4f4f;
    border: none;
  }

  /* BOTÃO SALVAR ENDEREÇO */

  .btn-salvar-endereco button {
    border: none;
    width: 217.7px;
    height: 35px;
    background: #f62cbc;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    border-radius: 10px;
    margin-left: 6%;
    margin-top: 2%;
    margin-bottom: 25px;
  }

  button {
    cursor: pointer;
  
  }
  button:hover{
    opacity: 0.7;
    transform: scale(1.04);
  }
`;