import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await (await fetch(url)).json();
    setUsers(response);
    console.log(response);
  };

  // We cannot make useEffect callback function async/await.
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>github users</h2>

      <ul className="users">
        {users.map((user) => {
          const { avatar_url, login, id, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt="" />
              <div>
                <h4>{login}</h4>
                <a href={html_url} target="_blank">
                  profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
