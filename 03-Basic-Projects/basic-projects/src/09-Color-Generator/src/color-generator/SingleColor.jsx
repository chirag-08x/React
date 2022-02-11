import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const [r, g, b] = rgb;
  const colorInHex = rgbToHex(r, g, b);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <article
      className="color"
      style={{ backgroundColor: `${colorInHex}` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(colorInHex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{colorInHex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
