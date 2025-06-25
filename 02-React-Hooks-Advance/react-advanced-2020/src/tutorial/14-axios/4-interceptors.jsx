import React, { useEffect } from "react";
import { axiosInstance } from "./axios-interceptor";

// Axios interceptors are a powerful feature that allow you to intercept and modify HTTP requests or responses before they are handled by .then() or .catch()

const Interceptors = () => {
  const getData = async () => {
    try {
      axiosInstance.get("/posts");
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return <div>Interceptors</div>;
};

export default Interceptors;
