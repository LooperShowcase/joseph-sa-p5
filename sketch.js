function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  strokeWeight(2);
  translate(width / 2, height / 2);

  background(0);

  var radius = int(min(width, height) / 2);
  var numPoints = 60;
  var angle = TWO_PI / numPoints;

  var secondsRadius = radius * 0.72;
  var minutesRadius = radius * 0.6;
  var hoursRadius = radius * 0.5;
  var clockDiameter = radius * 1.8;

  // Draw the clock background
  fill(0);
  noStroke();
  ellipse(0, 0, clockDiameter, clockDiameter);
  // subtract HALF_PI to make them start at the top
  var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
  //Draw the minute/second ticks
  // beginShape() will build the points into a single custom shape
  strokeWeight(2);
  stroke(255);
  beginShape(POINTS);
  var i = 0;
  while (i < numPoints) {
    x = cos(angle * i) * secondsRadius;
    y = sin(angle * i) * secondsRadius;
    vertex(x, y);
    i++;
  }
  endShape();

  strokeWeight(3);
  stroke("white");
  line(0, 0, cos(s) * secondsRadius, sin(s) * secondsRadius);
  strokeWeight(5);
  stroke("white");
  line(0, 0, cos(m) * minutesRadius, sin(m) * minutesRadius);
  stroke("white");
  strokeWeight(6); // hour hand should be thicker
  line(0, 0, cos(h) * hoursRadius, sin(h) * hoursRadius);

  // Write the numerals
  fill(255);
  textSize(20);
  strokeWeight(1);
  x = cos(PI + HALF_PI) * secondsRadius - 10;
  y = sin(PI + HALF_PI) * secondsRadius - 10;
  text("12", x, y);

  x = cos(TWO_PI) * secondsRadius + 10;
  y = sin(TWO_PI) * secondsRadius + 5;
  text("3", x, y);
  x = cos(HALF_PI) * secondsRadius - 7;
  y = sin(HALF_PI) * secondsRadius + 20;
  text("6", x, y);
  x = cos(PI) * secondsRadius - 25;
  y = sin(PI) * secondsRadius + 5;
  text("9", x, y);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
