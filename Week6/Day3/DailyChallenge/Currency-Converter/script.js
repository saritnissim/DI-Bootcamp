// API KEY
const API_KEY = `528e9e2df21455c1904b9782`

// DOM Items
let fromCurrencyDropdown = document.getElementById("fromCurrency")
let toCurrencyDropdown = document.getElementById("toCurrency")
const getRateBtn = document.getElementById("getRateBtn")


async function getExchangeRate(fromCurrency, toCurrency){
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`)
        const result = await response.json()
        return result.conversion_rate

    } catch(error) {
        console.log(error)
    }
}
// First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.
async function fetchCurrencies() {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`)
        if (!response.ok){
            throw new Error("Couldn't retrieve currencies")
        }
        const result = await response.json()
        const currencies = result.supported_codes
        return currencies
    } catch(error){
        console.log(error)
    }
}


getRateBtn.addEventListener('click', async () => {
    const fromCurrency = fromCurrencyDropdown.value;
    const toCurrency = toCurrencyDropdown.value;
    if (!fromCurrency || !toCurrency) {
        alert("Please select both currencies.");
        return;
    }

    const rate = await getExchangeRate(fromCurrency, toCurrency);
    if (rate) {
        alert(`Exchange Rate: 1 ${fromCurrency} = ${rate} ${toCurrency}`);
    } else {
        alert("Error fetching the exchange rate.");
    }
});

async function populateDropdowns(){
    const allCurrencies = await fetchCurrencies()

    allCurrencies.forEach(currency => {
        let optionElement = document.createElement('option');
        optionElement.value = currency[0]; // Set the currency code as the value
        optionElement.textContent = currency[1]; // Set the currency name as the text
        
        // Clone the node for both dropdowns to avoid duplication
        fromCurrencyDropdown.appendChild(optionElement.cloneNode(true));
        toCurrencyDropdown.appendChild(optionElement);
    });
}

populateDropdowns()