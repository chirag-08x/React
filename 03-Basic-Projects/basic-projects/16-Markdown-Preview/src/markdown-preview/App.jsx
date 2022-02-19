import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./index.css";

function App() {
  const [text, setText] = useState("# markdown preview");
  return (
    <section className="markdown">
      <textarea
        className="input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <article className="result">
        <ReactMarkdown>{text}</ReactMarkdown>
      </article>
    </section>
  );
}

export default App;
