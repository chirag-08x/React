import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://icanhazdadjoke.com/";

// Sometimes we also need to pass headers to fetch and API.

// - second argument
// - axios.get(url,{})

// - third argument in requests with data
// - axios.post(url,{data},{})

// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState("random dad joke");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(URL, {
        headers: {
          Accept: `application/json`,
        },
      });
      console.log(data);
      setJoke(data.joke);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Axios Headers</h1>
      <p>{joke}</p>
      <button className="btn" onClick={fetchData}>
        fetch new joke
      </button>
    </>
  );
};

export default Headers;
