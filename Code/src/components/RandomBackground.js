import React, { useEffect } from 'react';

const RandomBackground = () => {
  useEffect(() => {
    function getRandomColor() {
      var colors = [
        "#000000", // black
        "#222", // ash-black
        "#f0d8bb",// creamy
        "#fafafa", // white
        /*"#00ccff", // sky
        "#22dddd", // green
        "#1300ff", // blue
        "#6600ff", // dusk
        "#9900ff", // purple
        "#ff0066", // pink
        "#fe0222", // red
        "#fd7702", // orange
        "#ffbb00" // yellow*/
      ];

      var randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }
/*
    document.body.style.setProperty("--background", getRandomColor());
  }, []);
*/
const background = getRandomColor();
    document.body.style.setProperty("--background", background);
    const fontColor = background === "#000000" || background === "#222" ? "white" : "black";
    document.body.style.setProperty("--font-color", fontColor);
  }, []);

  return null; // This component doesn't render anything
};

export default RandomBackground;
