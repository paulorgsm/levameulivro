import styled, { css } from "styled-components";

export const StyledHeader = styled.div`
  * {
    margin: 0 auto;
    padding: 0;
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
  }

  .header {
    width: 100%;
    height: 223px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .conteudoHeader {
    width: 1200px;
    margin: 10px auto;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .divInput {
    height: 100px;
    margin-top: 35px;
    display: flex;
    flex-direction: row;
  }

  .login {
    display: flex;
    width: 252px;
    height: 52px;
    margin-top: 44px;
  }
  .campoLogin {
    margin-top: 10px;
    display: block;
    flex-wrap: wrap;
  }

  .buscar {
    border-top-left-radius: 9px;
    border-bottom-left-radius: 9px;
    border-right: none;
    border-color: #4285f4;
    width: 400px;
    height: 48px;
    color: #4285f4;
  }

  .containerHeader {
    height: 48px;
    width: 100px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    border: #fcbc05;
    border-style: solid;
    color: #eb4335;
    border-right: none;
  }

  .submit {
    height: 47px;
    width: 47px;
    border-left-color: green;
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
    border-bottom-color: #fcbc05;
    border-top-color: #fcbc05;
    border-right-color: #fcbc05;
    background-color: white;
  }

  .login span {
    text-align: center;
    margin: 10px;
    font-family: sans-serif;
    color: #eb4335;
    font-weight: bold;
  }

  .login img {
    width: 50px;
  }

  .infoHeader {
    width: 100%;
    height: 60px;
    background: #4285f4;
  }
  nav {
    width: 1122px;
    display: flex;
    margin: auto;
    align-items: center;
    margin: auto;
  }

  .infoHeader ul {
    width: 1122px;
    font-family: sans-serif;
    color: white;
    justify-content: space-around;
    align-items: center;
    margin-top: 18px;
  }

  .infoHeader li {
    display: inline;
    align-items: center;
    justify-content: space-between;
    padding-right: 34px;
  }

  .infoHeader li a {
    font-family: sans-serif;
    color: white;
    font-weight: bold;
    font-size: 20px;
    list-style: none;
    text-decoration-line: none;
  }
  #comprarLi {
    color: #feee08;
  }
`;
