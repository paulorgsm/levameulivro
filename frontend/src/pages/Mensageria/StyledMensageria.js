 import styled, { css } from "styled-components";

export const StyledMensageria = styled.div`
  .saudacao {
    margin: 20px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    color: #4285f4;
    font-size: 20px;
    font-weight: bold;
  }

  .mensageria {
    margin-left: 210px;
    margin-top: 30px;
    line-height: 55px;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
    color: #4285f4;
    font-size: 35px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .perguntaTitulo {
    margin-left: 210px;
    margin-top: 30px;
    line-height: 55px;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
    color: #eb4335;
    font-size: 35px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .perguntaBox {
    margin-left: 210px;
    margin-top: 30px;
    margin-bottom: 40px;
    line-height: 55px;
    text-align: left;
    width: 1200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .tituloImagem {
    padding-left: 10px;
    background-color: #4285f4;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 15px;
    justify-content: left;
    text-align: left;
    width: 120px;
    height: 50px;
  }

  .tituloLivro {
    padding-left: 9px;
    background-color: #4285f4;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 15px;
    justify-content: center;
    text-align: left;
    width: 260px;
    height: 50px;
  }

  .tituloSolicitante {
    padding-left: 9px;
    background-color: #4285f4;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 15px;
    justify-content: center;
    text-align: left;
    width: 260px;
    height: 50px;
  }

  .tituloPedido {
    padding-left: 9px;
    background-color: #4285f4;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 15px;
    justify-content: center;
    text-align: left;
    width: 200px;
    height: 50px;
  }

  .tituloMensagens {
    padding-left: 5px;
    background-color: #4285f4;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 15px;
    justify-content: center;
    text-align: left;
    width: 198px;
    height: 50px;
  }

  .conteudoImagem {
    padding-top: 15px;
    background-color: #f6f6f6;
    justify-content: center;
    text-align: center;
    width: 120px;
    height: 140px;
    border-left: #4285f4 2px solid;
    border-right: #4285f4 2px solid;
    border-bottom: #4285f4 2px solid;
  }

  .conteudoLivro {
    padding-top: 15px;
    padding-left: 10px;
    background-color: #f6f6f6;
    justify-content: left;
    text-align: left;
    width: 260px;
    height: 140px;
    color: black;
    font-size: 15px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: underline;
    border-right: #4285f4 2px solid;
    border-bottom: #4285f4 2px solid;
  }

  .conteudoSolicitante {
    padding-top: 15px;
    padding-left: 10px;
    display: flex;
    flex-direction: row;
    background-color: #f6f6f6;
    justify-content: left;
    text-align: left;
    width: 260px;
    height: 140px;
    color: black;
    font-size: 15px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    border-right: #4285f4 2px solid;
    border-bottom: #4285f4 2px solid;
  }

  .nomeSolicitante {
    padding-top: 15px;
    padding-left: 3px;
    color: black;
    line-height: 1.6;
    justify-content: left;
    text-align: left;
    font-size: 15px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    width: auto;
    height: 30px;
  }

  .fotoSolicitante {
    padding-top: 15px;
    color: black;
    line-height: 1.6;
    justify-content: left;
    text-align: left;
    font-size: 15px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    height: 30px;
  }

  .conteudoPedido {
    padding-top: 15px;
    padding-left: 10px;
    background-color: #f6f6f6;
    justify-content: left;
    text-align: left;
    width: 200px;
    height: 140px;
    color: black;
    font-size: 20px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    border-right: #4285f4 2px solid;
    border-bottom: #4285f4 2px solid;
  }

  .conteudoPedido2 {
    padding-left: 30px;
  }

  .conteudoMensagens {
    padding-top: 15px;
    padding-left: 10px;
    background-color: #f6f6f6;
    justify-content: center;
    text-align: center;
    width: 188px;
    height: 140px;
    color: black;
    font-size: 20px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    border-right: #4285f4 2px solid;
    border-bottom: #4285f4 2px solid;
  }

  .center {
    display: block;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  .center2 {
    display: block;
    justify-content: center;
    margin-top: 55px;
    margin-left: auto;
    margin-right: auto;
  }

  .mensagens {
    padding-bottom: 20px;
    background-color: #e5e5e5;
    line-height: 55px;
    justify-content: center;
    text-align: center;
    width: 1080px;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .faleSolicitante {
    color: #4285f4;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 20px;
  }

  .input {
    padding: 2px;
    background-color: #f2f2f2;
    border-radius: 15px;
    border: #4285f4 2px solid;
    width: 900px;
    height: 150px;
    justify-content: left;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    line-height: 30px;
  }

  .botao {
    background-color: #4285f4;
    border-radius: 10px;
    border: #4285f4 2px solid;
    width: 300px;
    height: 40px;
    justify-content: center;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    line-height: 30px;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  .perguntasRespostas {
    margin-top: 50px;
    margin-left: 250px;
    background-color: #e5e5e5;
    line-height: 55px;
    justify-content: center;
    text-align: center;
    width: 600px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: #eb4335;
    border-top: 1px #eb4335 solid;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 20px;
    line-height: 6rem;
  }

  .conversa {
    margin-left: 85px;
    background-color: #f2f2f2;
    padding: 5px;
    border-radius: 15px;
    border: #eb4335 2px solid;
    width: 900px;
    height: auto;
    justify-content: left;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    line-height: 30px;
  }

  h2 {
    font-weight: bold;
  }

  .conversaResposta {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 2px;
  }

  .box {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .paginas {
    margin-bottom: 40px;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  .botaoPag {
    padding-top: 4px;
    border: #4285f4 1px solid;
    width: 25px;
    height: 25px;
    align-self: center;
    font-size: 20px;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
  }

  .perguntaFeitas {
    margin-left: 210px;
    margin-top: 30px;
    line-height: 55px;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
    color: #34a853;
    font-size: 35px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .perguntasRespostasVerde {
    margin-top: 50px;
    margin-left: 250px;
    background-color: #e5e5e5;
    line-height: 55px;
    justify-content: center;
    text-align: center;
    width: 600px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: #34a853;
    border-top: 1px #34a853 solid;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 20px;
    line-height: 6rem;
  }

  .conversaVerde {
    margin-left: 85px;
    background-color: #f2f2f2;
    padding: 5px;
    border-radius: 15px;
    border: #34a853 2px solid;
    width: 900px;
    height: auto;
    justify-content: left;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    line-height: 30px;
  }
`;
