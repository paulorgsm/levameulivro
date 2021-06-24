
function showMoreDetails(detailsID) {
    const details = document.getElementById(detailsID);
    details.classList.toggle('show-details');

    if (details.classList.contains('show-details')) {
        event.target.innerText = "Menos Detalhes";
    } else event.target.innerText = "Mais Detalhes";
}

const moreDetails = document.querySelector('.more-details');
addEventListener('click', () => { showMoreDetails('details-orders') });
addEventListener('click', () => { showMoreDetails('details-wishes') });