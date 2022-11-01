export default function Sketch(p5SketchObject) {
  p5SketchObject.preload = () => {};

  p5SketchObject.setup = () => {
    p5SketchObject.createCanvas(200, 200);
  };

  p5SketchObject.draw = () => {
    p5SketchObject.background(0);
    p5SketchObject.fill(255);
    p5SketchObject.ellipse(100, 100, 50, 50);
  };
}
