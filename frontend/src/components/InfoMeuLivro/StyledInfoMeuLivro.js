import styled, { css } from "styled-components";

export const StyledInfoMeuLivro = styled.div`

*{
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    box-sizing: border-box
  }

.header{
    width: 100%;
    height: 223px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.conteudoHeader{
    width: 1122px;
    margin: 10px auto;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
 
}

.divInput{
/*     height: 100px;
    margin: 20px auto ; */
    width: 680px;
}

.buscar{
    height: 100px;
    margin: 30px auto;
    width: 500px;
    height: 20px;
    border-radius: 20px;
    border-color: #4285F4;
    padding: 20px;
}

::placeholder {
    color: #4285F4;
}

.login{
    display: flex;
    width: 250px;
    height: 52px;
    margin-top: 30px;
}
.campoLogin{
    margin-top: 10px;
    display: block;
    flex-wrap: wrap;
}

.login span{
    text-align: center;
    margin: 10px;
    font-family: sans-serif;
    color: #EB4335;
    font-weight: bold;
}

.login img{
    width: 50px;
}

.infoHeader{
    width: 100%;
    height: 60px;
    background: #4285F4;
}
nav{
    width: 1120px;
    margin: 0 auto;
}

.infoHeader ul{
    width: 1120px;
    font-family: sans-serif;
    color: white;
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
       
}

.infoHeader li{
    display: inline;
    align-items: center;
    justify-content: space-between;
}

.infoHeader li a{
    font-family: sans-serif;
    color: white;
    font-weight: bold;
    font-size: 20px;
    list-style: none;
    text-decoration-line: none;
}
#comprarLi{
    color:#FEEE08 ;
}
.meuPerfil{
    width: 100%;
    /* display: flex; */
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
/*     padding-bottom: 68px;
    margin-bottom: 40px; */
    height: 1300px;
}

.meuPerfilGeral{
    width: 960px;
    margin: 40px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.meuPerfilGeral p{
    font-family: sans-serif;
    font-weight: bold;
    color: #4285F4;
    font-size: 22px;
}

.formsCadastros{
    display: flex;
    width: 100%;
    flex-direction: column;
    border-top:1px solid #000000;
    text-align: center;
    margin: 0 auto; 
    /* max-width: 578px; */
   
}
.forms{
    height: 750px;
    width: 1200px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    margin: 0 auto;
    padding-left: 140px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;   
    
}
.forms p{
    padding-bottom: 23px;
    text-align: justify;
    font-weight: bolder;
}

.formsCadastros h2{
    font-family: sans-serif;
    height: 55px;
    color: #F62CBC;
    text-align: center;
    margin: 48px auto;
    font-size: 48px;
    font-weight: 700;
}
.form1{
    width:473px ;
    margin: 0 136px 0 0;
}
.forms form{
    display: flex;
    flex-direction: column;
    width: 471px;
    height: 370px;
    align-items: baseline;
    text-align: start;
}
.forms form input{
    border-radius: 10px;
    background-color:#E0E0E0; 
    width: 200px;
    height: 40px;
    border: none;
    margin: 7px 28px 21px auto ;
}

.form1 form select{
    border-radius: 10px;
    background-color:#E0E0E0;
}
.agregadorInput{
    width: 468px;
    display: flex;
    flex-wrap: wrap;
 
}
.agregadorLabelInput{
    display: flex;
    flex-direction: column;
    
}
input ::placeholder{
    padding-right: 17px ;
}

.forms button{
    width: 216px;
    height: 46px;
    background: #F62CBC;
    font-family: sans-serif;
    color: white;
    border-radius: 10px;
    border:none;
    margin-right: 600px;
}

.form2{
    width: 474px;
    height: 595px;
} 

.form2 form input {
    width: 428px;
}

.footer {
    width: auto;
    height: 250px;
    background: #61B52F;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

strong {
    font-weight: bold;
    color: #FEEE08;
}

.descricaoSobre {
    margin-left: 70px;
    padding-top: 30px;
    width: 554px;
    color: white;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 1.3;
    display: flex;
    flex-direction: column;
}

.descricaoSobre h2    {
    padding-bottom: 1px;
    font-family: sans-serif;
    font-size: 20px;
    color: white;
    width: 328px;
    border-bottom: 1px solid white; 

}


.leiaMais {
    font-family: sans-serif;
    color: white;
    line-height: 2.1;
    
}

.redesSociais {
    padding-top: 30px;
    margin-left: 150px;
    width: 400px;
    color: white;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 1.3;

}

.redesSociais h2 {
    padding-bottom: 1px;
    font-family: sans-serif;
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
    background: #34A853;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.direitos {
    margin-left: 70px;
    padding-top: 25px;
    font-family: sans-serif;
    font-size: 20px;
    color: white;
    
}

/* Ínício do CSS do Body */

.cadLivro {
    width: 1120px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
}

.cadLivro h1{
    font-family: sans-serif;
    font-weight: bold;
    color: #4285F4;
    font-size: 2.5em;
    padding-left: 20px;
    display: flex;
    align-items: center;
}

.botoes {
    display: flex;
    flex-direction: row;
    width: 1120px;
    margin: 0 auto;
    justify-content: space-between;
    margin-bottom: 40px;
}

.btn-incluir {
    width: 230px;
    height: 40px;
    border-radius: 10px;
    background: #F6F6F6;
    border-color: #4285F4;
    font-family: sans-serif;
    color: #4285F4;
    display: flex;
    align-items: center;
    font-weight: bolder;
}

.btn-incluir img{
    margin: auto 15px;
}

.btn-filtro {
    width: 130px;
    height: 40px;
    border-radius: 10px;
    background: #34A853;
    font-family: sans-serif;
    color: white;
    text-align: center;
    text-align-last: center;
}

.btn-filtro img{
    margin: auto 10px;
}

.cadTabela{
    width: 1120px;
    margin: 0 auto;
    font-family: sans-serif;
    font-weight: bold;
    vertical-align: middle;
    margin-bottom: 40px;
}

.cadTabela tr{
    width: 1120px;
    margin: 0 auto;
    border:  1px solid #4285F4;
    font-family: sans-serif;
    padding: 12px;
    font-weight: bold;
    vertical-align: middle;
    margin-bottom: 40px;
}

.cadTabela td{
    width: 1120px;
    margin: 0 auto;
    border:  1px solid #4285F4;
    font-family: sans-serif;
    padding: 12px;
    font-weight: bold;
    vertical-align: middle;
    margin-bottom: 40px;
}

.cadTabela th{
    background: #4285F4;
    color: white;
    font-family: sans-serif;
    padding: 12px;
    text-align: left;
    width: 1120px;
    margin: 0 auto;
    font-weight: bolder;
}

.bg-acao{
    border-radius: 10px;
    background: #E5E5E5;
    width: 200px;
    max-height: 40px;
    margin: 0 auto;
    font-weight: normal;
    display: flex;
    justify-content: center;
    padding: 5px 0px;
}

.bg-acao button{
    border: none;
    background-color: #E5E5E5;
}

.bg-acao img{
    padding-left: 15px;
}

.bg-acao p{
    padding-top: 10px;
    padding-left: 15px;
    padding-bottom: 10px;
}

.link-msg{
    color: #EB4335;
}
}
`;