 
import  { useEffect, useRef } from "react";


const WaterRipple = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const halfWidth = width >> 1;
    const halfHeight = height >> 1;
    const size = width * (height + 2) * 2;
    const rippleRad = 3;
    const rippleMap = new Array(size).fill(0);
    const lastMap = new Array(size).fill(0);
    let oldIdx = width;
    let newIdx = width * (height + 3);
    let texture, ripple;

    // Create background texture
    ctx.fillStyle = "#008888";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#00ff77";
    ctx.save();
    ctx.rotate(-0.25);
    for (let i = 0; i < height / 25; i++) {
      ctx.fillRect(-width, i * 50, width * 3, 25);
    }
    ctx.restore();

    texture = ctx.getImageData(0, 0, width, height);
    ripple = ctx.getImageData(0, 0, width, height);

    const dropAt = (dx, dy) => {
      dx = Math.floor(dx);
      dy = Math.floor(dy);
      for (let j = dy - rippleRad; j < dy + rippleRad; j++) {
        for (let k = dx - rippleRad; k < dx + rippleRad; k++) {
          rippleMap[oldIdx + j * width + k] += 512;
        }
      }
    };

    const newframe = () => {
      let i = 0;
      let tempIdx = oldIdx;
      oldIdx = newIdx;
      newIdx = tempIdx;
      let mapIdx = oldIdx;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          let data = (rippleMap[mapIdx - width] + rippleMap[mapIdx + width] + rippleMap[mapIdx - 1] + rippleMap[mapIdx + 1]) >> 1;
          data -= rippleMap[newIdx + i];
          data -= data >> 5;
          rippleMap[newIdx + i] = data;
          data = 1024 - data;
          const oldData = lastMap[i];
          lastMap[i] = data;

          if (oldData !== data) {
            let a = (((x - halfWidth) * data) / 1024) << 0 + halfWidth;
            let b = (((y - halfHeight) * data) / 1024) << 0 + halfHeight;
            a = Math.max(0, Math.min(width - 1, a));
            b = Math.max(0, Math.min(height - 1, b));
            let newPixel = (a + b * width) * 4;
            let curPixel = i * 4;
            ripple.data[curPixel] = texture.data[newPixel];
            ripple.data[curPixel + 1] = texture.data[newPixel + 1];
            ripple.data[curPixel + 2] = texture.data[newPixel + 2];
          }
          mapIdx++;
          i++;
        }
      }
      ctx.putImageData(ripple, 0, 0);
    };

    const randomDrop = () => {
      if (Math.random() > 0.3) {
        dropAt(Math.random() * width, Math.random() * height);
      }
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      dropAt(event.clientX - rect.left, event.clientY - rect.top);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    const interval = setInterval(newframe, 30);
    const randomInterval = setInterval(randomDrop, 1250);

    return () => {
      clearInterval(interval);
      clearInterval(randomInterval);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  

  return  <canvas ref={canvasRef} width={400} height={400} style={{ border: "1px solid #a1a1d0", borderRadius: "8px", boxShadow: "#c6c6d0 4px 4px 10px" }} />;
};

export default WaterRipple;
