// Nested Components
import React from "react";
import ReactDom from "react-dom";

// Nested Components
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Chirag Agrawal</h2>;
const Message = () => <p>This is my message</p>;

// ReactDom.render(<Greeting />, document.getElementById("root"));

export default Greeting;
