import React, { useState } from "react";
import "./index.css";

function BirthdayReminder() {
  return (
    <section className="birthday-container">
      <article className="hero-container">
        <p className="count-birthday">5 birthdays today</p>
        <article className="person">
          <img
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
            alt=""
            className="person-img"
          />
          <div className="info">
            <h4 className="name">bertie yates</h4>
            <p className="age">29 years</p>
          </div>
        </article>

        <article className="person">
          <img
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"
            alt=""
            className="person-img"
          />
          <div className="info">
            <h4 className="name">hester hogan</h4>
            <p className="age">32 years</p>
          </div>
        </article>

        <article className="person">
          <img
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
            alt=""
            className="person-img"
          />
          <div className="info">
            <h4 className="name">larry little</h4>
            <p className="age">36 years</p>
          </div>
        </article>

        <article className="person">
          <img
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
            alt=""
            className="person-img"
          />
          <div className="info">
            <h4 className="name">sean walsh</h4>
            <p className="age">34 years</p>
          </div>
        </article>

        <article className="person">
          <img
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
            alt=""
            className="person-img"
          />
          <div className="info">
            <h4 className="name">lola gardner</h4>
            <p className="age">29 years</p>
          </div>
        </article>
        <button className="hero-btn">clear all</button>
      </article>
    </section>
  );
}

export default BirthdayReminder;
