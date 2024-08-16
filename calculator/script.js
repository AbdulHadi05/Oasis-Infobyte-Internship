let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function appendNumber(number) {
    display.innerText += number;
}

function appendOperator(operator) {
    let lastChar = display.innerText.slice(-1);
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + operator;
    } else {
        display.innerText += operator;
    }
}

function calculatePercentage() {
    let currentDisplay = display.innerText;
    if (currentDisplay) {
        display.innerText = parseFloat(currentDisplay) / 100;
    }
}

function calculate() {
    try {
        // Replace percentage symbol with division by 100
        display.innerText = eval(display.innerText.replace(/%/g, '/100'));
    } catch (error) {
        display.innerText = 'Error';
    }
}
