import React, { useState } from "react";

// Handling all the inputs with single state value.

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [user, setUser] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);
    setPerson({ ...person, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setUser([...user, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
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
              // Make sure name attribute value is same as that was passed in useState key.
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              // Make sure name attribute value is same as that was passed in useState key.
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              id="age"
              // Make sure name attribute value is same as that was passed in useState key.
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button className="btn" type="submit" /*onClick={handleFormSubmit}*/>
            add user
          </button>
        </form>

        {user.map((person) => {
          const { id, firstName, age, email } = person;
          return (
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <h4>{age}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
