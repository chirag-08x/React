// First Component

// We can even omit this line, react update property.
// We don't need .extension if it's a js file.
import React from "react";
// import ReactDom which can them update the real dom of the browser everytime the state changes.
import ReactDom from "react-dom";

// JSX Rules -
// Return single element, can't add two adjacent element i.e. we will have one parent element/div and inside that we can write whatever we want, but we can't have two parent elements.
// can return any html element.
// use camelcase for HTML attribute. i.e. [className, onClick]
// class is called className in JSX.
// closing tag is a must for every element.
// formatting.
// Best Practice is to use semantics instead of divs.

// We can create either a normal function or an arrow function, but for React to know that this function is a component we must capitalize the first letter of the function.

function Greeting() {
  // Always have to return JSX from component function, can't leave the function empty. If we have multiple lines of code we return inside paranthesis,i.e. return (code goes here)
  return (
    // We can also wrap all our code inside the react fragment tags, i.e. <React.Fragment></React.Fragment> or simple <></> empty tags which is another way of writing React fragment tags.
    <section className="container">
      <article>
        <h1>Hello World, this is my first component, in the react.</h1>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
        <ul>
          <li>First</li>
          <li>Second</li>
        </ul>
        {/* We need to close the img tag even though it is a self closing tag */}
        <img
          src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          alt=""
        />
        <input type="text" name="" id="" />
      </article>
    </section>
    // can't have another section here, but can have as many section as we want inside the above section, i.e. we need to wrap everything inside a single element.
    // <div></div>
  );
}

// Appending the greeting element inside the root tag in ./public/index.html
// We must close the Greeting component with "/"
ReactDom.render(<Greeting />, document.getElementById("root"));

// Works same as the above function, won't be using this syntax, the above code is basically getting converted in the below syntax using Babel when we compile it, but since we are using babel in node_modules, it converts it automatially, Browser can't read JSX, it has to convert JSX into vanilla JS.
/*
const Greeting = () => {
  return React.createElement("h1", {}, "Hello World")
}
*/
