import React from "react";
import ReactDom from "react-dom";
import "./style.css";
// Named Export
import { books } from "./books";
// Default Export
import Book from "./Book";

function BookList() {
  return (
    <section className="container">
      {books.map((book) => {
        return <Book key={book.key} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
