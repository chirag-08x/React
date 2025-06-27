// useCallback is used to memoize a function, similar to what we had in useMemo which was memoizing a value, here we can memoize a function using useCallback such that, that particular function is not created on every re-render

import React from "react";
import { useCallback } from "react";
import { useState } from "react";

const ReactUseCallback = () => {
  const [counter, setCounter] = useState(0);
  const [childCounter, setChildCounter] = useState(0);

  const handleClick = useCallback(() => {
    console.log("inside handle click");
    setChildCounter((prev) => prev + 1);
  }, [childCounter]);

  return (
    <div>
      <h1>Parent Count: {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Increase Parent count
      </button>
      <br />
      <br />
      <br />
      <h1>Child Count: {childCounter}</h1>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ReactUseCallback;

const ChildComponent = React.memo(({ onClick }) => {
  console.log("child component rendered");

  return (
    <>
      <button onClick={onClick}>Increase Child Count</button>
    </>
  );
});
