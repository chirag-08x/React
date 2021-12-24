import React from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value

// React
// value, onChange

// In react forms we have two ways to handle form when submitted, we can set onSubmit in form tag or we can set up onClick on the submit button, both works the same way.

const FormBasics = () => {
  const handleFormSubmit = (e) => {
    // to prevent the page to refresh on submitting the form
    e.preventDefault();
    console.log("Hello world");
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Name : </label>
            <input type="text" id="email" name="email" />
          </div>
          <button className="btn" type="submit" /*onClick={handleFormSubmit}*/>
            add user
          </button>
        </form>
      </article>
    </>
  );
};

export default FormBasics;
