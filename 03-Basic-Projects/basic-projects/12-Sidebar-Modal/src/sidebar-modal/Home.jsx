import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext } from "./context";

const Home = () => {
  const { openModal, openSidebar } = useContext(AppContext);

  return (
    <section className="home-container">
      <div className="home">
        <button type="button" className="bars" onClick={openSidebar}>
          {<FaBars />}
        </button>
        <button
          className="btn show-modal-btn"
          type="button"
          onClick={openModal}
        >
          show modal
        </button>
      </div>
    </section>
  );
};

export default Home;
