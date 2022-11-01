export default function Sketch(p5SketchObject) {
  p5SketchObject.preload = () => {};

  p5SketchObject.setup = () => {
    p5SketchObject.createCanvas(
      p5SketchObject.windowWidth,
      p5SketchObject.windowHeight
    );
  };

  p5SketchObject.draw = () => {
    p5SketchObject.background(0);
    p5SketchObject.fill(255);
    p5SketchObject.ellipse(
      p5SketchObject.windowWidth / 2,
      p5SketchObject.windowHeight / 2,
      p5SketchObject.windowWidth / 4,
      p5SketchObject.windowWidth / 4
    );
  };
}
