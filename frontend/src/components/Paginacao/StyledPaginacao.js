import styled, { css } from "styled-components";

export const StyledPaginacao = styled.div`


.paginacao {
    width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    font-family: sans-serif;
    color: #4285F4;
    text-align: center;
    justify-content: center;
}

.pag-nav {
    width: 40px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #4285F4;
    /* box-sizing: border-box; */    
}

.pag-nav-numb {
    margin: 0px;
    width: 40px;
    height: 40px;
    background: #F6F6F6;
    border: 1px solid #4285F4;
    /* box-sizing: border-box; */  
}

.pag-nav-numb p{
    padding-top: 10px;
}

.pag-nav img {
    padding-top: 10px;
}

.cor{
    color:#4285F4;
}
`;