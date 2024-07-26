import React, { useState } from "react";
import Pagination from "./Pagination.jsx";
import CustomButton from "./CustomButton.jsx";
import Filters from "./Filters.jsx";

const BankStatement = ({ statement, sortOrder, handleSort, handleFilter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(statement.length / itemsPerPage);
  const paginatedStatement = statement.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const arrow = (
    <svg
      fill="none"
      height="25"
      viewBox="0 0 15 15"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="m7.50001 3.79291 2.70709 2.7071-.70709.70711-1.5-1.5v5.29288h-1v-5.29288l-1.5 1.5-.70711-.70711z"
        fill="#000"
        fillRule="evenodd"
      />
    </svg>
  );
  const statementTable = (
    <table className="w-full mt-4 border">
      <thead>
        <tr className="bg-blue-300">
          <th className="border px-4 py-2 justify-center flex">
            Date
            <CustomButton
              text={arrow}
              style={`h-2 my-1 bg-transparent text-blue-900 min-w-[8px] ${
                sortOrder === "asc" ? "" : "rotate-180"
              }`}
              handleClick={() =>
                handleSort(sortOrder === "asc" ? "desc" : "asc")
              }
            />
          </th>
          <th className="border px-4 py-2">Type</th>
          <th className="border px-4 py-2">Amount</th>
          <th className="border px-4 py-2">Balance</th>
        </tr>
      </thead>
      <tbody>
        {paginatedStatement.map((item, index) => (
          <tr key={index} className="text-center">
            <td className="border px-4 py-2">
              {new Date(item.date).toLocaleDateString()}
            </td>
            <td className="border px-4 py-2">{item.type}</td>
            <td className="border px-4 py-2">{item.amount}</td>
            <td className="border px-4 py-2">{item.balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const emptyStatementModal = (
    <div className="py-10 my-4 border flex justify-center rounded-md shadow-md shadow-grey-500/50">
      No transactions made. Please make a transaction to view the bank
      statement.
    </div>
  );

  return (
    <div className="p-4 border justify-center rounded-md shadow-md shadow-grey-500/50">
      <h3 className="text-2xl flex justify-center font-semibold">
        Account Statement
      </h3>
      <Filters handleFilter={handleFilter} />
      {statement.length > 0 ? (
        <>
          {statementTable}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </>
      ) : (
        emptyStatementModal
      )}
    </div>
  );
};

export default BankStatement;
