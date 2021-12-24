import React, { useState } from "react";

// useState is a function by default. It returns an array of length 2, in which first element is the default value that we want to function, and second item is a function which controls the value of item at index(0). The value at index 0 is undefined by default. We can only use hooks inside the function component. We cannot use hooks inside condition statements i.e. if, else if, else.

// EveryTime the handler function is called the whole UseStateBasics Component is rendered again i.e. it is run again.

const UseStateBasics = () => {
  const [text, setText] = useState("random title");
  const handler = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handler}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;

// React Hooks Rules
// always use "use" as a prefix
// component name must be capitalized.
// Hook needs to be in the component body.
// cannot call hook conditionally.
