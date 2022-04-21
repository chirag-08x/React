import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const URL = `https://course-api.com/axios-tutorial-post`;

// - send data to the server
// - axios.post(url, { data })
// - more options (auth header) - axios.post(url, { data },{})

const POST = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(URL, { name, email });
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
    setName("");
    setEmail("");
  };

  return (
    <Wrapper>
      <h1>Axios Post Request</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="btn">submit</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form {
    label {
      display: block;
      text-align: start;
      margin-bottom: 0.25rem;
    }
    input {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
`;

export default POST;
