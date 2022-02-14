import ReactDOM from "react-dom";
import App from "./hacker-news/App.jsx";
import { AppProvider } from "./hacker-news/context.jsx";

const Index = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
