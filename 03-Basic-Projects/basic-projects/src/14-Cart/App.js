import Navbar from "./Navbar";
import { AppProvider } from "./context";
import "./index.css";
import CartContainer from "./CartContainer";

const App = () => {
  return (
    <AppProvider>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </AppProvider>
  );
};

export default App;
