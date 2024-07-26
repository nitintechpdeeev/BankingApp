import React from "react";

const CustomButton = ({ text, handleClick, style = "", disabled = false }) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`justify-self-center min-w-[100px] h-10 flex bg-blue-400 text-white p-2 rounded justify-center items-center ${style}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
