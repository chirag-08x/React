import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => setSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);

  return (
    <>
      <h1>Size</h1>
      <h2>{size} px</h2>
    </>
  );
};

ReactDOM.render(<UseEffectCleanup />, document.getElementById("root"));
