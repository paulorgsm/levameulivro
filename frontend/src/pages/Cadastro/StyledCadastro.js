import styled, { css } from "styled-components";

export const StyledCadastro = styled.div`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  @font-face{
    font-family: 'Roboto', sans-serif;
    src:url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
  }
  *{
    font-family: 'Roboto', sans-serif;
  }

  .cadChamada {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    padding-bottom: 68px;
  }

  .cadastroChamada {
    width: 960px;
    margin: 40px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .cadastroChamada p {
    font-weight: 500;
    color: #4285f4;
  }
  .cads {
    width: 960px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  .finalizeCad {
    width: 478px;
    height: 192px;
    display: flex;
    flex-wrap: wrap;
  }

  .finalizeCad h2 {
    height: 56px;
    font-weight: 700;
    font-size: 44px;
    line-height: 56px;
    color: #eb4335;
    margin: 5px 0px;
  }
  .finalizeCad p {
    size: 18px;
    line-height: 26px;
    text-align: center;
    margin: 5px auto;
  }

  .finalizeCad button {
    border-radius: 10px;
    width: 216px;
    height: 46px;
    background: #eb4335;
    border-color: #eb4335;
    font-size: 18px;
    line-height: 26px;
    color: white;
    margin: auto;
  }
  .voltarHome{
    text-decoration: none;
    font-size: 18px;
    color: white;
  }
  .finalizeDepois {
    width: 382px;
    height: 192px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 100px;
  }
  .finalizeDepois h2 {
    font-weight: 700;
    line-height: 56px;
    font-size: 44px;
    text-align: center;
    color: #3146de;
  }
  .finalizeDepois button {
    border-radius: 10px;
    width: 216px;
    height: 46px;
    background: #2f80ed;
    border-color: #2f80ed;
    font-size: 18px;
    line-height: 26px;
    color: white;
    margin: auto;
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
    width: 1200px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    margin: 0 auto;
    padding-left: 140px;
  }
  .forms p {
    padding-bottom: 23px;
    text-align: justify;
    font-weight: bolder;
  }

  .formsCadastros h2 {
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

  .forms button {
    width: 216px;
    height: 46px;
    background: #f62cbc;
    color: white;
    border-radius: 10px;
    border: none;
    margin-right: 600px;
  }

  .form2 {
    width: 474px;
    height: 595px;
  }

  .form2 form input {
    width: 428px;
  }
  button {
    cursor: pointer;
  
  }
  button:hover{
    opacity: 0.7;
    transform: scale(1.04);
  }
`;
