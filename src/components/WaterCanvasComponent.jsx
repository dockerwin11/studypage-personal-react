import React, { useEffect } from 'react';

const WaterCanvasComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = '/js/watercanvas.js';
    script.async = true;

    script.onload = () => {
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      var width = 735;
      var height = 300;

      var finger = [
        [0.5, 1.0, 0.5],
        [1.0, 1.0, 1.0],
        [0.5, 1.0, 1.5]
      ];

      var pixel = [
        [0.5, 1.0, 0.5],
        [1.0, 1.0, 1.0],
        [0.5, 1.0, 1.5]
      ];

      var waterModel = new WaterModel(width, height, {
        resolution: 2.0,
        interpolate: false,
        damping: 0.985,
        clipping: 5,
        evolveThreshold: 0.05,
        maxFps: 30,
        showStats: true
      });

      var waterCanvas = new WaterCanvas(width, height, "waterHolder", waterModel, {
        backgroundImageUrl: "/images/aboutUs.jpg",
        lightRefraction: 9.0,
        lightReflection: 0.1,
        maxFps: 50,
        showStats: false
      });

      waterModel.touchWater(100, 100, 1.5, finger);

      enableMouseInteraction(waterModel, 'waterHolder');
    `;
    document.body.appendChild(inlineScript);
  };
  document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="water">
      <div id="waterHolder"></div>
    </div>
  );
};

export default WaterCanvasComponent;
