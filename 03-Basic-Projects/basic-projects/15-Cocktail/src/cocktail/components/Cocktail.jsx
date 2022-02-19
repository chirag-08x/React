import { Link } from "react-router-dom";

const Cocktail = ({ id, name, img, info, glass }) => {
  return (
    <article className="single-drink">
      <figure className="drink-img-container">
        <img src={img} alt="" />
      </figure>

      <div className="drink-info">
        <h1 className="drink-name">{name}</h1>
        <h5 className="glass-name">{glass}</h5>
        <p className="drink-type">{info}</p>
        <Link className="drink-link" to={`/cocktail/${id}`}>
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
