import React, { useState, useEffect } from "react";
import "./index.css";

import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const userData = data.results[0];

      const { email, phone } = userData;
      const { large } = userData.picture;
      const { age } = userData.dob;
      const { first, last } = userData.name;
      const { number, name } = userData.location.street;
      const { password } = userData.login;

      const newPerson = {
        name: `${first} ${last}`,
        email,
        age,
        street: `${number} ${name}`,
        password,
        img: large,
        phone,
      };

      setPerson(newPerson);
      setLoading(false);
      setTitle("name");
      setValue(newPerson.name);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleHover = (text) => {
    if (loading) {
      setTitle("name");
      setValue("random person");
    } else {
      setTitle(text);
      setValue(person[text]);
    }
  };

  return (
    <section className="random">
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <article className="random-person">
        <figure className="user-img">
          <img src={loading ? defaultImage : person.img} alt="" />
        </figure>
        <div className="user-info">
          <p className="text">my {title} is</p>
          <h4 className="current">{value}</h4>
        </div>
        <div className="icons">
          <button className="btn" onMouseOver={() => handleHover("name")}>
            <FaUser />
          </button>
          <button className="btn" onMouseOver={() => handleHover("email")}>
            <FaEnvelopeOpen />
          </button>
          <button className="btn" onMouseOver={() => handleHover("age")}>
            <FaCalendarTimes />
          </button>
          <button className="btn" onMouseOver={() => handleHover("street")}>
            <FaMap />
          </button>
          <button className="btn" onMouseOver={() => handleHover("phone")}>
            <FaPhone />
          </button>
          <button className="btn" onMouseOver={() => handleHover("password")}>
            <FaLock />
          </button>
        </div>
        <button className="random-btn" onClick={fetchData}>
          random user
        </button>
      </article>
    </section>
  );
}

export default App;
