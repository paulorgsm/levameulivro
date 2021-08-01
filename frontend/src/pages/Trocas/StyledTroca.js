import styled, { css } from "styled-components";

export const StyledTroca = styled.body`

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

  /* PARTE UM */

  .header-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
}

.confirmar-informacoes {
    line-height: 48px;
    text-align: center;
    color: #4285f4;
    margin: 0 auto;
    margin: 42px 0;
}

.confirmar-informacoes h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: #4285F4;
}

.confirmar-informacoes h3 {
    color: #000000;
}

.resumo-pedido {
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
    margin-bottom: 40px;
}

.pedido button:hover {
  opacity: 0.7;
  transform: scale(1.04);
}

.pedido {
    display: flex;
    /* align-items: center; */
    justify-content: center;
    width: 1120px;
    margin: 0 auto;
}

.img {
    display: inline-block;
    width: 189px;
    height: 358px;
}

.img img {
    width: 188.57px;
    height: 279.08px;
    left: 147px;
    top: 563px;
}

.icons {
    display: flex;
    justify-content: space-between;
    width: 188.57px;
    left: 163px;
    top: 863px;
    margin-top: 20px;
    margin-bottom: 31px;
}

.icons button {
    border: none;
    background: #fff;
    cursor: pointer;
}

.icons button .salvar {
    width: 55px;
    height: 21.12px;
    left: 163px;
    top: 864px;
    color: #000000;
}

.icons button .problema {
    width: 10px;
    height: 25.44px;
    left: 242px;
    top: 863px;
}

.icons button .heart, .ban{
    color: red;
}

.img p {
    width: 189px;
    height: 12px;
    left: 150px;
    top: 919px;
    font-style: normal;
    font-weight: bold;
    line-height: 12px;
    color: #333333;
}

.img span {
    color: #219653;
}

.dados-pedido {
    display: inline-block;
    margin: 0 40px;
    width: 452px;
    height: 358px;
    left: 376px;
    top: 619px;
    font-style: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
}

.dados-pedido h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 26px;
    color: #000000;
    margin-bottom: 20px;
}

.dados-pedido p {
    font-style: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
}

.dados-dono-livro {
    display: inline-block;
    width: 452px;
    left: 376px;
    top: 619px;
    font-style: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
}

.dados-dono-livro h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 26px;
    color: #000000;
}

.dados-dono {
    display: flex;
    width: 359px;
    height: 100px;
    margin-bottom: 40px;
}

.dono {
    width: 250px;
    left: 869px;
    top: 619px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #000000;
    align-self: flex-end;
}

.icons-dados {
    width: 150px;
    left: 1101px;
    top: 622px;
    align-self: flex-end;
}

.icon-user .user {
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 55px;
    color: #4285F4;
    margin-left: 30px;
}

.icon-star .star {
    display: inline;
    height: 20px;
    left: 1101px;
    top: 687px;
    color: #FCBC05;
    margin-right: 5px;
}

.saldo {
    width: 452px;
    height: 100px;
    left: 869px;
    top: 748px;
    background: #4285F4;
}

table {
    display: table;
    justify-content: flex-start;
}

tr {
    width: 452px;
    height: 40px;
}

th, td {
    text-align: start;
    padding-left: 10px;
}

th {
    width: 452px;
    height: 25px;
    left: 13px;
    top: 7px;
    color: #FEEE08;
    border-bottom: 1px solid #FFFFFF;
}

td {
    width: 452px;
    height: 60px;
    left: 0px;
    top: 40px;
    color: #FFFFFF;;
}

td span {
    color: #FEEE08;
}

.button-pontos {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
}

.button-pontos button {
    border: none;
    width: 218px;
    height: 46px;
    cursor: pointer;
}

.obter-pontos {
    border: none;
    width: 227.23px;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    height: 35px;
    text-align: center;
    border-radius: 10px;
    background: #34A853;
    color: #FFFFFF;
}

.comprar-pontos {
    border: none;
    width: 227.23px;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    height: 35px;
    text-align: center;
    border-radius: 10px;
    background: #f62cbc;
    color: #FFFFFF;
    }

    /* PARTE DOIS */

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
    margin: 40px 0;
  }

  .passos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-around;
    align-content: center;
    margin: 20px;
    width: 1120px;
    margin: 0 auto;
  }

  .passo-um {
    flex-basis: 50%;
    margin-left: -35px;
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
    background: #F6F6F6;
  }

  .btn-editar {
    width: 90px;
    height: 35px;
    border: none;
    margin-right: none;
    font: bolder;
  }

  .btn-apagar {
    width: 90px;
    height: 35px;
    border: none;
    margin-left: none;
    margin-left: -3%;
  }

  .btn-incluir {
    border: none;
    width: 190px;
    font-size: 14px;
    line-height: 24px;
    height: 35px;
    border: 1px solid #4285f4;
    color: #4285f4;
    margin-left: 5%;
  }

  .btn-incluir span{
    margin-left: 5px;
  }

  .passo-dois {
    margin-left: -150px;
  }

  .passo-dois span {
    display: block;
    margin-bottom: 25px;
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

  .btn-solicitar-troca:hover {
    opacity: 0.7;
  transform: scale(1.04);
  }

  /* BOTÃO OPÇÃO LIGA E DESLIGA */

  .pessoalmente {
    margin: 0 auto;
    width: 1120px;
  }

  .btn-pessoalmente {
    margin-left: 15px;
    margin-top: 15px;
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
    background-color: #008800;
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
    width: 1120px;
    margin: 0 auto;
  }

  input {
    height: 35px;
  }

  .container.hide {
    display: none;
  }

  .container {
    margin-top: 40px;
    margin-left: -110px;
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

  .container select, input:placeholder-shown {
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
    margin-left: 5px;
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
    margin-left: -18%;
  }

  .numero input {
    display: block;
    width: 201.57px;
    margin-left: -18%;
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
    margin-left: 5px;
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
    font-size: 14px;
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
  }

  .btn-salvar-endereco:hover {
    opacity: 0.7;
    transform: scale(1.04);
    margin-left: 2%;
  }

  .modal.hide {
    display: none;
  }

  .modal {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .modal-orders {
    background: #ffffff;
    border-radius: 20px;
    width: 60%;
    min-width: 300px;
  }

  .exchange-completed {
    width: 853px;
    height: 449px;
  }

  .check {
    color: #34a853;
    width: 132px;
    height: 133px;
    padding: 69px 363px 22px 363px;
  }

  .modal-orders h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    color: #000000;
    padding-top: 22px;
  }

  .modal-orders p {
    padding-top: 22px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #000000;
  }


.container button:hover {
  opacity: 0.7;
}
`;
