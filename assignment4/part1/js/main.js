/*
Name: Marina Senis
Student Number: 100774596
File: main.js
Date: July 16th, 2025
Assignment 4 part 1 js file
*/

// Initial variables and functions:
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// String for story text
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// Arrays for inserts
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// Placing the event handler and incomplete function:
randomize.addEventListener('click', result);

function result() {
    //Completing the result() function:
    let newStory = storyText;

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":insertx:", xItem); // because there are 2 :insertx:
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    // 1 stone = 14 pounds
    const weight = Math.round(300 / 14) + ' stones';
    // Fahrenheit to Celsius
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';

    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
}

  story.textContent = newStory;
  story.style.visibility = 'visible';
}






