// API for live Forex rates (example using a free API, replace with actual API if needed)
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

// Function to fetch live rates
function fetchLiveRates() {
    fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
        .then(response => response.json())
        .then(data => {
            const rates = data.rates;
            const ticker = document.getElementById('live-ticker');
            ticker.innerHTML = `
                USD to EUR: ${rates.EUR} | 
                USD to GBP: ${rates.GBP} | 
                USD to JPY: ${rates.JPY}
            `;
        })
        .catch(err => {
            console.error('Error fetching live rates:', err);
            document.getElementById('live-ticker').innerHTML = 'Failed to load live rates.';
        });
}

// Currency conversion
document.getElementById('converter-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const fromCurrency = document.getElementById('currency-from').value;
    const toCurrency = document.getElementById('currency-to').value;
    const amount = document.getElementById('amount').value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            const result = amount * rate;
            document.getElementById('conversion-result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
        })
        .catch(err => {
            console.error('Error converting currency:', err);
            document.getElementById('conversion-result').innerText = 'Failed to convert currency.';
        });
});

// Fetch live rates when the page loads
fetchLiveRates();