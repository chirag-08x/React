import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

const Index = () => {
  return (
    // Similar to Context API, we wrap our whole app inside the Provider.
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
