// p = p5 Sketch Object
export default function Sketch(p) {
  let posX = 0,
    posY = 0;

  p.keyPressed = () => {
    switch (p.keyCode) {
      case p.LEFT_ARROW:
        posX -= 10;
        break;
      case p.RIGHT_ARROW:
        posX += 10;
        break;
      case p.UP_ARROW:
        posY -= 10;
        break;
      case p.DOWN_ARROW:
        posY += 10;
        break;
      default:
        break;
    }
  };
  p.preload = () => {};

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);

    p.rectMode(p.CENTER);
  };

  p.draw = () => {
    p.background(0);

    // map literally maps a number to another
    //In this case, I'm mapping the values of the mouse
    //axis to a number between 0 (when close to the edge of the screen)
    // and 500 (when close to the other edge of the screen)
    const mapX = p.map(p.mouseX, 0, p.width, 0, 500);
    const mapY = p.map(p.mouseY, 0, p.height, 0, 500);

    p.translate(p.width / 2, p.height / 2);
    // p.rect(posX, posY, 500, 500);
    p.rect(posX, posY, 500, 500);
  };
}
