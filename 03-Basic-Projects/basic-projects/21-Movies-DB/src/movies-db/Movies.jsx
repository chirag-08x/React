import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, loading } = useGlobalContext();
  return (
    <section className="movies-list">
      {!loading &&
        movies.map((movie) => {
          const { Title, Year, Poster, imdbID } = movie;
          return (
            <Link to={`/movie/${imdbID}`} key={imdbID}>
              <article className="movie">
                <img src={Poster === "N/A" ? url : Poster} alt={Title} />
                <div className="movie-footer">
                  <h5 className="name">{Title}</h5>
                  <p className="year">{Year}</p>
                </div>
              </article>
            </Link>
          );
        })}
      {loading && <h1 className="loading">Loading...</h1>}
    </section>
  );
};

export default Movies;
