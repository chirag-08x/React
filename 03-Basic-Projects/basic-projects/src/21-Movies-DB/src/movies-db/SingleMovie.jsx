import useFetch from "./useFetch";
import { useParams, Link } from "react-router-dom";
const placeholderImg =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const SingleMovie = () => {
  const { id } = useParams();
  const { loading, movies } = useFetch(`&i=${id}`);
  console.log(movies);
  const { Title, Year, Poster, Plot } = movies;

  return (
    <section className="section-center">
      <section className="single-center">
        {loading ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          <article className="single-movie">
            <img
              className="single-img"
              src={Poster === "N/A" ? placeholderImg : Poster}
              alt={Title}
            />
            <div className="movie-info">
              <h1 className="title">{Title}</h1>
              <p className="plot">{Plot}</p>
              <h5 className="year-single">{Year}</h5>
              <Link to={"/"} className="btn">
                back to movies
              </Link>
            </div>
          </article>
        )}
      </section>
    </section>
  );
};

export default SingleMovie;
