import people from "./data";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Person from "./person";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Slider = () => {
  const [data, setData] = useState(people);
  const refContainer = useRef("");

  useEffect(() => {
    const children = [...refContainer.current.children];
  }, []);

  return (
    <Wrapper>
      <h1>
        <span>/</span> reviews
      </h1>

      <section className="slider" ref={refContainer}>
        {data.map((item) => {
          return <Person key={item.id} {...item} />;
        })}
      </section>

      <div className="btns">
        <button className="btn">
          <FaAngleLeft />
        </button>

        <button className="btn">
          <FaAngleRight />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin: 4rem 0 2rem 0;
  }

  .slider {
    width: 90vw;
    max-width: 800px;
    height: 450px;
    margin: 0 auto;
    /* display: flex; */
    position: relative;
  }
`;

export default Slider;
