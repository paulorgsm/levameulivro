import styled, { css } from "styled-components";

export const StyledHeader = styled.div`
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
  .login button{
   background-color: #EB4335;
   border-radius: 2px;
   border-style: none;
   font-family: 'Roboto',sans-serif;
   color: white;
   margin-top: 5px;
   width: 30 px
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

  .buscar::placeholder {
    color: #4285f4;
  }

  .containerHeader {
    height: 48px;
    width: 100px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    border: 3px solid #fcbc05;
    color: #eb4335;
    border-right: none;
    font-size: 14px;
  }

  .submit {
    height: 53px;
    width: 47px;
    border-left-color: green;
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
    border-bottom-color: #fcbc05;
    border-top-color: #fcbc05;
    border-right-color: #fcbc05;
    background-color: white;
  }

  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .login span {
    text-align: center;
    /* margin: 10px; */
    font-family: sans-serif;
    color: #eb4335;
    font-weight: bold;
    display: inline-block;
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
  button {
    cursor: pointer;
  
  }
  button:hover{
    opacity: 0.7;
    transform: scale(1.04);
  }
`;
