//Elementleri seçelim.

const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secoundOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

const currency = new Currency();

runEventListeners();

function runEventListeners() {
    amountInput.addEventListener("input", exchange)
}

function exchange() {
    const amount = Number(amountInput.value.trim());
    const firstoptionvalue = firstOption.options[firstOption.selectedIndex].textContent;
    const secondoptionvalue = secoundOption.options[secoundOption.selectedIndex].textContent;
    currency.exchange(amount, firstoptionvalue, secondoptionvalue)
        .then((result) => {
            resultInput.value = result.toFixed(2);
        })

}

