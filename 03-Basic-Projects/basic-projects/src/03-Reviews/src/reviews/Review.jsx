import React, { useState } from "react";
import people from "./data";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = () => {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextPerson = () => {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const randomPerson = () => {
    const newIdx = Math.floor(Math.random() * people.length);
    setIndex(newIdx);
  };

  return (
    <article className="review">
      <div className="image-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote">
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="role">{job}</p>
      <p className="bio">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={randomPerson}>
          surprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
