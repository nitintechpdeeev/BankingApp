import React, { useState } from "react";
import CustomButton from "./CustomButton.jsx";
import CustomInput from "./CustomInput.jsx";

function Filters({ handleFilter }) {
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = () => {
    handleFilter(type, startDate, endDate);
  };

  const resetSearch = () => {
    setEndDate("");
    setStartDate("");
    setType("");
    handleFilter("", "", "");
  };

  return (
    <div className="my-4">
      <h3 className="text-lg font-semibold mb-2">
        Filters: 
      </h3>
      <div className="flex flex-wrap gap-4">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border bg-white p-2"
        >
          <option value="">All</option>
          <option value="Deposit">Deposit</option>
          <option value="Withdraw">Withdraw</option>
          <option value="Transfer">Transfer</option>
        </select>
        <div className="flex items-center justify-between gap-2">
          <p>FROM:</p>
        <CustomInput
          type={"date"}
          value={startDate}
          max={endDate}
          handleChange={(value) => setStartDate(value)}
        />
        </div>

        <div className="flex items-center justify-between gap-2">
          <p>TO:</p>
        <CustomInput
          type={"date"}
          value={endDate}
          min={startDate}
          handleChange={(value) => setEndDate(value)}
        />
        </div>
        <CustomButton text={"Search"} handleClick={handleSearch} />
        <CustomButton text={"Reset Filters"} handleClick={resetSearch} />
      </div>
    </div>
  );
}

export default Filters;
