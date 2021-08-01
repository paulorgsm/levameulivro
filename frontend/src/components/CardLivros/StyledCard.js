import styled, { css } from "styled-components";

export const StyledCard = styled.div`
.texto {
    padding-top: 15px;
    text-align: center;
    font-weight: bold;
  }
 
  .mat {
    font-weight: normal;
    font-size: 12px;
    padding-bottom: 15px;
  }
  .btn {
    text-align: center;
    padding-top: 15px;
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
  .img-assets {
    display: flex;
    padding-top: 15px;
    align-items: flex-end;
  }

  .img-assets > img {
    width: 65px;
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  .img-assets > p {
    font-size: 12px;
    align-content: center;
    display: flex;
    color: #219653;
  }
  `;
