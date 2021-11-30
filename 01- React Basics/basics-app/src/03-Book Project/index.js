// Book Project
import React from "react";
import ReactDom from "react-dom";
// import CSS
import "./index.css";

function BookList() {
  return (
    <section className="container">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
// We don't have access to number in JSX, have to go back to JS using {}

const author = "Julia Donaldson";
const Book = () => {
  const title = "Room on the Broom";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg"
        alt=""
      />
      {/* curly braces means that we can access JS inside those braces, i.e. accessing JS in JSX */}
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* Not Allowed, can't have a statement(declaration) inside curly braces, expression is allowed */}
      {/* <p>{let x = 10}</p> */}
      <p>{6 + 6}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

// const Book = () => {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const Image = () => (
//   <img
//     src="https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg"
//     alt=""
//   />
// );
// const Title = () => <h1>Room on the Broom</h1>;
// const Author = () => (
//   // JSX CSS or inline JSX CSS, takes preference over external CSS. Properties and values are passed as JS object properties and values. Property name follows camelCasing.
//   <h4 style={{ color: "#f00102", fontSize: "0.95rem", marginTop: "0.5rem" }}>
//     Julia Donaldson
//   </h4>
// );
