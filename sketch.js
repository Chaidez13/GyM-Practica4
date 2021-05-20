const r = 125;
const data = [
  { text: "Punto pendiente", key: ecuPP },
  { text: "DDA", key: dda },
  { text: "Bresenham", key: brhm },
];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  textAlign(CENTER);
  textSize(18);

  data.forEach((e, index) => {
    let x = (width / 4) * (index + 1);
    let y = 200;
    text(e.text, (width / 4) * (index + 1), 65);
    push();
    fill("#fcf6bb");
    circle(x, y, r * 2);
    pop();
    
    e.key(x - r, y, x + r, y);
    e.key(x, y - r, x, y + r);

    let rad1 = radians(45);
    let rad2 = radians(225);
    e.key(
      Math.floor(x + r * cos(rad2)),
      Math.floor(y + r * sin(rad2)),
      Math.floor(x + r * cos(rad1)),
      Math.floor(y + r * sin(rad1))
    );

    rad1 = radians(135);
    rad2 = radians(315);
    e.key(
      Math.floor(x + r * cos(rad2)),
      Math.floor(y + r * sin(rad2)),
      Math.floor(x + r * cos(rad1)),
      Math.floor(y + r * sin(rad1))
    );
  });
  noLoop();
}
