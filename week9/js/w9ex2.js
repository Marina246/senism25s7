/*
    Name: Marina
    Student ID: 100774596
    Date: July 9th, 2025
    Description: 
*/

console.log("Test 2");

function showGreetingMessage()
{
    let name = window.prompt("What is your name?");
    window.alert("Hello " + name);
}

//showGreetingMessage();
document.querySelector('#btn').addEventListener('click', showGreetingMessage);