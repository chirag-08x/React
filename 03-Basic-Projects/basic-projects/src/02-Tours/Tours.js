import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTours }) => {
  console.log(tours);
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>

      <div className="tour-card">
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} {...tour} removeTours={removeTours}></Tour>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
