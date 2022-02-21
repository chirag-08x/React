import React from "react";
import ReactDOM from "react-dom";
import "./submenu/index.css";
import App from "./submenu/App.jsx";
import { AppProvider } from "./submenu/context.jsx";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
