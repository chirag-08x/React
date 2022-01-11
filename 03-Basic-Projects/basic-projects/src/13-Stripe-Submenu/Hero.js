import React from "react";
import phoneImg from "./images/phone.svg";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <main className="main">
      <Navbar />

      <div className="sub-main">
        <div className="info">
          <h1 className="title">Payments infrastructure for the internet</h1>
          <p className="subtitle">
            Millions of companies of all sizes--from startups to fortune
            500s--use stripe's software and APIs to accept payments, send
            payouts, and manage their businesses online.
          </p>
          <button className="btn main-btn" type="btn">
            Start now
          </button>
        </div>
        <div className="phone-img-container">
          <img src={phoneImg} alt="phoneimg" className="phone-img" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
