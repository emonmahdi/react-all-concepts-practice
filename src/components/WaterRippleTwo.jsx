import  { useEffect, useRef } from "react";
import regl from "regl";

const WaterRippleTwo = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");

    if (!gl) {
      console.error("WebGL not supported.");
      return;
    }

    const reglInstance = regl({ canvas });

    const state = {
      time: 0,
      drops: [],
    };

    const createDrop = (x, y, strength = 0.1) => {
      state.drops.push({ x, y, strength, time: state.time });
    };

    // Handle mouse movement
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;
      createDrop(x, y, 0.02);
    };

    // Handle click event
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;
      createDrop(x, y, 0.3);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);

    const drawWater = reglInstance({
      frag: `
      precision mediump float;
      uniform float time;
      uniform vec2 drops[10];
      uniform float strengths[10];

      void main() {
        vec2 uv = gl_FragCoord.xy / vec2(400.0, 400.0);
        float dist = 0.0;

        for (int i = 0; i < 10; i++) {
          float d = distance(uv, drops[i]);
          dist += strengths[i] * sin(10.0 * d - time * 2.0) / (d + 0.1);
        }

        vec3 waterColor = vec3(0.0, 0.4, 0.8);
        vec3 highlight = vec3(0.8, 0.9, 1.0);
        vec3 color = mix(waterColor, highlight, dist);

        gl_FragColor = vec4(color, 1.0);
      }`,

      vert: `
      precision mediump float;
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0, 1);
      }`,

      attributes: {
        position: [
          [-1, -1], [1, -1], [1, 1],
          [-1, -1], [1, 1], [-1, 1]
        ],
      },

      uniforms: {
        time: () => state.time,
        drops: () => state.drops.map(d => [d.x, d.y]),
        strengths: () => state.drops.map(d => d.strength),
      },

      count: 6,
    });

    const frameLoop = reglInstance.frame(() => {
      state.time += 0.02;
      state.drops = state.drops.filter(d => state.time - d.time < 2);
      drawWater();
    });

    return () => {
      frameLoop.cancel();
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
      reglInstance.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      style={{
        border: "2px solid #00aaff",
        borderRadius: "8px",
        boxShadow: "0px 4px 15px rgba(0, 150, 255, 0.5)",
        display: "block",
        cursor: "pointer",
      }}
    />
  );
};

export default WaterRippleTwo;
