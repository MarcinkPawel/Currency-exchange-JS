{
    const formElement = document.querySelector(".js-form");
    const currencyToElement = document.querySelector(".js-currnecyTo");

    const pln = 1;
    const eur = 4.86;
    const usd = 5.09;
    const gbp = 5.53;
    const rub = 0.04;
    const chf = 5.02;

    const exchangeRateElement = document.querySelector(".js-exchangeRate");

    const chooseCurrency = (currencyToElement) => {
        switch (currencyToElement.value) {
            case "PLN":
                return exchangeRateElement.innerText = pln;

            case "EUR":
                return exchangeRateElement.innerText = eur;

            case "USD":
                return exchangeRateElement.innerText = usd;

            case "GBP":
                return exchangeRateElement.innerText = gbp;

            case "RUB":
                return exchangeRateElement.innerText = rub;

            default:
                return exchangeRateElement.innerText = chf;
        }
    }

    const amountElement = document.querySelector(".js-amount");
    const resultElement = document.querySelector(".js-result");

    const calculateResult = (currencyToElement, amountElement) => {

        switch (currencyToElement.value) {
            case "PLN":
                return amountElement.value / pln;

            case "USD":
                return amountElement.value / usd;

            case "GBP":
                return amountElement.value / gbp;

            case "RUB":
                return amountElement.value / rub;

            default:
                return amountElement.value / chf;
        }
    }

    formElement.addEventListener("input", (event) => {
        event.preventDefault();

        let showCurrency = chooseCurrency(currencyToElement);

        exchangeRateElement.innerText = showCurrency;
    })

    formElement.addEventListener("submit", (rate) => {
        rate.preventDefault();

        let result = calculateResult(currencyToElement, amountElement);

        resultElement.innerText = `You will get ${result.toFixed(2)}`;
    })
}