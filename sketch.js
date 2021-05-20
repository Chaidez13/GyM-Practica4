function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  strokeWeight(10);
  //brhm(0, 0, width, height);
  brhm(0, height, width, 0);
  //brhm(0, height / 2, width, height / 2);
  //brhm(width / 2, 0, width / 2, height);
  noLoop();
}

function ecuPP(x1, y1, x2, y2) {
  let x = x1,
    y = y1,
    stepX = 1,
    stepY = 1;
  const dx = x2 - x1;
  const dy = y2 - y1;

  if (dx == 0) {
    if (dy < 0) stepY = -1;
    while (y != y2) {
      point(x, y);
      y += stepY;
    }
  } else {
    //Pendiente
    const m = dy / dx;
    //Punto de intersección
    const b = y1 - m * x1;
    if (dx < 0) stepX = -1;
    while (x != x2) {
      point(x, y);
      x += stepX;
      y = m * x + b;
    }
  }
}

function dda(x1, y1, x2, y2) {
  let x = x1,
    y = y1;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const m = dy / dx;

  //Pendiente positiva
  if (m >= 0) {
    if (m <= 1) {
      while (x < x2) {
        point(x, y);
        x++;
        y = y + m;
      }
    } else {
      while (y < y2) {
        point(x, y);
        y++;
        x = x + 1 / m;
      }
    }
    //Pendiente negativa
  } else {
    if (m <= -1) {
      while (x > x2) {
        point(x, y);
        x--;
        y = y - m;
      }
    } else {
      while (y > y2) {
        point(x, y);
        y--;
        x = x - 1 / m;
      }
    }
  }
}

function brhm(x1, y1, x2, y2) {
  let x = x1,
    y = y1;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const m = dy / dx;
  const sx = x1 <= x2 ? 1 : -1;
  const sy = y1 <= y2 ? 1 : -1;

  if (m < 1) {
    let p = 2 * dy - dx;
    console.log(p)
    while (x != x2) {
      if (p < 0) {
        point(x+=sx, y);
        console.log(x,y)
        p = p + 2 * dy;
      } else {
        point(x+=sx, y+=sy);
        p = p + 2 * dy - 2 * dx;
      }
    }
  } else {
    let p = 2 * dx - dy;
    while (y != y2) {
      if (p < 0) {
        point(x, y+=sy);
        p = p + 2 * dx;
      } else {
        point(x+=sx, y+=sy);
        p = p + 2 * dx - 2 * dy;
      }
    }
  }
}
