import React from "react";
import CustomButton from "./CustomButton.jsx";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className="flex justify-center mt-4">
      <CustomButton
        text={"First"}
        handleClick={() => setCurrentPage(1)}
        style={"m-1"}
        disabled={currentPage === 1}
      />
      <CustomButton
        text={"Previous"}
        handleClick={() => setCurrentPage(currentPage - 1)}
        style={"m-1"}
        disabled={currentPage === 1}
      />
      <span className="m-4">
        Page {currentPage} of {totalPages}
      </span>
      <CustomButton
        text={"Next"}
        handleClick={() => setCurrentPage(currentPage + 1)}
        style={"m-1"}
        disabled={currentPage === totalPages}
      />
      <CustomButton
        text={"Last"}
        handleClick={() => setCurrentPage(totalPages)}
        style={"m-1"}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default Pagination;
