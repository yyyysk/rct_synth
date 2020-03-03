let yoff = 0.0;
let snowflakes = [];
let r = 0;
let g = 0;
let b = 0;

function setup() {
  let canvas = createCanvas(innerWidth, 400);
  canvas.position(0,0);
}

function draw() {
  background(51);

  fill(255);
  rect(0, 300, window.innerWidth, 100);

  noStroke();
  beginShape();

  let xoff = 0;
  for (let x = 0; x <= width; x += 10) {

    let y = map(noise(xoff, yoff), 0, 1, 200, 300);

    vertex(x, y);
    if (keyIsPressed)xoff += 0.05;
  }

  if (keyIsPressed) yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);


  if (!keyIsPressed) return;
  fill(r, g, b);
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

function keyPressed() {
  r = random(200, 255);
  g = random(200, 255);
  b = random(200, 255);
}


function snowflake() {
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 8);

  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    let w = 0.6; 
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    this.posY += pow(this.size, 0.5);

    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
