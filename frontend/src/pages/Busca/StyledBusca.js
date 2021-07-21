import styled, { css } from "styled-components";

export const StyledBusca = styled.div`
body, img, div, p, ul, li {
  margin: 0;
  padding: 0;
  font-family: Arial;
  font-size: 15px;
  list-style: none;
  
}


.divBusca {
  outline: none;
}

.login-principal {
  align-items: center;
  display: flex;
}

.login-registro {
  padding-right: 15px;
  text-align: center;
  color:#EB4335;
}

.login-img {
  display: flex;
}

.strong-red {
  color: #EB4335;
}

a {
  text-decoration: none;
}

.cor-yellow {
  color: yellow;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #4285F4;
}

.menu > li {
  margin-left: 10px;
}

.menu > li > a {
  display: block;
  padding: 20px;
  color: white;
  font-weight: bold;
}

.section-busca {
  padding-top: 30px;
}

.article-busca {
  text-align: center;
}

.article-busca > hr {
  width: 520px;
  background: #4285F4;
}

.strong-red > span {
  font-weight: bold;
}

.strong-red > span > p {
  font-size: 30px;
}

.article-paragrafo{
  font-size: 20px;
  color: #34A853;
  font-weight: bold;
  
}

.article-paragrafo > span {
  color: black;

}

.section-principal {
  border: 1px solid #4285F4;
  width: 140px;
  padding: 50px 50px 0px 15px;
  color: #4285F4;
  height: 555px;
  font-weight: bold;
  margin-right: 60px;
  
}

.container-ensino > article{
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
  background: #4285F4;
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
  padding:0px 0px 10px 5px;
}
button{
  heigth: 44px;
  width: 110px;
}
.btn1 {
  background: #EB4335;
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
  background: #34A853;
  outline: none;
  border: none;
  padding: 15px;
  width: 110px;
  color: white;
  font-weight: bold;
  font-size: 12px;
  border-radius: 12px;
} 

.button  {
  background: #34A853;
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
  Margin-left: -151px;
  margin-top: -60px;
  position: absolute;
  left: 50%;
  transform: translateX(418%);
  flex-wrap: wrap;
}

.img-assets {
  display: flex;
  height: 20px;
  padding-bottom: 20px;
  
}

.img-assets > p {
  font-size: 12px;
  padding-left: 17px;
  display: flex;
  align-items: flex-end;
  font-weight: 600;
  color: #219653;
  
}

.img-assets > img {
  padding-left: 12px;
}

.div-login {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 16px;
  padding-bottom: 10px;
}

.div-login > img {
  width: 24px;
  
}

.div-login >  div > p {
  font-size: 12px;
  padding-left: 5px;
  font-weight: bold;
}

.setaLado {
  display: flex;
  justify-content: center;
  border: 1px solid;
  width: 32px;
  margin: 0 auto;
}

.setaLado > img {
}

input {
  cursor: pointer;
}
input:hover{
  opacity: 0.7;
}

`;
