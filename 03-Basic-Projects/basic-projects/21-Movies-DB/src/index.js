import ReactDOM from "react-dom";
import App from "./movies-db/App.jsx";
import { AppProvider } from "./movies-db/context.jsx";
import { BrowserRouter as Router } from "react-router-dom";

const Index = () => {
  return (
    <AppProvider>
      <Router>
        <App />;
      </Router>
    </AppProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
