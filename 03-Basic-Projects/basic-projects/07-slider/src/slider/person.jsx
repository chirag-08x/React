import { FaQuoteRight } from "react-icons/fa";
import styled from "styled-components";

const Person = ({ image, name, title, quote }) => {
  return (
    <Wrapper>
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

      <FaQuoteRight className="quote" />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  .img-container {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin-bottom: 1rem;

    img {
      border-radius: 50%;
    }
  }

  .info {
    text-align: center;
  }

  .subtitle {
    text-align: center;
  }

  .quote {
    font-size: 2.5rem;
  }
`;

export default Person;
