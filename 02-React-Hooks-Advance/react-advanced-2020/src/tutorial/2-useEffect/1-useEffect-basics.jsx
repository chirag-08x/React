import React, { useState, useEffect } from "react";

// useEffect allows us to do the sideEffects, i.e. any work outside of the component, it could be changing document title, API calls, event listeners etc.
// By default useEffect runs after every re-render.
// In useEffect we can control that on render what components we want to call the render method on.
// We have the second argument in which we can pass that only if a particular component is changing then only re-render the useEffect.

// Side Effect = Any work outside the component.

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // We can place conditionals inside the hooks, but we can't place hooks inside conditionals.
    console.log("call effect");
    if (value > 0) {
      document.title = `(${value}) New Message`;
    }
    // Empty array as a second argument means that it will only render the element one time at the inital level.
    // If we don't pass anything as second argument it will re-render the useEffect everytime something changes on page.

    // It means that every time the value of value changes it will re-render the useEffect.
  }, [value]);
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        clicke me
      </button>
    </>
  );
};

export default UseEffectBasics;

{
  /*
  
  1. useEffect(() => {
      //Runs on every render
    });
  
  2. useEffect(() => {
      //Runs only on the first render
    }, []);
    
  3. useEffect(() => {
      //Runs on the first render
      //And any time any dependency value changes
    }, [prop, state]);

  */
}
