import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
import "./index.css";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);
  // console.log(data);

  useEffect(() => {
    if (loading) return;
    setUsers(data[page]);
  }, [loading, page, data]);

  const handlePage = (index) => {
    setPage(index);
  };

  const displayNext = () => {
    if (page === data.length - 1) {
      setPage(0);
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const displayPrev = () => {
    if (page === 0) {
      setPage(data.length - 1);
    } else {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <main className="pagination">
      <section className="section-title">
        <h1>{loading ? "Loading...." : "Pagination"}</h1>
        <div className="underline"></div>
      </section>

      <section className="followers">
        <div className="container">
          {users.map((user) => {
            return <Follower key={user.id} {...user} />;
          })}
        </div>

        {!loading && (
          <div className="btn-container">
            <button className="change-btn" onClick={displayPrev}>
              prev
            </button>
            {data.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="change-btn" onClick={displayNext}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
