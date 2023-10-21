import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Click to view Products Page</button>
    </div>
  );
};

export default Home;
