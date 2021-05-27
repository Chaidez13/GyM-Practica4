

//Circulos
function circ(xc, yc, r) {
    let x = 0;
    let y = r;
    let p = Math.round(5 / 4 - r);
  
    printOct(xc, x, yc, y);
    while (x < y) {
      x++;
      if (p < 0) {
        p += 2 * x + 1;
      } else {
        y--;
        p += 2 * (x - y) + 1;
      }
      printOct(xc, x, yc, y);
    }
  }
  
  function elip(xc, yc, rx, ry) {
    let x = 0;
    let y = ry;
    let px, py;
    const ry2 = ry * ry;
    const rx2 = rx * rx;
  
    //Región 1
    let p = Math.round(ry2 - rx2 * ry + 0.25 * rx2);
    printCuad(xc, x, yc, y);
  
  
    px = 0;
    py = 2 * rx2 * y;
    while (px < py) {
      x++;
      px += 2 * ry2;
      if (p < 0) {
        p += ry2 + px;
      } else {
        y--;
        py -= 2 * rx2;
        p += ry2 + px - py;
      }
      printCuad(xc, x, yc, y);
    }
    //Región 2
    p = Math.round(
      ry2 * (x + 0.5) * (x + 0.5) + rx2 * (y - 1) * (y - 1) - rx2 * ry2
    );
    while (y >= 0) {
      y--;
      py -= 2 * rx2;
      if (p > 0) {
        p = p - 2 * rx2 * y + rx2;
      } else {
        x++;
        p += 2 * ry2 * x - 2 * rx2 * y + rx2;
      }
      printCuad(xc, x, yc, y);
    }
  }
  
  //Auxiliares
  function printCuad(xc, x, yc, y) {
    point(xc + x, yc + y);
    point(xc + x, yc - y);
    point(xc - x, yc - y);
    point(xc - x, yc + y);
  }
  
  function printOct(xc, x, yc, y) {
    point(xc + x, yc + y);
    point(xc + x, yc - y);
    point(xc - x, yc + y);
    point(xc - x, yc - y);
    point(xc + y, yc + x);
    point(xc + y, yc - x);
    point(xc - y, yc + x);
    point(xc - y, yc - x);
  }
  