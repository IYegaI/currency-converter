const rates = {
    PLN: 1,
    EUR: 4.5,
    USD: 4.0,
    GBP: 5.2,
    KRW: 0.003,
    CNY: 0.6
};

function convertAll() {
    let amount = document.querySelector('input[name="numberTwo"]').value;
    if (amount <= 0) {
       alert("Kwota nie moze być na minuse lub równa 0");
       return;
    }
    let fromCurrency2 = document.querySelector('select[name="firstCurrency2"]').value;
    let result = '';
    for (let currency in rates) {
    if (currency === fromCurrency2) {
       continue; 
    }
    let convertedAmount = amount / rates[fromCurrency2] * rates[currency];
    result += `${amount} ${fromCurrency2} = ${convertedAmount.toFixed(2)} ${currency}<br>`;
    }
    
    document.getElementById('result2').innerHTML = result;
    }

function convert() {
    let amount = parseFloat(document.querySelector('input[name="numberOne"]').value);
    if (isNaN(amount) || amount <= 0) {
        alert("Kwota nie moze być na minuse lub równa 0");
        return;
    }

    const currencyFromElement = document.getElementById("dynamicSelect");
    const currencyToElement = document.querySelector('select[name="resultCurrency"]');
    const resultElement = document.querySelector('input[name="result"]');

    let currencyFrom = currencyFromElement.value;
    let currencyTo = currencyToElement.value;

    if (currencyFrom === currencyTo) {
        alert("Waluta nie może być jednakowa");
        return;
    }

    let convertedAmount = amount / rates[currencyFrom] * rates[currencyTo];
    resultElement.value = convertedAmount.toFixed(2);
}

function toggleDivs() {
    const div1 = document.getElementById("window1");
    const div2 = document.getElementById("window2");
    const button1 = document.getElementById("operation-buttons");
    const button2 = document.getElementById("operation-buttons2");

    if (div1.style.display === "flex" && button1.style.display === "block") {
        div1.style.display = "none";
        div2.style.display = "flex";
        button1.style.display = "none";
        button2.style.display = "block";
    } else {
        button1.style.display = "block";
        button2.style.display = "none";
        div1.style.display = "flex";
        div2.style.display = "none";
    }
}

let rotation = 0;

function rotateImage() {
    const img = document.getElementById("tradePic");
    rotation += 360;
    img.style.transform = `rotate(${rotation}deg)`;
}

function syncFields() {
    const numberOne = document.querySelector('input[name="numberOne"]');
    const dynamicSelect = document.getElementById("dynamicSelect");

    const numberTwo = document.querySelector('input[name="numberTwo"]');
    const firstCurrency = document.querySelector('select[name="firstCurrency"]');

    numberTwo.value = numberOne.value;
    firstCurrency.value = dynamicSelect.value;
}



