// p = p5 Sketch Object
export default function Sketch(p) {
  p.preload = () => {};

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.rectMode(p.CENTER);
    p.strokeWeight(10);
    p.background(0);
  };

  p.draw = () => {
    p.translate(p.width / 2, p.height / 2);
    p.fill(255, 0, 0);
    p.rect(0, 0, 500, 500);

    p.push();
    p.fill(0);
    p.ellipse(0, 0, 100);
    p.pop();
  };
}
