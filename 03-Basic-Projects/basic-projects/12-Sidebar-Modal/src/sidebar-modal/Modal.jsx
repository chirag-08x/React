import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal } = useContext(AppContext);
  return (
    <div
      className={isModalOpen ? `modal-container show-modal` : `modal-container`}
    >
      <div className="modal">
        <button
          type="button"
          className="close-btn modal-btn"
          onClick={closeModal}
        >
          {<FaTimes />}
        </button>
        <h1 className="modal-title">modal content</h1>
      </div>
    </div>
  );
};

export default Modal;
