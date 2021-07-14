import styled, { css } from "styled-components";

export const StyledPedidos = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  /* TÍTULO - PEDIDOS DE TROCA */
  .welcome {
    font-size: 24px;
    line-height: 26px;
    text-align: center;
    color: #4285f4;
    margin: 0 auto;
    margin: 42px 0;
  }
  b {
    max-width: 981px;
  }
  .new-order {
    margin: 0 120px;
  }

  .order-header {
    display: flex;
    align-items: center;
  }

  .new-order .order-header i {
    color: #fcbc05;
  }

  .new-order .order-header h1 {
    margin: 0 0 0 20px;
    font-size: 48px;
    line-height: 56px;
    font-weight: bold;
    color: #fcbc05;
  }

  .include-see-orders {
    display: flex;
    justify-content: space-between;
    margin: 35px 0;
  }

  .include-see-orders button {
    width: 227px;
    height: 40px;
    border-radius: 10px;
    background-color: #f6f6f6;
    font-size: 18px;
    line-height: 21px;
    border: 1px solid #2f80ed;
    text-align: start;
    padding-left: 8px;
    color: #2f80ed;
    cursor: pointer;
  }

  .select-btn-green {
    width: 130px;
    height: 46px;
    background: #34a853;
    border-radius: 10px;
    font-size: 14px;
    line-height: 26px;
    color: #ffffff;
    cursor: pointer;
    padding-left: 8px;
    border: 1px solid #34a853;
  }

  .select-btn-green option {
    background-color: #f6f6f6;
    color: black;
    border-radius: 10px;
  }

  /* SEÇÃO: QUEM PEDIU MEUS LIVROS */

  .orders {
    display: block;
    margin: 0 120px;
  }

  .orders .order-header h1 {
    margin: 0 0 0 20px;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    color: #eb4335;
  }

  .orders .order-header i {
    color: #eb4335;
  }

  .full-table {
    margin: 36px 0 0 0;
    width: 1122px;
    height: 635px;
  }

  table {
    width: 1122px;
    height: 182px;
    border: 1px solid #4285f4;
  }

  .header-table {
    height: 42px;
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    background-color: #4285f4;
    color: #ffffff;
  }

  .header-table th {
    text-align: start;
    padding: 8px 0 8px 22px;
    font-weight: normal;
  }

  .image {
    width: 119px;
    height: 42px;
    left: 159px;
    top: 626px;
  }

  .title {
    width: 219px;
    height: 42px;
    left: 278px;
    top: 626px;
  }

  .people {
    width: 186px;
    height: 42px;
    left: 497px;
    top: 626px;
  }

  .date {
    width: 102px;
    height: 42px;
    left: 683px;
    top: 626px;
  }

  .status {
    width: 137px;
    height: 42px;
    left: 785px;
    top: 626px;
  }

  .code {
    width: 200px;
    height: 42px;
    left: 921px;
    top: 626px;
  }

  .acion {
    width: 161px;
    height: 42px;
    left: 1102px;
    top: 626px;
  }

  .table {
    font-size: 18px;
    height: 140px;
  }

  .table td {
    font-size: 18px;
    line-height: 26px;
    color: #000000;
    background-color: #f6f6f6;
    border-left: 1px solid #4285f4;
    font-weight: normal;
    text-align: start;
    padding: 0 0 0 16px;
  }

  .table .capa-livro {
    width: 52px;
    height: 79px;
  }

  .orders .capa-livro {
  }

  td .fa-user-circle {
    color: #4285f4;
  }

  td .more-details {
    width: 155px;
    height: 30px;
    left: 513px;
    top: 768px;
    font-weight: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #4285f4;
    border-radius: 10px;
    border: 1px solid #4285f4;
    cursor: pointer;
  }

  .btn-green {
    font-weight: bold;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
    background: #34a853;
    border-radius: 10px;
    border: 1px solid #34a853;
    cursor: pointer;
  }

  td .btn-green {
    width: 125px;
    height: 28px;
    margin-bottom: 12px;
  }

  .btn-red {
    font-weight: bold;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
    background: #eb4335;
    border-radius: 10px;
    border: 1px solid #eb4335;
    cursor: pointer;
  }

  td .btn-red {
    width: 125px;
    height: 28px;
  }

  /* MAIS DETALHES DE QUEM PEDIU MEUS LIVROS */

  .details {
    display: none;
    justify-content: space-between;
    width: 1122px;
    height: 339px;
    left: 159px;
    top: 808px;
    background: #e5e5e5;
    padding: 25px 25px 34px 23px;
  }

  .details.show-details {
    display: flex;
  }

  @keyframes details {
    from {
      opacity: 0;
      transform: translate3d(0, -60%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .show-details.details {
    animation: details 0.2s;
  }

  .details h3 {
    height: 70px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 26px;
    color: #000000;
    text-transform: uppercase;
  }

  .details p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 26px;
    color: #000000;
  }

  .details p a {
    color: #eb4335;
  }

  .order-historic {
    width: 573px;
    height: 280px;
    left: 683px;
    top: 833px;
    background: #f6f6f6;
    padding: 18px 28px 0 28px;
  }

  .order-historic-one {
    width: 515px;
    height: 87px;
    margin-bottom: 17px;
  }

  .order-historic-one h4 p {
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
    line-height: 26px;
    color: #000000;
  }

  .order-historic-one p {
    margin-bottom: 8px;
  }

  .order-historic .btn-green {
    width: 189px;
    height: 27px;
    margin-right: 22px;
  }

  .order-historic .btn-red {
    width: 189px;
    height: 27px;
  }

  .order-historic-two {
    width: 515px;
    height: 72px;
  }

  .order-historic-two .btn-green {
    width: 106px;
    height: 27px;
  }

  .order-historic-two label {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 26px;
    color: #000000;
  }

  .order-historic-two input {
    width: 274.37px;
    height: 40px;
    left: 711.8px;
    top: 987px;
    background: #e5e5e5;
    border-radius: 10px;
    margin-right: 19px;
    border: none;
  }

  .order-historic-two input::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    color: #000000;
    padding: 6px 118px 8px 21px;
  }

  .order-historic-two .btn-edit {
    height: 23px;
    color: #000000;
    border: none;
    background: #f6f6f6;
    cursor: pointer;
  }

  /* SEÇÃO: LIVROS QUE EU PEDI */

  .wishes {
    display: block;
    margin: 0 120px;
  }

  .wishes .wishes-header {
    display: flex;
  }

  .wishes .wishes-header h1 {
    margin: 0 0 0 20px;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    color: #f62cbc;
  }

  .wishes .wishes-header i {
    color: #f62cbc;
  }

  .wishes a .capa-livro {
    background: url(../../assets/img/livro2.svg);
  }

  /* BOTÕES DE TROCA DE PÁGINA */

  .btn-change-page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1122px;
    height: 100px;
  }

  .btn-change-page button {
    width: 40px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #4285f4;
    cursor: pointer;
  }

  /* MODAIS*/

  .modal {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2000;
    display: none;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  /*
.modal.show-modal {
    display: flex;
}
*/

  .fa-exclamation-circle {
    color: #fcbc05;
    width: 124px;
    height: 124px;
    padding: 69px 363px 22px 363px;
  }

  .fa-check-circle {
    color: #34a853;
    width: 132px;
    height: 133px;
    padding: 69px 363px 22px 363px;
  }

  .modal-orders {
    background: #ffffff;
    border-radius: 20px;
    width: 60%;
    min-width: 300px;
  }
  /*
@keyframes modal-orders {
    from {
        opacity: 0;
        transform: translate3d(0, -60%, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

.show-modal.modal-orders {
    animation: modal-orders .3s;
}
*/

  .modal-orders h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    color: #000000;
    padding-top: 22px;
  }

  .modal-orders p,
  label {
    padding-top: 22px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #000000;
  }

  .accept-order {
    width: 850px;
    height: 455px;
  }

  .modal button {
    margin-top: 24px;
    width: 188px;
    height: 35px;
    text-transform: uppercase;
  }

  .modal .btn-red {
    margin-right: 16px;
  }

  .modal .button {
    padding: 22px 227px 68px 227px;
  }

  .reject-order {
    width: 853px;
    height: 560px;
  }

  .reject-order .select {
    width: 382px;
    height: 81px;
    margin: 29px 235px 20px 235px;
  }

  .select select {
    margin: 9px 60px 0 60px;
    width: 260px;
    height: 40px;
    background: #e0e0e0;
    border-radius: 10px;
    border: 1px solid #e0e0e0;
    cursor: pointer;
  }

  .select select option {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    color: #4f4f4f;
    cursor: pointer;
  }

  .reject-order .button {
    margin-top: -48px;
  }

  .modal .confirmed-order {
    width: 850px;
    height: 455px;
  }

  .modal .confirmed-order span {
    color: #eb4335;
  }

  .modal .confirmed-reject {
    width: 850px;
    height: 455px;
  }

  .modal .book-arrived {
    width: 853px;
    height: 449px;
  }

  .modal .book-arrived p {
    margin-bottom: -16px;
  }

  .modal .book-problem {
    width: 853px;
    height: 519px;
  }

  .modal .exchange-completed {
    width: 853px;
    height: 449px;
  }

  .modal .confirmed-problem {
    width: 853px;
    height: 459px;
  }

  .modal .confirmed-problem button {
    margin-top: -20px;
    border-radius: 10px;
    cursor: pointer;
  }

  .modal .confirmed-problem .btn-blue {
    width: 159px;
    height: 35px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
    background: #4285f4;
    border: 1px solid #4285f4;
  }

  .modal .confirmed-problem .btn-rose {
    width: 201px;
    height: 34px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 26px;
    color: #ffffff;
    background: #f62cbc;
    border: 1px solid #f62cbc;
    margin-left: 28px;
  }
`;
