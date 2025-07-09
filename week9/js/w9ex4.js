/*
    Name: Marina
    Student ID: 100774596
    Date: July 9th, 2025
    Description: 
*/

console.log("Test4");

function showResult()
{
    let number1 = document.querySelector('#first-number').value;
    let number2 = document.querySelector('#second-number').value;
    let result = number1 * number2;
    document.querySelector('#output').textContent = 'The multiplication of ' + number1 + ' and ' + number2 + ' is: ' + result;
}

document.querySelector('#btn').addEventListener('click', showResult);