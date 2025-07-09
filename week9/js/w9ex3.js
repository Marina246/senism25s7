/*
    Name: Marina
    Student ID: 100774596
    Date: July 9th, 2025
    Description: 
*/

console.log("Test3");

function showOutput()
{
    let name = document.querySelector('#first-name').value;
    document.querySelector('#output').textContent = 'Hello ' + name;
}

document.querySelector('#btn').addEventListener('click', showOutput);