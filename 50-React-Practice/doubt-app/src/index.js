import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  useEffect(() => {
    console.count("Hello in main");
  });

  const [counter, setCounter] = useState(0);
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatibus quo, adipisci officiis illum temporibus ipsa distinctio beatae laborum doloribus dolorem soluta ratione a dignissimos reprehenderit dolore nesciunt consequatur harum in voluptas deleniti atque? Dolores perspiciatis cupiditate veritatis! Labore, quidem animi. Alias possimus incidunt natus enim illo magni repellat veniam!";

  const [count, setCount] = useState(1);

  const increaseCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // const increaseCount = () => {
  //   setCount(count + 1);
  // };

  return (
    <div>
      <h1>Counter 1 : {counter}</h1>
      <button className="btn" onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
      <h1>Counter 2 : {count}</h1>
      <Info text={text} increaseCount={increaseCount}></Info>
    </div>
  );
};

const Info = React.memo(({ text, increaseCount }) => {
  useEffect(() => {
    console.count("Hello in info");
  });
  return (
    <>
      <button className="btn" onClick={increaseCount}>
        Increase
      </button>
      <p>{text}</p>
    </>
  );
});

ReactDOM.render(<App />, document.getElementById("root"));
