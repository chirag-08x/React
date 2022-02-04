import React, { useState } from "react";

// Connecting form with state.

// value = reference the state value
// onChange = fires as soon as changes are being made.

// uuid = npm package to generate unique id's.

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      // use UUID instead (npm package)
      const id = new Date().getTime().toString();
      // Key and value name are same (ES6 feature)
      const person = { id, firstName, email };
      setUser((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
      console.log(person);
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Name : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn" type="submit" /*onClick={handleFormSubmit}*/>
            add user
          </button>
        </form>

        {user.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
