import React from "react";

const Modal = ({ isOpen, closeModal, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
        <div className="justify-center flex pt-8">{title}</div>
        <div className="justify-center flex p-4">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={closeModal}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
