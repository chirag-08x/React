import React, { useState } from "react";
import data from "./data.js";
import "./index.css";

function BirthdayReminder() {
  const [reminder, setReminder] = useState(data);
  return (
    <>
      <p className="count-birthday">{reminder.length} birthdays today</p>
      {reminder.map((item) => {
        const { id, name, age, image } = item;
        return (
          <article id={id} className="person">
            <img src={image} alt="" className="person-img" />
            <div className="info">
              <h4 className="name">{name}</h4>
              <p className="age">{age} years</p>
            </div>
          </article>
        );
      })}
      <button className="hero-btn" onClick={() => setReminder([])}>
        clear all
      </button>
    </>
  );
}

export default BirthdayReminder;
