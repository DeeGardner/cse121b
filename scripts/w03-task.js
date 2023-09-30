/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let input1 = document.querySelector("#add1");
    let input2 = document.querySelector("#add2");
    
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    
    let sum = add(number1, number2);
    
    document.querySelector("#sum").value = sum;
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let input1 = document.querySelector("#subtract1");
    let input2 = document.querySelector("#subtract2");
    let diff = document.querySelector("#difference");

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let difference = subtract(number1, number2);

    diff.value = difference;
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let input1 = document.querySelector("#factor1");
    let input2 = document.querySelector("#factor2");
    let prod = document.querySelector("#product");

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let product = multiply(number1, number2);

    prod.value = product;
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let input1 = document.querySelector("#dividend");
    let input2 = document.querySelector("#divisor");
    let quot = document.querySelector("#quotient");

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let result = divide(number1, number2);

    quot.value = result;
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */

let todaysDate = new Date();
let todaysYear = todaysDate.getFullYear();
document.querySelector("#year").innerHTML = todaysYear;

/* ARRAY METHODS - Functional Programming */

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */

document.querySelector("#array").innerHTML = array1;

/* Output Odds Only Array */

document.querySelector("#odds").innerHTML = array1.filter(number => number % 2 !== 0);

/* Output Evens Only Array */

document.querySelector("#evens").innerHTML = array1.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

document.querySelector("#sumOfArray").innerHTML = array1.reduce((sum, number) => sum + number, 0);

/* Output Multiplied by 2 Array */

document.querySelector("#multiplied").innerHTML = array1.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */

document.querySelector("#sumOfMultiplied").innerHTML = array1.map(number => number * 2).reduce((sum, number) => sum + number, 0);