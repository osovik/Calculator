// noinspection JSValidateTypes

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');
//test comit
function addition() {
    let number1 = input1.value;
    number1 = parseInt(number1);
    let number2 = input2.value;
    number2 = parseInt(number2);
    let result = number1 + number2;
    document.getElementById('answer').innerHTML = Number(result);
}

function subtraction() {
    let number1 = input1.value;
    number1 = parseInt(number1);
    let number2 = input2.value;
    number2 = parseInt(number2);
    let result = number1 - number2;
    document.getElementById('answer').innerHTML = Number(result);
}

function multiplication() {

    let number1 = input1.value;
    number1 = parseInt(number1);
    let number2 = input2.value;
    number2 = parseInt(number2);
    let result = number1 * number2;
    document.getElementById('answer').innerHTML = Number(result);
}

function division() {

    let number1 = input1.value;
    number1 = parseInt(number1);
    let number2 = input2.value;
    number2 = parseInt(number2);
    let result = number1 / number2;
    document.getElementById('answer').innerHTML = Number(result);
}

