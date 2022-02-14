import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
import "./index.css";

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
  const mounted = useRef(false);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    const pageURL = `&page=${page}`;
    const urlQuery = `&query=${query}`;

    url = query
      ? `${searchUrl}${clientID}${pageURL}${urlQuery}`
      : `${mainUrl}${clientID}${pageURL}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    if (!mounted.current) {
      return;
    }
    console.log("Hello");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    if (page === 1) {
      fetchImages();
      return;
    }
    setPage(1);
  };

  return (
    <main className="photos">
      <form className="form">
        <input
          type="text"
          placeholder="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn" onClick={handleSubmit}>
          <FaSearch />
        </button>
      </form>

      <section className="photos-center">
        {photos.map((photo) => {
          return <Photo key={photo.id} {...photo} />;
        })}
      </section>
      {loading && <h2 className="loading">Loading....</h2>}
    </main>
  );
}

export default App;
