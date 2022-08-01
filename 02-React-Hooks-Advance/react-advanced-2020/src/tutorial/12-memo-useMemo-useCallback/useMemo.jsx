// useMemo looks for the change in value, and triggers only if the value changes. It does not returns a function instead it returns a value

// useMemo = memo stands for memoization, we cache a value so that we don't have to recompute it on every render. We only compute it when one of the dependencies passed is changed.

// Another use of useMemo is Referential Equality, i.e. when we compare objects and arrays in Js, we not only compare there values but their reference too.

// We cannot pass a value in useMemo fumction since it returns a value not a function.

import React, { useState, useMemo } from "react";

const Memo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const increaseCounterOne = () => {
    setCounterOne(counterOne + 1);
  };

  const increaseCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    console.log("Inside isEven function");
    let c = 0;
    while (c <= 1800000000) {
      c++;
    }
    return counterOne % 2 === 0;
  }, [counterOne]);

  // const isEven = () => {
  //   console.log("Inside isEven function");
  //   let c = 0;
  //   while (c <= 2000000000) {
  //     c++;
  //   }
  //   return counterOne % 2 === 0;
  // }

  return (
    <div>
      <button onClick={increaseCounterOne}>CounterOne - {counterOne}</button>
      <p>{isEven ? "Even" : "odd"}</p>

      {/* The is Even function will get called, even when we click on second button, if we don't use useMemo */}
      <button onClick={increaseCounterTwo}>counterTwo - {counterTwo}</button>
      <p>{counterTwo}</p>
    </div>
  );
};

export default Memo;
