import styled, { css } from "styled-components";

export const StyledMeuSaldo = styled.div`
  .saudacao {
    margin: 20px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    color: #4285f4;
    font-size: 20px;
    font-weight: bold;
  }

  .meuSaldo {
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
  
    .meuSaldo > p {
      padding-left: 10px;
    }
  .info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.botoes {
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
margin-bottom: 57px;

}

.botaoVerde {
    background-color: #34A853;
    border-radius: 10px;
    border: #34A853 2px solid;
    width: 250px;
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

.botaoRosa {
    margin-left: 5px;
    background-color: #F62CBC;
    border-radius: 10px;
    border: #F62CBC 2px solid;
    width: 240px;
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

  .infobox {
    margin-left: 210px;
    margin-bottom: 40px;
    line-height: 55px;
    text-align: left;
    width: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .infobox2 {
    margin-top: 40px;
    margin-left: 60px;
    margin-bottom: 40px;
    line-height: 55px;
    text-align: left;
    width: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .titulo {
    margin-top: 30px;
    padding-left: 10px;
    padding-bottom: 5px;
    background-color: #4285f4;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    place-content: center;
    font-size: 18px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    text-align: left;
    width: 500px;
    height: 35px;
  }

  .conteudo {
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-left: 10px;
    justify-content: left;
    text-align: left;
    width: 496px;
    height: auto;
    color: black;
    font-size: 15px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    border-right: #4285f4 2px solid;
    border-bottom: #4285f4 2px solid;
    border-left: #4285f4 2px solid;
  }

  .conteudo strong {
    color: red;
    font-size: 15px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 3px;
    padding-right: 3px;
  }

  .conteudoPedidos {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-left: 10px;
    justify-content: left;
    text-align: left;
    width: 496px;
    height: 203px;
    color: black;
    font-size: 15px;
    font-weight: bold;
    line-height: 0.2em;
    font-family: Arial, Helvetica, sans-serif;
    border-right: #4285f4 2px solid;
    border-bottom: #4285f4 2px solid;
    border-left: #4285f4 2px solid;
  }

  .total {
    padding-left: 10px;
    padding-bottom: 5px;
    background-color: #4285f4;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    place-content: center;
    font-size: 15px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    text-align: left;
    width: 500px;
    height: 35px;
  }

  .total strong {
    color: yellow;
    font-size: 15px;
    font-weight: bold;
  }
`;
