import React, { useState } from "react";
// ternary operator = condition ? true : false

const TernaryOperator = () => {
  const [text, setText] = useState("peter");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || "default value"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError ? <h1>Error...</h1> : <h1>there is no error...</h1>}
    </>
  );
};

export default TernaryOperator;
