import React from "react";
import ReactDom from "react-dom";
import "./props.css";

// Props are basically arguments for our function.

const firstBook = {
  author: "Julia Donaldson",
  title: "Room on the Broom",
  img: "https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg",
};

const secondBook = {
  author: "Dr. APJ Abdul Kalam",
  title: "burn anger before anger burns you",
  img: "https://images-eu.ssl-images-amazon.com/images/I/41FZ3ScGJRL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
};

function BookList() {
  return (
    <section className="container">
      {/* We can also hardcode the author,title,img values down in the book tag. */}
      {/* Below props are passed as an Object in the callback function mas */}
      {/*img:firstBook.img,
      title:firstBook.title
      author:firstBook.author */}
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        {/* Props children goes here */}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
          distinctio facilis molestiae. Non, atque eaque.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

// props is an JS object, we can even destructure it in the function declaration only.
// Props Children = Props also have access to children property and we can't change it's name, it is called using children only. If we want to add a property to only one of our book container we use this children property.
// We can also destrucute the values in the function declaration only.
const Book = (props) => {
  console.log(props);
  const { author, title, img, number, children } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* If the property doesn't exist, paragraph will not get added */}
      <p>{number}</p>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
