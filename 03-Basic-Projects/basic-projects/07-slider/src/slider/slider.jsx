import people from "./data";
import { useState } from "react";
import styled from "styled-components";
import Person from "./person";

const Slider = () => {
  const [data, setData] = useState(people);

  return (
    <Wrapper>
      <h1>
        <span>/</span> reviews
      </h1>

      <section className="slider">
        {data.map((item) => {
          return <Person key={item.id} {...item} />;
        })}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default Slider;
