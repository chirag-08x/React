import React from "react";
import ReactDom from "react-dom";
import "./style.css";

const books = [
  {
    // This key prooperty is important make sure to pass it, else react will complain about it, though app will still run. It's just a unique identifier for every book.
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
    img: `https://images-na.ssl-images-amazon.com/images/I/51f-G2GQwBL._AC_SX184_.jpg`,
    author: "Will Smith",
    title: "Will",
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
        // Setup - 1
        // const { author, title, img } = book;
        // return <Book img={img} author={author} title={title}></Book>;
        //
        // Setup - 2
        // In the below setup we are sending props as props = {book:{book}}
        // return <Book key={book.key} book={book}></Book>;
        //
        // Setup - 3 (Using Spread operator)
        return <Book key={book.key} {...book}></Book>;
        //
      })}
    </section>
  );
}

const Book = ({ img, author, title }) => {
  // console.log(props);
  // const { author, title, img } = props.book;
  // const { author, title, img } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
