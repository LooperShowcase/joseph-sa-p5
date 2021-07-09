function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("black");
  translate(width / 2, height / 2);
  rotate(-90);
  let hours = hour();
  let minutes = minute();
  let seconds = second();
  console.log(`${hours} : ${minutes} : ${seconds}`);
  stroke(73, 102, 140);
  strokeWeight(8);
  noFill();
  ellipse(0, 0, 300, 300);
  let secondAngle = map(seconds, 0, 60, 0, 360);
  let minuteAngle = map(minutes, 0, 60, 0, 360) + map(seconds, 0, 60, 0, 10);
  let hourAngle = map(hours % 12, 0, 12, 0, 360);
  strokeWeight(6);
  stroke(157, 159, 163);
  arc(0, 0, 250, 250, 0, secondAngle);
  stroke(207, 171, 171);
  arc(0, 0, 200, 200, 0, minuteAngle);
  stroke(153, 211, 242);
  arc(0, 0, 150, 150, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(157, 159, 163);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(207, 171, 171);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(153, 211, 242);
  line(0, 0, 50, 0);
  pop();
}
