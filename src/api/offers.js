export function getOffers() {
    return fetch("https://content.sixt.io/codingtasks/offers.json")
      .then(response => {
        return response.json();
    });
};