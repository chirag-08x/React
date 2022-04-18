import { FaQuoteRight } from "react-icons/fa";

const Person = ({ image, name, title, quote }) => {
  return (
    <article>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>

      <div className="info">
        <h4>{name}</h4>
        <p>{title}</p>
      </div>

      <div className="subtitle">
        <p>{quote}</p>
      </div>

      <FaQuoteRight />
    </article>
  );
};

export default Person;
