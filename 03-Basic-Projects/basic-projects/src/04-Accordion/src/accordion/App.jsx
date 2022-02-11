import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import "./index.css";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3 className="title">questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
