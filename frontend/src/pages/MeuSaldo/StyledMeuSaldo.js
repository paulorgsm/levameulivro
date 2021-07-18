import styled, { css } from "styled-components";

export const StyledMeuSaldo = styled.div`

main {
  width: 1200px;
  margin: 0 auto;
}


  .saudacao {
    margin: 20px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    color: #4285f4;
    font-size: 20px;
    font-weight: bold;
  }

  .meuSaldo {
    margin-left: 76px;
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

    justify-content: center;
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
    margin-right: 30px;

    line-height: 55px;

    display: flex;
    flex-direction: column;

  }

  .infobox2 {
    margin-top: 65px;

    margin-bottom: 40px;
    line-height: 55px;

  }
  .titulo {
    margin-top: 25px;
    padding-left: 10px;
    padding-bottom: 15px;
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
    padding-bottom: 10px;
    justify-content: left;
    text-align: left;
    width: 496px;

    color: black;
    font-size: 15px;
    font-weight: bold;
    line-height: 0.2em;
    font-family: Arial, Helvetica, sans-serif;
    border-right: #4285f4 2px solid;
    border-bottom: #4285f4 2px solid;
    border-left: #4285f4 2px solid;
  }

  .conteudoPedidos2 {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    justify-content: left;
    text-align: left;
    width: 496px;

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
    height: 45px;
  }
  .total strong {
    color: yellow;
    font-size: 15px;
    font-weight: bold;
  }

.titles {
    display: flex;
    margin-top: -5px;
  }

`;

