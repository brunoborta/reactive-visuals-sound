import React, { useEffect, useRef } from "react";

import "../../helpers/p5SoundFix";
import "p5/lib/addons/p5.sound";
import p5 from "p5";

export default function Canvas({ sketch }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    new p5(sketch, canvasRef.current);
  }, [sketch]);

  return <div ref={canvasRef}></div>;
}
