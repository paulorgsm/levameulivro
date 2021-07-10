import styled, { css } from "styled-components";

export const StyledBusca = styled.div`
  .section-principal {
    border: 1px solid #4285f4;
    width: 140px;
    padding: 50px 50px 0px 15px;
    color: #4285f4;
    height: 555px;
    font-weight: bold;
    margin-right: 60px;
  }

  .container-ensino > article {
    padding-bottom: 10px;
  }

  .container-checkbox {
    padding-top: 10px;
  }

  .div-checkbox > p {
    padding-left: 28px;
    padding-top: 5px;
    font-size: 12px;
    font-weight: bold;
  }

  .div-checkbox {
    padding-bottom: 5px;
    font-size: 15px;
    font-weight: bold;
  }

  .hr-linha {
    width: 90px;
    margin: 30px 10px;
    background: #4285f4;
  }

  /* main-container */
  #main-container {
    padding-top: 100px;
    display: flex;
    max-width: 1040px;
    margin: 0 auto;
  }

  .div-card {
    display: flex;
    text-align: center;
    margin: -16px auto;
    flex-wrap: wrap;
  }

  .div-card1 {
    padding-left: 15px;
    padding-top: 15px;
  }

  .section-card {
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    max-width: 1240px;
    margin: 0 auto;
  }

  .section-card > div {
    flex: 1 1 200px;
    margin: 10px;
  }

  .texto {
    padding: 0px 0px 10px;
    text-align: center;
    font-weight: bold;
  }

  .mat {
    font-weight: normal;
    font-size: 12px;
    padding-bottom: 15px;
    padding-top: 15px;
  }
  .btn {
    text-align: center;
    padding: 0px 0px 10px 5px;
  }

  .btn1 {
    background: #eb4335;
    outline: none;
    border: none;
    padding: 15px;
    width: 110px;
    color: white;
    font-weight: bold;
    font-size: 12px;
    border-radius: 12px;
  }

  .btn2 {
    background: #34a853;
    outline: none;
    border: none;
    padding: 15px;
    width: 110px;
    color: white;
    font-weight: bold;
    font-size: 12px;
    border-radius: 12px;
  }

  .button {
    background: #34a853;
    display: flex;
    justify-content: center;
    padding: 15px;
    border-radius: 12px;
    color: #fff;

    align-items: center;
  }

  .button > p {
    font-size: 12px;
    font-weight: bold;
  }

  .button > div > img {
    padding-left: 10px;
  }

  .mover {
    display: flex;
    margin-left: -151px;
    margin-top: -60px;
    position: absolute;
    left: 50%;
    transform: translateX(418%);
    flex-wrap: wrap;
  }
`;
