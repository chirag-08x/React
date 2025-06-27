// useMemo hook allows us to memoize a value. For example let's say we have a function and in that we are doing some heavy operation but we don't need that to happen on every render, we only want it to re-compute if any of the dependencies change. In that case we use useMemo, even though the value is memoized, the function itself will still be re-created on every render, but just re-created in the memory, it won't actually run. useMemo does not memoizes the function itself, for that we use useCallback.

import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const ReactUseMemo = () => {
  const [counter, setCounter] = useState(0);
  const [recomputeValue, setRecomputeValue] = useState(1);

  const someHeavyOperation = useMemo(() => {
    console.log("running the function");

    for (let i = 0; i < 100000; i++) {
      // Do some operation
    }
    return `Number of times this function ran ${recomputeValue}`;
  }, [recomputeValue]);
  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Increase count
      </button>
      <p>Function value: {someHeavyOperation}</p>
      <button onClick={() => setRecomputeValue((prev) => prev + 1)}>
        Re compute Value
      </button>
      <br />
    </div>
  );
};

export default ReactUseMemo;
