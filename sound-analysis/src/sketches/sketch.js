import song from "./audio/01.mp3";
import p5 from "p5";

// p = p5 Sketch Object
export default function Sketch(p) {
  // Audio is the variable that stores the track
  // The amplitude is the wave of the sound (0-1)
  let audio, amplitude;

  p.preload = () => {
    audio = p.loadSound(song);
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);

    p.rectMode(p.CENTER);

    audio.setVolume(0.1);
    audio.play();
    amplitude = new p5.Amplitude();
  };

  p.draw = () => {
    p.background(0);

    // the Level gets the different aplitudes on the
    //sound at each frame (default: 60/s)
    const volume = amplitude.getLevel();

    // By using a map, we map the level from the
    //amplitude and create a number between 0-500
    const mapH = p.map(volume, 0, 0.1, 0, 500);

    console.log(amplitude.getLevel());
    console.log(mapH);
    p.translate(p.width / 2, p.height / 2);
    p.rect(0, 0, 500, mapH);
  };
}
