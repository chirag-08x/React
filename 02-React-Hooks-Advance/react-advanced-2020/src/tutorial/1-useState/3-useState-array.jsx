import React from "react";
import { data } from "../../data";

// Alternative Syntax - not preferable.
// const [text, setText] = React.useState(default_value)
// React Fragment alternative Syntax = <></>

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    const letNewPeople = people.filter((person) => person.id !== id);
    setPeople(letNewPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
