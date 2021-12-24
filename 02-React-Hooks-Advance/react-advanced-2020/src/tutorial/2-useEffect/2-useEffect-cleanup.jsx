import React, { useState, useEffect } from "react";

// cleanup function

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  // console.log("Hello World");

  const checkSize = () => setSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log("Hello World");
    // Cleanup Fucntion = to avoid stack calls or memory leaks
    // return () => {
    //   window.removeEventListener("resize", checkSize);
    // };
  }, []);

  return (
    <>
      <h1>Size</h1>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;
