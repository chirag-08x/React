import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

// Inside JSX we can't use conditionals, to manage that we have short-circuit and ternary operator.

const ShortCircuit = () => {
  const [text, setText] = useState("peter");

  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      {/* <h2>first : {firstValue}</h2>
      <h2>second : {secondValue}</h2> */}

      {/* Can't use conditionals */}
      {/* {if(true){console.log("Hello world")}} */}

      <h1>{text || "default value"}</h1>
      {/* If text is true, only then we will return hello world */}
      {text && <h1>Hello World</h1>}
      {!text && <h1>Hello World</h1>}
    </>
  );
};

export default ShortCircuit;

// OR (||) === If first is True, first gets returned else second
// true || false = true
// false || true = true
// true1 || true2 = true1
// false1 || false2 = None

// AND (&&) = If first is True, second gets returned, else returns first
// true1 && true2 = true2
// false && true = false
