import styled, { css } from "styled-components";

export const StyledMeusDados = styled.div`
  .secao {
    width: 100%;
  }
  .paragrafo {
    width: 960px;
    margin: 40px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .paragrafo p {
    font-family: sans-serif;
    font-weight: 500;
    color: #4285f4;
  }

  .meusDados {
    width: 600px;
    height: 192px;
    display: flex;
    flex-wrap: wrap;
  }

  .meusDados h2 {
    height: 48px;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 44px;
    line-height: 56px;
    color: #eb4335;
    margin: auto 30px;
    text-align: center;
  }
  .meusDados img {
    margin-left: 150px;
  }

  .meusDadosPrincipal {
    width: 530px;
    margin-left: 150px;
    display: flex;
    flex-direction: column;
  }

  .formsCadastros {
    display: flex;
    width: 100%;
    flex-direction: column;
    border-top: 1px solid #000000;
    text-align: center;
    margin: 0 auto;
    /* max-width: 578px; */
  }
  .forms {
    height: 750px;
    width: 530px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    margin: 0 auto;
  }
  .forms p {
    padding-bottom: 23px;
    text-align: justify;
    font-weight: bolder;
  }

  .formsCadastros h2 {
    font-family: sans-serif;
    height: 55px;
    color: #f62cbc;
    text-align: center;
    margin: 48px auto;
    font-size: 48px;
    font-weight: 700;
  }
  .form1 {
    width: 473px;
    margin: 0 136px 0 0;
  }
  .forms form {
    display: flex;
    flex-direction: column;
    width: 471px;
    height: 370px;
    align-items: baseline;
    text-align: start;
  }
  .forms form input {
    border-radius: 10px;
    background-color: #e0e0e0;
    width: 200px;
    height: 40px;
    border: none;
    margin: 7px 28px 21px auto;
  }

  .form1 form select {
    border-radius: 10px;
    background-color: #e0e0e0;
  }
  .agregadorInput {
    width: 468px;
    display: flex;
    flex-wrap: wrap;
  }
  .agregadorLabelInput {
    display: flex;
    flex-direction: column;
  }
  input ::placeholder {
    padding-right: 17px;
  }

  .button1 {
    width: 216px;
    height: 46px;
    background: #eb4335;
    color: white;
    border-radius: 10px;
    border: none;
    margin-right: 600px;
  }
  .carregarFoto {
    margin-top: 21px;
    margin-bottom: 21px;
    display: flex;
  }
  .carregarFoto > div > p {
    font-size: 16px;
    padding-bottom: 0;
    margin-left: 8px;
  }
  .meusDadosPrincipal p {
    padding-bottom: 23px;
    text-align: justify;
    font-weight: bolder;
  }
  .padding {
    padding-left: 80px;
  }

  .retangulo {
    background: #f2f2f2;
    border-radius: 10px;
    height: 161px;
    display: flex;
  }
  .check {
    width: 45px;
  }
  .check > input {
    width: 27px;
    height: 29px;
  }
  .input:checked {
    background-color: #fcbc05;
    width: 25px;
    height: 25px;
  }

  .endereco {
    width: 461px;
    height: 142px;
    margin: auto;
  }
  .endereco p {
    padding-bottom: 5px;
    font-weight: 100;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .btns-endereco {
    display: block;
    width: 190px;
    height: 40px;
    margin-top: 5 px;
    display: flex;
  }
  .btn-editar {
    width: 90px;
    height: 35px;
    border: none;
    border-radius: 5px;
    background: #e0e0e0;
    display: flex;
  }

  .btn-apagar {
    width: 90px;
    height: 35px;
    border: none;
    margin-left: none;
    margin-left: -3%;
    border-radius: 5px;
    background: #e0e0e0;
  }

  .padding {
    padding-left: 80px;
  }

  .btn-incluir {
    width: 227px;
    height: 40px;
    border: 1px solid #eb4335;
    border-color: #eb4335;
    border-radius: 10px;
    color: #eb4335;
    margin-top: 27px;
    background: #f2f2f2;
    display: flex;
  }
  .btn-incluir span {
    align-self: auto;
  }
  .btn-apagar span {
    margin: auto;
  }
  .material-icons1 {
    margin: 6px 10px;
  }
  .material-icons2 {
    margin: 13px 2px;
  }
`;
