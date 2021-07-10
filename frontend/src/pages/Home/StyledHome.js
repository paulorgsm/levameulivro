import styled, { css } from "styled-components";

export const StyledHome = styled.div`
  .strong {
    font-weight: bold;
    color: #feee08;
  }

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 100%;
    height: 300px;
  }

  .carousel-tamanho {
    max-width: 1040px;
  }
  .nav-carrosel > ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }

  .nav-carrosel > ul > li {
    border: 1px solid;
    border-radius: 50px;
    width: 15px;
    height: 15px;
    margin: 5px;
  }

  .ul {
    position: absolute;
    bottom: 230px;
    left: 700px;
  }

  .img-card {
    display: flex;
    justify-content: center;
  }

  .card-1 {
    background: #eb4335;
    display: flex;
    padding: 10px;
  }

  .img_1 {
    background: white;
    min-width: 100px;
    border-radius: 50px;
  }

  .card-1 > p {
    display: flex;
    align-items: center;
    padding: 10px;
    font-weight: 700;
  }

  .card-2 {
    background: #fcbc05;
    display: flex;
    padding: 10px;
    margin-left: 2px;
  }

  .img_2 {
    background: white;
    min-width: 100px;
    border-radius: 50px;
  }

  .card-2 > p {
    display: flex;
    align-items: center;
    padding: 10px;
    font-weight: 700;
  }

  .card-3 {
    background: #34a853;
    display: flex;
    padding: 10px;
    margin-left: 2px;
  }

  .img_3 {
    background: white;
    min-width: 100px;
    border-radius: 50px;
  }

  .card-3 > p {
    display: flex;
    align-items: center;
    padding: 10px;
    font-weight: 700;
  }

  .card-4 {
    background: #31a1de;
    display: flex;
    padding: 10px;
    margin-left: 2px;
  }

  .img_4 {
    background: white;
    min-width: 100px;
    border-radius: 50px;
  }

  .card-4 > p {
    display: flex;
    align-items: center;
    padding: 10px;
    font-weight: 700;
  }

  .trocas-livros {
    display: flex;
    background: #31a1de;
    margin-top: 20px;
    padding: 20px;
  }

  .trocas-livros > p {
    display: flex;
    align-items: center;
    color: white;
    font-weight: 700;
  }

  .trocas-livros > p > a {
    padding-left: 15px;
    color: yellow;
    font-weight: bold;
  }

  .section1 > div > img {
    max-width: 100%;
    display: block;
    width: 200px;
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
  .section1 {
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    max-width: 1020px;
    margin: 0 auto;
  }

  .section1 > div {
    flex: 1 1 200px;
    margin: 10px;
  }

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

  .nao-dispo {
    padding-top: 12px;
    display: inline-block;
    font-size: 12px;
    color: #eb4335;
    padding-left: 10px;
  }

  .img {
    display: contents;
    margin-left: 11px;
  }

  .img-3,
  .img-4 {
    width: 65px;
    padding-left: 2px;
  }

  .vector > div > img {
    max-width: 100%;
    display: block;
    width: 280px;
    flex-wrap: wrap;
  }

  .vector > img > div {
    padding-right: 280px;
  }

  .vector {
    display: flex;
    flex-wrap: wrap;
    max-width: 1450px;
    margin: 0 auto;
    padding-top: 50px;
  }

  .vector div {
    flex: 1 1 200px;
  }

  .vectorh2 {
    font-size: 32px;
    padding-bottom: 12px;
    color: #d4264b;
  }

  .vectorP {
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 12px;
  }

  .vectorUl {
    display: flex;
    padding-left: 243px;
    padding-top: 26px;
  }

  .linkul {
    list-style: none;
  }

  .link {
    text-decoration: none;
    list-style: none;
    color: #3146de;
    font-weight: bold;
  }

  .h2 {
    font-size: 32px;
    color: #e69407;
    padding-bottom: 12px;
  }

  .desejados {
    display: flex;
    background: #4285f4;
    margin-top: 30px;
    padding: 20px;
    color: white;
    font-weight: bold;
  }

  /* Daqui para baixo temos o carrossel */

  @keyframes tonext {
    75% {
      left: 0;
    }
    95% {
      left: 100%;
    }
    98% {
      left: 100%;
    }
    99% {
      left: 0;
    }
  }

  @keyframes tostart {
    75% {
      left: 0;
    }
    95% {
      left: -300%;
    }
    98% {
      left: -300%;
    }
    99% {
      left: 0;
    }
  }

  @keyframes snap {
    96% {
      scroll-snap-align: center;
    }
    97% {
      scroll-snap-align: none;
    }
    99% {
      scroll-snap-align: none;
    }
    100% {
      scroll-snap-align: center;
    }
  }

  /*   body {
    max-width: 37.5rem;
    margin: 0 auto;
    padding: 0 1.25rem;
    font-family: 'Lato', sans-serif;
  } */

  * {
    box-sizing: border-box;
    scrollbar-color: transparent transparent; /* thumb and track color */
    scrollbar-width: 0px;
  }

  *::-webkit-scrollbar {
    width: 0;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background: transparent;
    border: none;
  }

  * {
    -ms-overflow-style: none;
  }

  ol,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .carousel {
    position: relative;
    padding-top: 25%;
    filter: drop-shadow(0 0 10px #0003);
    perspective: 100px;
    max-height: 450px;
  }

  .carousel__viewport {
    position: absolute;
    top: 0;
    right: 0;
    bottom: -14px;
    left: 0;
    display: flex;
    overflow-x: scroll;
    counter-reset: item;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
  }

  .carousel__slide {
    position: relative;
    flex: 0 0 100%;
    width: 100%;
    background-color: #f99;
    counter-increment: item;
  }

  .carousel__slide:nth-child(even) {
    background-color: #99f;
  }

  .carousel__slide:before {
    content: counter(item);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -40%, 70px);
    color: #fff;
    font-size: 2em;
  }

  .carousel__snapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    scroll-snap-align: center;
  }

  @media (hover: hover) {
    .carousel__snapper {
      animation-name: tonext, snap;
      animation-timing-function: ease;
      animation-duration: 4s;
      animation-iteration-count: infinite;
    }

    .carousel__slide:last-child .carousel__snapper {
      animation-name: tostart, snap;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .carousel__snapper {
      animation-name: none;
    }
  }

  .carousel:hover .carousel__snapper,
  .carousel:focus-within .carousel__snapper {
    animation-name: none;
  }

  .carousel__navigation {
    position: absolute;
    right: 0;
    bottom: 10px;
    left: 0;
    text-align: center;
  }

  .carousel__navigation-list,
  .carousel__navigation-item {
    display: inline-block;
  }

  .carousel__navigation-button {
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    background-color: rgba(255, 255, 255, 0.7);
    background-clip: content-box;
    border: 0.15rem solid #4285f4;
    border-radius: 50%;
    font-size: 0;
    transition: transform 0.1s;
  }

  .carousel::before,
  .carousel::after,
  .carousel__prev,
  .carousel__next {
    position: absolute;
    top: 0;
    margin-top: 12.5%;
    width: 3rem;
    height: 3rem;
    transform: translateY(-50%);
    border-radius: 50%;
    font-size: 0;
    outline: 0;
    margin-left: 20px;
    margin-right: 20px;
  }

  .carousel::before,
  .carousel__prev {
    left: -1rem;
  }

  .carousel::after,
  .carousel__next {
    right: -1rem;
  }

  .carousel::before,
  .carousel::after {
    content: "";
    z-index: 1;
    background-color: #333;
    background-size: 1rem 1rem;
    background-repeat: no-repeat;
    background-position: center center;
    color: #fff;
    font-size: 1rem;
    line-height: 1rem;
    text-align: center;
    pointer-events: none;
  }

  .carousel::before {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,50 80,100 80,0' fill='%23fff'/%3E%3C/svg%3E");
  }

  .carousel::after {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='100,50 20,100 20,0' fill='%23fff'/%3E%3C/svg%3E");
  }

  /* Linha Vertical*/

  .linha-vertical {
    height: 15px; /*Altura da linha*/
    border-left: 2px solid white; /* Adiciona borda esquerda na div como ser fosse uma linha.*/
    margin-left: 15px;
  }
`;
