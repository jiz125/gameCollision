let score = 10;
let move = 3;

let collide = false;
let ava1;

let bubbles = [];
let bubbles2 = [];
let objectX = [200, 400, 80];
let objectY = [200, 50, 80];
let object2X = [400, 300, 80];
let object2Y = [300, 270, 280];

function setup() {
  createCanvas(600, 400);
  // rectMode(CENTER);
  textSize(20);


  for (let i = 0; i < 3; i++) { //white bubble
    bubbles[i] = new Bubble(objectX[i], objectY[i]);
  }


  for (j = 0; j < 3; j++) { //black bubble
    bubbles2[j] = new Bubble(object2X[j], object2Y[j])
  }

  ava1 = new Avator();

}

function draw() {
  background(100, 50, 70)


  if (collide == true) {
    move = move * -1
  } else {
    move = 3
  }

  for (i = 0; i < 3; i++) { //white bubble


    bubbles[i].body();
  }

  for (j = 0; j < 3; j++) { //black bubble

    bubbles2[j].body2();
  }

  ava1.body();
  ava1.move();
  ava1.checkCollison()
  ava1.checkCollison2()



  text('score' + score, width / 2, 350)

}



function keyPressed() {

  for (let i = 0; i < 3; i++) {
    let d = int(dist(ava1.x, ava1.y, bubbles[i].x, bubbles[i].y)); //set broundries for white circles.
    if (keyCode == 32 && d < 55) {

      console.log('hit sadness');
      score = score - 1;
    }
  }
}


//black happiness circles



class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = 60;
  }

  body() {
    fill(255);
    ellipse(this.x, this.y, this.r);
  }
  body2() {
    fill(0);
    ellipse(this.x, this.y, this.r);
  }
}




class Avator {

  constructor(x, y, r) {
    this.x = 400;
    this.y = 400;
    this.r = 40;
    this.c = color(120, 100, 20)
  }


  body() {
    fill(this.c);
    ellipse(this.x, this.y, this.r)
  }


  move() {

    if (keyIsDown(87)) { //press W to go up
      this.y -= move;
    }
    if (keyIsDown(83)) { //press S to go down
      this.y += move;
    }
    if (keyIsDown(65)) { //press A to go left
      this.x -= move;
    }
    if (keyIsDown(68)) { //press D to go right
      this.x += move;
    }

    //////////set the boundry for the window//////////

    if (this.x < 0) { //set left window boundry
      this.x = this.x + move
    }
    if (this.x > width) { //set right window boundry
      this.x = this.x - move
    }
    if (this.y < 0) { //set top window boundry
      this.y = this.y + move
    }
    if (this.y > height) { //set bottom window boundry
      this.y = this.y - move
    }
  }

  //////set the boundry for each circle//////////////

  checkCollison() {

    // for (i = 0; i < 3; i++) {

    let d = dist(this.x, this.y, bubbles[0].x, bubbles[0].y);
    let d2 = dist(this.x, this.y, bubbles[1].x, bubbles[1].y);
    let d3 = dist(this.x, this.y, bubbles[2].x, bubbles[2].y)


    if (d < 50 || d2 < 50 || d3 < 50) {
      // move = move * -1;
      collide = true
      // move = !move ;
      //   console.log('bumped')
    } else {
      collide = false;
    }
  }





  checkCollison2() {


    let d2d = dist(this.x, this.y,
      bubbles2[0].x, bubbles2[0].y);
    let d2d1 = dist(this.x, this.y,
      bubbles2[1].x, bubbles2[1].y);
    let d2d2 = dist(this.x, this.y,
      bubbles2[2].x, bubbles2[2].y);

    if (d2d < 50 || d2d1 < 50 || d2d2 < 50) {
      // move = move * -1;
      collide = true
      // console.log('bumped')
    } else {
      // move = 3;
      collide = false;

      // console.log('no bumped')
    }

  }
}
