import React from "react";

const CustomInput = ({
  value,
  handleChange,
  type = "number",
  placeholder = "Amount",
  style = "",
  error = "",
}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className={`${style} border p-2 ${
          type == "date" ? "" : "w-full mt-2"
        } `}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  );
};

export default CustomInput;
