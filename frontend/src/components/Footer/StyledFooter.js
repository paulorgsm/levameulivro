import styled, { css } from "styled-components";

export const StyledFooter = styled.div`
  .footer {
    margin-top: 70px;
    width: auto;
    height: 250px;
    background: #61b52f;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  strong {
    font-weight: bold;
    color: #feee08;
  }

  .descricaoSobre {
    margin-left: 150px;
    padding-top: 30px;
    width: 554px;
    color: white;
    line-height: 1.3;
    display: flex;
    flex-direction: column;
  }

  .descricaoSobre h2 {
    padding-bottom: 1px;
    font-size: 20px;
    color: white;
    width: 328px;
    border-bottom: 1px solid white;
  }

  .leiaMais {
    color: white;
    line-height: 2.1;
  }

  .redesSociais {
    padding-top: 30px;
    margin-left: 150px;
    width: 400px;
    color: white;
    line-height: 1.3;
  }

  .redesSociais h2 {
    padding-bottom: 1px;
    font-size: 20px;
    color: white;
    width: 328px;
    border-bottom: 1px solid white;
    margin-bottom: 10px;
  }

  span {
    margin-top: 10px;
  }

  .footer2 {
    width: auto;
    height: 64px;
    background: #34a853;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .direitos {
    margin-left: 150px;
    padding-top: 25px;
    font-size: 20px;
    color: white;
  }
`;
