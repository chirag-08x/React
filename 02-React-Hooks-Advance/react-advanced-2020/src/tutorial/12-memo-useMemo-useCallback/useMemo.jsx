// useMemo looks for the change in value, and triggers only if the value changes. It does not returns a function instead it returns a value

// useMemo = memo stands for memoization, we cache a value so that we don't have to recompute it on every render.

// Another use of useMemo is Referential Equality, i.e. when we compare objects and arrays in Js, we not only compare there values but their reference too.

// We cannot pass a value in useMemo fumction since it returns a value not a function.

import React, { useState, useMemo, useEffect } from "react";

const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

const slowFunction = (num) => {
  console.log("Inside slow function");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

export default UseMemoHook;
