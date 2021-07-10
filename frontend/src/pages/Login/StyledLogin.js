import styled, { css } from "styled-components";

export const StyledLogin = styled.div`
  strong {
    font-weight: bold;
    color: #feee08;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    flex-direction: row;
    background: #fff;
    min-height: 100vh;
    margin: auto;
    justify-content: space-evenly;
    align-content: center;
    padding: 2px;
  }

  .entrar-no-time {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    padding: 15px;
    width: 100%;
    height: 25px;
    left: 463px;
    top: 259px;
    color: #4285f4;
  }

  .login {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 30px;
  }

  .login h1 {
    width: 329px;
    height: 55px;
    left: 851px;
    top: 343px;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    color: #eb4335;
  }

  .login h2 {
    width: 329px;
    height: 30px;
    left: 264px;
    top: 398px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 26px;
    text-align: center;
    color: #000000;
    margin: 3px;
  }

  .cadastro {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 30px;
  }

  .cadastro h1 {
    width: 329px;
    height: 55px;
    left: 851px;
    top: 343px;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    color: #34a853;
  }

  .cadastro h2 {
    width: 329px;
    height: 30px;
    left: 848px;
    top: 398px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 26px;
    text-align: center;
    color: #000000;
  }

  form input {
    display: block;
    align-items: center;
    width: 100%;
    height: 45px;
    padding: 10px;
    margin: 20px;
    border-radius: 10px;
    background-color: #e0e0e0;
    border: none;
  }

  .opcoes {
    font-style: normal;
    font-weight: normal;
    margin: 15px auto;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    color: #000000;
  }

  button {
    display: block;
    margin: 25px auto;
    width: 216px;
    height: 46px;
    left: 318px;
    top: 650px;
    border-radius: 10px;
    color: #ffffff;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    border: none;
  }
  .inputQuadrado {
    width: 18px;
    height: 18px;
    margin-right: 0px;
  }
  .entrar button {
    background-color: #eb4335;
  }

  .cadastrar button {
    background-color: #34a853;
  }
`;