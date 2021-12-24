import React, { useState } from "react";

const UseStateCounterFunction = () => {
  const [counter, setCounter] = useState(0);

  // The function argument will preserve the previous value/state of the counter and change the current value respect to that value.

  const decreaseNumber = () => setCounter((prevValue) => prevValue - 1);
  const increaseNumner = () => setCounter((prevValue) => prevValue + 1);

  return (
    <>
      <h1>Complex Counter</h1>
      <h1>{counter}</h1>
      <button className="btn" onClick={decreaseNumber}>
        decrease
      </button>
      <button className="btn" onClick={() => setCounter(0)}>
        reset
      </button>
      <button className="btn" onClick={increaseNumner}>
        increase
      </button>
    </>
  );
};

export default UseStateCounterFunction;
