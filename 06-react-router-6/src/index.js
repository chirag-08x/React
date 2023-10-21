import App from "./App";
import { createRoot } from "react-dom/client";

const Index = () => {
  return <App />;
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Index />);
