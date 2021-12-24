import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });
  console.log(person);
  const changeMessage = () => {
    // setPerson("hello world" );
    // setPerson({message: "hello world" });

    // We must need to use spread operator with objects, else they won't work.
    setPerson({ ...person, message: "hello world" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
