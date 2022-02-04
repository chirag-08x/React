import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Person = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // When our Link takes us to somewhere, we have access that url text that we passed into the index.js
  let params = useParams();

  const fetchSpecificUser = async () => {
    const response = await fetch(
      `https://reqres.in/api/users/?id=${params.id}`
    );
    const user = await response.json();
    setUser(user.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSpecificUser();
  }, []);

  if (isLoading) {
    return <h1>Loading....</h1>;
  } else {
    return (
      <div>
        <h1>{`${user.first_name} ${user.last_name}`}</h1>
        <img src={user.avatar} alt="" />
      </div>
    );
  }
};

export default Person;
