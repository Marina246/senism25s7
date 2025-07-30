/*
Name: Marina Senis
Student Number: 100774596
File: main.js
Date: July 30th, 2025
Assignment 4 part 4 js file
*/

// set up canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// Creating the class shape constructor
class Shape 
{
  constructor(x, y, velX, velY) 
  {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
}


// Class ball now extends class shape
class Ball extends Shape
{
  constructor(x, y, velX, velY, color, size) {
    
    super(x, y, velX, velY); // these variables are passed in via shape

    this.color = color;
    this.size = size;

    this.exists = true; // exists variable (to be used to find out if a ball has been eaten by the evil circle later)
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    if (this.x + this.size >= width) {
      this.velX = -Math.abs(this.velX);
    }

    if (this.x - this.size <= 0) {
      this.velX = Math.abs(this.velX);
    }

    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY);
    }

    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  // copy and pasted update to the collision detect method
  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball) && ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

// Created the evil circle class that extends to the shape class
class EvilCircle extends Shape 
{
    // creating the constructor
    constructor(x, y) 
    {
        super(x, y, 20, 20); // from class shape

        this.color = "white"; // colour is white
        this.size = 10; // size set to 10

        // copied and pasted code into the constructor
        window.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "a":
            this.x -= this.velX;
            break;
            case "d":
            this.x += this.velX;
            break;
            case "w":
            this.y -= this.velY;
            break;
            case "s":
            this.y += this.velY;
            break;
        }
        });
    }
}

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();