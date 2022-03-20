import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
import "./index.css";
import styled from "styled-components";

// We don't want to give access to everyone to our client ID, that's why we set up our client Id in .evn, which we then add to gitignore.
// We have to put the env file in the root component, location is important.
// In env files of react app we set up key value pairs, and the key name must start with REACT_APP_keyname.

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const fetchImages = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPhotos((oldPhotos) => [...oldPhotos, ...data]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const currURL = `${mainUrl}${clientID}&per_page=10&page=${page}`;
    fetchImages(currURL);
  }, [page]);

  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 5) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", event);
    return () => window.removeEventListener("scroll", event);
  }, []);

  const handleSubmit = () => {};

  return (
    <Wrapper>
      <section className="section-center">
        <section className="search">
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="search"
            />
            <button onClick={(e) => e.preventDefault()}>
              <FaSearch />
            </button>
          </form>
        </section>

        <section className="photos-container">
          <div className="photos">
            {photos.map((photo) => (
              <Photo key={photo.id} {...photo} />
            ))}
          </div>
          {loading && <h2 className="loading">Loading...</h2>}
        </section>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .section-center {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;

    .search {
      margin-top: 4rem;
      width: 100%;
      max-width: 35rem;
      .form {
        display: flex;
        input {
          width: 100%;
          border: none;
          border-bottom: 2px solid grey;
          font-size: 1.5rem;
          padding: 1rem;
          ::placeholder {
            text-transform: capitalize;
            letter-spacing: 1px;
          }
        }

        button {
          border: none;
          background: transparent;
          border-bottom: 2px solid grey;
          font-size: 1.5rem;
          padding: 1rem;
        }
      }
    }

    .photos-container {
      padding-top: 4rem;

      .loading {
        text-align: center;
      }
    }

    .photos {
      display: grid;
      gap: 2rem 2rem;
    }

    @media (min-width: 853px) {
      .photos {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (min-width: 1298px) {
      .photos {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`;

export default App;
