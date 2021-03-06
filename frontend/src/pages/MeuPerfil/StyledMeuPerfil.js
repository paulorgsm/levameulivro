import styled, { css } from "styled-components";

export const StyledMeuPerfil = styled.div`

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
    margin:10px auto;
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
    margin-right: 80px;
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
    width: 1122px;
    display: flex;
    margin:auto;
    align-items: center;
    margin: auto;
}

.infoHeader ul{
    width: 1122px;
    font-family: sans-serif;
    color: white;
    justify-content: space-around;
    align-items: center;
    margin-top: 18px;
       
}

.infoHeader li{
    display: inline;
    align-items: center;
    justify-content: space-between;
    padding-right: 34px;
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
    height: 900px;
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

.perfilGeral{
    width: 960px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    
}

.imgId{
    width: 478px;
    display: flex;
    justify-content: center;
    padding: 10px;
}

.meusDados{
    width: 410px;
    height: 326px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 80px;
}

.meusDados h2{
    /* height: 56px; */
    font-family: sans-serif;
    font-weight: 700;
    font-size: 44px;
    /* text-align: center; */
    /* line-height: 56px; */
    color:#EB4335 ;
    /* margin: 5px 0px; */
    width: 478px;
    text-align: center;
}

.meusDados p{
    font-family: sans-serif;
    /* size: 18px; */ 
    line-height: 26px;
    /* margin: 5px auto; */
    width: 268px;
    height: auto;
    background-color: #E0E0E0;
    border-radius: 10px;
    margin: 20px auto;
    padding: 10px 10px;
}

.meusDados button{
    border-radius:10px ;
    width: 216px;
    height: 46px;
    background: #EB4335;;
    border:none;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 26px;
    color: white;
    margin: auto;
}

.meusDados button:hover{

    background-color: #ff1500;
    color: white;
    transition: 0.3s;
  
}

.meuSaldo{
    width: 320px;
    height: 326px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 100px;
    margin-bottom: 80px;
    
}
.meuSaldo h2{
    font-family: sans-serif;
    font-weight: 700;
    font-size: 44px;
    /* text-align: center; */
    /* line-height: 56px; */
    color:#34A853 ;
    /* margin: 5px 0px; */
    width: 478px;
    text-align: center;
}

.meuSaldo p{
    font-family: sans-serif;
    /* size: 18px; */ 
    line-height: 26px;
    /* margin: 5px auto; */
    width: 268px;
    height: auto;
    background-color: #E0E0E0;
    border-radius: 10px;
    margin: 20px auto;
    padding: 10px 10px;
}

.meuSaldo button{
    border-radius:10px ;
    width: 216px;
    height: 46px;
    background: #34A853;
    border: none;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 26px;
    color: white;
    margin: auto;
}

.meuSaldo button:hover{
    background-color: #02b130;
    color: white;
    transition: 0.3s;
}

.imgSaldo{
    width: 478px;
    display: flex;
    justify-content: center;
    padding: 10px;
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

/* CSS Cadastrar Meus Livros*/

.imgLivros{
    width: 478px;
    display: flex;
    justify-content: center;
    padding: 10px;
}

.cadastrarLivro{
    width: 410px;
    height: 326px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 80px;
}

.cadastrarLivro h2{
    /* height: 56px; */
    font-family: sans-serif;
    font-weight: 700;
    font-size: 44px;
    /* text-align: center; */
    /* line-height: 56px; */
    color:#4285F4 ;
    /* margin: 5px 0px; */
    width: 478px;
    text-align: center;
}

.cadastrarLivro p{
    font-family: sans-serif;
    /* size: 18px; */ 
    line-height: 26px;
    /* margin: 5px auto; */
    width: 268px;
 /*    height: auto; */
    background-color: #E0E0E0;
    border-radius: 10px;
    margin: 20px auto;
    padding: 10px 10px;
    justify-content: center;
    align-items: center;
    display: flex;
}

.cadastrarLivro button{
    border-radius:10px ;
    width: 216px;
    height: 46px;
    background: #4285F4;
    border: none;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 26px;
    color: white;
    margin: auto;
}

.cadastrarLivro button:hover{

    background-color: #0061fd;
    color: white;
    transition: 0.3s;
}

/* CSS Cadastrar Pedidos de Troca*/

.imgTroca{
    width: 478px;
    display: flex;
    justify-content: center;
    padding: 10px;
}

.pedidoTroca{
    width: 418px;
    height: 326px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 80px;
    padding-left: 100px;
}

.pedidoTroca h2{
    /* height: 56px; */
    font-family: sans-serif;
    font-weight: 700;
    font-size: 44px;
    /* text-align: center; */
    /* line-height: 56px; */
    color:#FCBC05 ;
    /* margin: 5px 0px; */
    width: 478px;
    text-align: center;
}

.pedidoTroca p{
    font-family: sans-serif;
    /* size: 18px; */ 
    line-height: 26px;
    /* margin: 5px auto; */
    width: 268px;
 /*    height: auto; */
    background-color: #E0E0E0;
    border-radius: 10px;
    margin: 20px auto;
    padding: 10px 10px;
    justify-content: center;
    align-items: center;
    display: flex;
}

.pedidoTroca button{
    border-radius:10px ;
    width: 216px;
    height: 46px;
    background: #FCBC05;
    border:none;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 26px;
    color: white;
    margin: auto;
}

.pedidoTroca button:hover{

    background-color: #ffae00;
    color: white;
    transition: 0.3s;
}

.btn-saldo {
    text-decoration: none;
    color: white;
    font-family: sans-serif;
    font-size: 18px;
}
button {
    cursor: pointer;
  
  }
button:hover{
    opacity: 0.7;
    transform: scale(1.04);
}
`;