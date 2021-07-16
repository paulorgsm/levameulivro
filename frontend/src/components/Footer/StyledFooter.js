import styled, { css } from "styled-components";

export const StyledFooter = styled.div`
  .footer {
    width: auto;
    height: 250px;
    background: #61b52f;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
  }

  strong {
    font-weight: bold;
    color: #feee08;
  }

  .descricaoSobre {
    margin-right: 100px;
    padding-top: 30px;
    width: 500px;
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
    margin-left: 100px;
    width: 400px;
    color: white;
    line-height: 1.3;
    display: flex;

/*     display: flex;
    flex-direction: column;
    /* align-items: end; */
    align-self: baseline;
    text-align: left;
    flex-wrap: wrap; */
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
  }

  .direitos {
    padding-top: 25px;
    font-size: 16px;
    color: white;
    width: 1120px;
    margin: 0 auto;
    padding-left: 10px;
  }

.social-icons {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.icon{
  margin: 10px;
}

.linkto{
  color: white;
}

.social-icons a{
  color: white;
}
`;
