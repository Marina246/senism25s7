/*
Name: Marina Senis
Student Number: 100774596
File: main.js
Date: July 17th, 2025
Assignment 4 part 2 js file
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const fileNames = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];

/* Declaring the alternative text for each image file */
const altText = {
  "pic1.jpg": "Closeup of blue eye",
  "pic2.jpg": "Wave pattern on rocks",
  "pic3.jpg": "Purple and white flowers",
  "pic4.jpg": "Pharaohs tomb inscyptions",
  "pic5.jpg": "Butterfly on leaf"
};

/* Looping through images */

for (const image of fileNames) {
  const newImage = document.createElement('img');

  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', altText[image]);

  thumbBar.appendChild(newImage);

  // event listener for the click event (which image and then displays it)
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

