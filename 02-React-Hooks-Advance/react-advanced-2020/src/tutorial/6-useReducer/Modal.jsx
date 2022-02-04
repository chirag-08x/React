import React, { useEffect } from "react";

const Modal = ({ modalText, closeModal }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      closeModal();
    }, 3000);
  });

  return (
    <div className="modal">
      <p>{modalText}</p>
    </div>
  );
};

export default Modal;
