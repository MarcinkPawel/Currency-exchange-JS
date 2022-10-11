let formElement = document.querySelector(".js-form");
let currencyToElement = document.querySelector(".js-currnecyTo");
let amountElement = document.querySelector(".js-amount");
let exchangeRateElement = document.querySelector(".js-exchangeRate");
let resultElement = document.querySelector(".js-result");

let pln = 1;
let eur = 4.86;
let usd = 5.09;
let gbp = 5.53;
let rub = 0.04;
let chf = 5.02;

formElement.addEventListener("input", (event) => {
    event.preventDefault();

    switch (currencyToElement.value) {
        case "PLN":
            exchangeRateElement.innerText = pln;
            break;
        case "EUR":
            exchangeRateElement.innerText = eur;
            break;
        case "USD":
            exchangeRateElement.innerText = usd;
            break;
        case "GBP":
            exchangeRateElement.innerText = gbp;
            break;
        case "RUB":
            exchangeRateElement.innerText = rub;
            break;
        default:
            exchangeRateElement.innerText = chf;
    }
})


formElement.addEventListener("submit", (rate) => {
    rate.preventDefault();

    if (currencyToElement.value === "PLN") {
        result = amountElement.value / pln;
    } else if (currencyToElement.value === "EUR") {
        result = amountElement.value / eur;
    } else if (currencyToElement.value === "USD") {
        result = amountElement.value / usd;
    } else if (currencyToElement.value === "GBP") {
        result = amountElement.value / gbp;
    } else if (currencyToElement.value === "RUB") {
        result = amountElement.value / rub;
    } else {
        result = amountElement.value / chf;
    }

    resultElement.innerText = `You will get ${result.toFixed(2)}`;

})