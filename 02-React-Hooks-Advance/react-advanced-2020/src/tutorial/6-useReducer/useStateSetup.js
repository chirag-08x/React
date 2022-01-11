import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../data";

// useReducer is usually preferable to useState when you have complex state logic that involves multiple  sub-values or when the next state depends on the previous. We must return a state from reducer function else it will return back an error.

// reducer function takes in the old state, do some action and returns the new State.

// const [state, dispath] = useReducer(reducer, initialState)
// reducer is a function which will be called everytime we we call the dispatch function.

const Index = () => {
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName("");
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && <Modal />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>

      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
