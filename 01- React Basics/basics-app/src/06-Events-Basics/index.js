import React from "react";
import ReactDom from "react-dom";
import "./style.css";

const books = [
  {
    key: 1,
    author: "Julia Donaldson",
    title: "Room on the Broom",
    img: "https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg",
  },
  {
    key: 2,
    author: "Dr. APJ Abdul Kalam",
    title: "burn anger before anger burns you",
    img: "https://images-eu.ssl-images-amazon.com/images/I/41FZ3ScGJRL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    key: 3,
    author: "Will Smith",
    title: "Will",
    img: `https://images-na.ssl-images-amazon.com/images/I/51f-G2GQwBL._AC_SX184_.jpg`,
  },
  {
    key: 4,
    img: `https://images-na.ssl-images-amazon.com/images/I/41Mv0v5FnQL._AC_SX184_.jpg`,
    author: "Nikole Hannah Jones",
    title: "The 1619 Project",
  },
];

function BookList() {
  return (
    <section className="container">
      {books.map((book) => {
        return <Book key={book.key} {...book}></Book>;
      })}
    </section>
  );
}

// onClick, onMouseOver, onChange
// Syntax ==> eventName={ (arguments) => do something }
const Book = ({ img, author, title }) => {
  const clickHandler = () => {
    alert("hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book" onMouseOver={() => console.log(author)}>
      <img src={img} alt="" />
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>

      {/* If we invoke the complexExample function like this, we are right away executing that function, i.e. it will print author without event clicking on it */}

      {/* <button type="button" onClick={complexExample(author)}> Complex Example </button> */}

      {/* 
      If we have to pass some arguments in the function of onClick, we set it as an arrow function, or if we are just calling it not executing it we can pass it directly. Example - 
       onClick={() => complexExample(author)} if we have to pass author name else
       onClick={complexExample}
      */}

      {/* Fix for the above problem */}
      <button type="button" onClick={() => complexExample(author)}>
        Complex Example
      </button>

      {/* Another Approach */}
      {/* <button type="button" onClick={() => console.log(author)}>
        Complex Example
      </button> */}
    </article>
  );
};

// ReactDom.render(<BookList />, document.getElementById("root"));

export default BookList;
