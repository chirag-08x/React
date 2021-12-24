import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);
  const changeNumber = (type) => {
    if (type === "decrease") {
      setCounter(counter - 1);
    } else if (type === "increase") {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };

  return (
    <>
      <h1>Simple Counter</h1>
      <h1>{counter}</h1>
      <button className="btn" onClick={() => changeNumber("decrease")}>
        decrease
      </button>
      <button className="btn" onClick={changeNumber}>
        reset
      </button>
      <button className="btn" onClick={() => changeNumber("increase")}>
        increase
      </button>
    </>
  );
};

export default UseStateCounter;
