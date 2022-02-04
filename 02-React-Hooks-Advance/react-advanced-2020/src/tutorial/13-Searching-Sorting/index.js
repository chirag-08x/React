import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import data from "./MOCK_DATA.json";
import "./index.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("ASC");
  const [user, setUser] = useState(data);

  const sortColumn = (column) => {
    if (order === "ASC") {
      const sortedData = [...data].sort((a, b) => {
        return a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1;
      });
      setOrder("DESC");
      setUser(sortedData);
    }
    if (order === "DESC") {
      const sortedData = [...data].sort((a, b) => {
        return a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1;
      });
      setOrder("ASC");
      setUser(sortedData);
    }
  };

  return (
    <main>
      <form className="form">
        <input
          type="text"
          value={search}
          placeholder="search...."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <section className="data">
        <table border="1px">
          <thead>
            <th onClick={() => sortColumn("first_name")}>first name</th>
            <th onClick={() => sortColumn("last_name")}>last name</th>
          </thead>
          <tbody>
            {user
              .filter((item) => {
                return (
                  item.first_name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.last_name.toLowerCase().includes(search.toLowerCase())
                );
              })
              .map((item) => {
                const { id, first_name, last_name } = item;
                return (
                  <tr key={id}>
                    <td>{first_name}</td>
                    <td>{last_name}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    </main>
  );
};

ReactDOM.render(<Search />, document.getElementById("root"));
