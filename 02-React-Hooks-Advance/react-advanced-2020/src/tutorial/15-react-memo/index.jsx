// React memo is an optimization technique in React.js, which allows us to render a Child component only when any of the props passed to that child component changes, by default that Child component would render every time there has been a change in the Parent component.

import React, { useState } from "react";
import { memo } from "react";

const ReactMemo = () => {
  const [counter, setCounter] = useState(0);
  const [flag, setFlag] = useState(true);

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Increase count
      </button>
      <br />
      <ChildComponent flag={flag} />
      <button onClick={() => setFlag((prev) => !prev)}>Toggle Flag</button>
    </div>
  );
};

export default ReactMemo;

// Child component will be rendered initially, after that it will only be rendered when flag value changes
// React.memo does not work with primitive types like Object, Arrays, Function, since they are primitive type they are being re-created at every render, and the reference changes.
const ChildComponent = memo(({ flag }) => {
  console.log("child component rendered");

  return <h1>Child Component: {flag}</h1>;
});
