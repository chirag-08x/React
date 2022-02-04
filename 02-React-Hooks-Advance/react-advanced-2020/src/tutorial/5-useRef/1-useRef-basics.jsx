import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements
// Allows us to access dom of the element in which it is being defined

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const nameContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  const changeName = (e) => {
    console.log("Hello");
    e.preventDefault();
    nameContainer.current.textContent = "React Is the Best";
  };

  useEffect(() => {
    // We don't need dependency list here since useRed does not re render the component.
    refContainer.current.focus();
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" ref={refContainer} />
        <button type="submit">submit</button>
      </form>

      <div>
        <h1 ref={nameContainer}>Hello World</h1>
        <button className="btn" onClick={changeName} type="submit">
          Change Name
        </button>
      </div>
    </>
  );
};

export default UseRefBasics;
