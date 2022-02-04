import React, { useState, useReducer } from "react";
import Modal from "./Modal.jsx";
import { data } from "../../data";

// useReducer is usually preferable to useState when you have complex state logic that involves multiple  sub-values or when the next state depends on the previous. We must return a state from reducer function else it will return back an error.

// reducer function takes in the old state, do some action and returns the new State. reducer action parameter holds the value that was passed into the dispatch. We should always return some kind of state from reducer function.

// const [state, dispatch] = useReducer(reducer, initialState)

// reducer is a function which will be called everytime we we call the dispatch function.

// Whenever we want to change the state value, we call dispatch function, which then calls reducer function do do some action and change state.

// When we call dispatch function we always have to pass an object in it with a property of type.

// Move reducer function to a seprate new file for less complexity and cleaner code.
const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalContent: "item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      showModal: true,
      modalContent: "please enter value",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, showModal: false };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalContent: "item removed",
    };
  }

  throw new Error("no matching action type");
};

const defaultState = {
  people: [],
  showModal: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  // We can also set up reducer and defaultState in the useReducer hook only.
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItems = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItems });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.showModal && (
        <Modal closeModal={closeModal} modalText={state.modalContent} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
