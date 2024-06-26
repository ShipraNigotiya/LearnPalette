import React, { useEffect } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

// import "react-color-palette/lib/css/styles.css";
const ColourPicker = ({ setColorWidth }) => {
  const [color, setColor] = useColor("hex", "#000");
  useEffect(() => {
    setColorWidth(color);
    console.log(color);
  }, [color]);

  return window.innerWidth < 550 ? (
    <ColorPicker
      width={window.innerWidth * 0.073 * 2.5}
      height={window.innerHeight * 0.1}
      color={color.hex}
      onChange={setColor}
      hideHSB
      hideHEX
      dark
    />
  ) : (
    <ColorPicker
      width={window.innerWidth * 0.073 * 2}
      height={window.innerWidth * 0.073 * 2}
      color={color}
      onChange={setColor}
      hideHSB
      dark
    />
  );
};
export default ColourPicker;
