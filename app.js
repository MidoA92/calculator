let calculation = document.getElementById('calculation-input');
let errorMessage = document.getElementById('error-message');

function addChar(char) {
    let lastChar = calculation.textContent.slice(-1);
    if (!isNaN(parseInt(lastChar)) && char === '(') {
        errorMessage.textContent = "Error: Can't add ')' directly after a number";
        return;
    }

    errorMessage.textContent = ''; 



    if (calculation.textContent === '0') {
        calculation.textContent = '';
    }

    let newCalc = calculation.textContent + char;
    calculation.textContent = newCalc;
}

function calculateResult() {
    let result = eval(calculation.textContent);
    calculation.textContent = result;
}

function clear() {
    calculation.textContent = '0';
    
}

