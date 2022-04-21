import axios from "axios";
import { useEffect } from "react";
import React from "react";

// Returns a promise.
// response data located in data property
// Error is present in error.response.
// Axios can catch all types of errors not just connection error like fetch.
// For GET requests we can either pass axios.get or just axios

const URL = "https://course-api.com/react-store-products";

const GETRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios(URL);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  });

  return <h1>Axios GET Request</h1>;
};

export default GETRequest;
