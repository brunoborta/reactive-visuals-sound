// p = p5 Sketch Object
export default function Sketch(p) {
  p.preload = () => {};

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);

    p.rectMode(p.CENTER);
  };

  p.draw = () => {
    p.background(0);

    p.translate(p.width / 2, p.height / 2);
    // p.rect(posX, posY, 500, 500);
    p.rect(0, 0, 500, 500);
  };
}
