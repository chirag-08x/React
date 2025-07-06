// useTransition hook allows us to manage state updates in a non-blocking manner such that marking certain states as non-urgent and which does not need to be batch with other updates. Basically ranking state updates as either high or low priority.

import { useState, useTransition } from "react";

const UseTransitionHook = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  // Won't work here, since we are using React 16, will work with React 18 and above
  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 20000;

  const handleChage = (e) => {
    // high priority
    setInput(e.target.value);

    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };

  return (
    <div>
      <h1>useTransition hook</h1>

      <input type="text" value={input} onChange={handleChage} />

      {isPending ? (
        <p>Updating List...</p>
      ) : (
        list.map((item, index) => {
          return <div key={index}>{item}</div>;
        })
      )}
    </div>
  );
};

export default UseTransitionHook;
