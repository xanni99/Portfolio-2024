import { useEffect } from 'react';

// Original code by [Kumar Lakshmanan] (https://codepen.io/klakshmanan/pen/ExNMLLv)

const StarBackground = () => {
  useEffect(() => {
    const cnv = document.getElementById("cnv");
    const ctx = cnv.getContext("2d");

    // Function to set canvas dimensions
    const setCanvasSize = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;

      cnv.width = W;
      cnv.height = H;

      // Optional: Fill the canvas background after resizing
      ctx.fillStyle = "#112";
      ctx.fillRect(0, 0, W, H);
    };

    // Initial canvas size setup
    setCanvasSize();

    // Glow effect
    ctx.shadowBlur = 10;
    ctx.shadowColor = "white";

    function animate() {
      // Random position and size of stars
      let x = cnv.width * Math.random(); // Use current width
      let y = cnv.height * Math.random(); // Use current height
      let r = 2.5 * Math.random();

      // Draw the stars
      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();

      setTimeout(animate, 220);
    }

    animate();

    // Add resize event listener
    window.addEventListener("resize", setCanvasSize);

    // Clean up on component unmount
    return () => {
      ctx.clearRect(0, 0, cnv.width, cnv.height); // Clear the canvas
      window.removeEventListener("resize", setCanvasSize); // Remove the event listener
    };
  }, []);

  return <canvas id="cnv" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default StarBackground;
