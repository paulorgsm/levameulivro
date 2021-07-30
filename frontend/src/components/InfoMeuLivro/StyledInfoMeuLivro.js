import styled, { css } from "styled-components";

export const StyledInfoMeuLivro = styled.div`
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

.imagem-livro {
    max-width: 50px;
}
}
`;