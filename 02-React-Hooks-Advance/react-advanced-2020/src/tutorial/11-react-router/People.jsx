import React, { useState, useEffect } from "react";
import { data } from "../../data";
import { Link } from "react-router-dom";

// https://reqres.in/api/users
const People = () => {
  const [people, setPeople] = useState(data);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async () => {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    setPeople(data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <h1>People Page</h1>
      {people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>
              <Link to={`/person/${person.id}`}>
                {`${person.first_name} ${person.last_name}`}
              </Link>
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default People;
