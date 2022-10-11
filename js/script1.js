let formElement = document.querySelector(".js-form");
let currencyFromElement = document.querySelector(".js-currencyFrom");
let currencyToElement = document.querySelector(".js-currnecyTo");
let amountElement = document.querySelector(".js-amount");
let exchangeRateElement = document.querySelector(".js-exchangeRate");
let resultElement = document.querySelector(".js-result");

let amount = amountElement.value;
let currency = currencyToElement.value;


//formElement.addEventListener("submit", (action) => {
    //action.preventDefault();





    //console.log(currencyToElement.value);

//});

formElement.addEventListener("input", (rate) => {
    rate.preventDefault();
    exchangeRateElement.innerText = `${currency}`;
})