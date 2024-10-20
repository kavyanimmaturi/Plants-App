import React from 'react';
import "./index.css";


const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null; 
  }

  return (
    <div className="modal-container">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
