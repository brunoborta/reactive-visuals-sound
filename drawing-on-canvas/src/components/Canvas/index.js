import React, { useEffect, useRef } from "react";

import p5 from "p5";
import Sketch from "../../sketches/sketch";

export default function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    new p5(Sketch, canvasRef.current);
  }, []);

  return <div ref={canvasRef}></div>;
}
