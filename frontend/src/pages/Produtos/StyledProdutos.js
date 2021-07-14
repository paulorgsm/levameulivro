import styled, { css } from "styled-components";

export const StyledProdutos = styled.div`
  strong {
    font-weight: bold;
    color: #feee08;
  }

  .sessao {
    max-width: 1143px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 40px auto;
  }

  .negrito {
    color: #000;
    font-weight: 700;
  }
  .mostrarInfoLivro {
    display: flex;
    width: 1200px;
    flex-wrap: wrap;
    align-items: center;
    margin: 40px auto;
  }

  .produtoFoto {
    max-width: 250px;
    height: 370px;
    margin-bottom: 14px;
  }
  .fotosMostruario {
    display: flex;
    max-width: 128px;
    height: 30px;
    justify-content: space-between;
    margin: auto;
  }
  .informacoesLivro {
    width: 800px;
    height: 415px;
    margin-left: 93px;
  }

  .informacoesLivro h1 {
    font-size: 24px;
    font-weight: 700;
    align-items: center;
  }

  .infosLivros {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .infosIcones {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 568px;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 30px;
    font-size: 12px;
  }

  .txtInfoDono {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .imgsIcones {
    width: 24px;
    margin: 3px;
  }

  #alinhaSalvar {
    align-self: center;
  }
  .centralizar {
    text-align: center;
  }
  .marginInfoLivro {
    margin-top: 38px;
  }
  .marginInfoLivro2 {
    margin-right: 100px;
  }

  .txtVerde {
    color: #219653;
    font-weight: 700;
  }
  .btn {
    border-radius: 10px;
    height: 46px;
    color: white;
    border-style: none;
    margin-top: 30px;
    font-weight: 700;
    line-height: 26px;
    font-size: 18px;
    font-family: "Roboto", sans-serif;
  }

  .btnLaranja {
    background-color: #eb4335;
    width: 216px;
  }

  .btnRosa {
    background-color: #f62cbc;
    width: 278px;
    margin-left: 73px;
  }

  .border {
    border-bottom: 1px solid #4285f4;
    width: 577px;
    margin: auto;
    align-items: center;
  }

  .txtAzul {
    color: #4285f4;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  .txt {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 30px;
  }

  .form {
    display: flex;
    width: 1143px;
    align-items: center;
    margin: auto;
  }
  #contato {
    width: 1050px;
    height: 150px;
    border-radius: 20px;
    border: 1px solid #4285f4;
    background-color: #f2f2f2;
    justify-content: center;
    margin: auto;
  }

  .btnAzul {
    width: 216px;
    height: 46px;
    background-color: #4285f4;
    margin-left: 47px;
    font-weight: 700;
  }

  .perguntas {
    margin-top: 25px;
    margin-left: 28px;
  }
  .perguntasSub {
    margin-left: 28px;
  }

  .resposta {
    margin-top: 18px;
    margin-left: 1px;
  }
`;
