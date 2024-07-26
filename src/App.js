import React, { useState } from "react";
import Statement from "./components/BankStatement";
import TabBar from "./components/TabBar";

function App() {
  const [balance, setBalance] = useState(1000); // Initial balance
  const [statement, setStatement] = useState([]);
  const [filteredStatement, setFilteredStatement] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");

  const addTransaction = (amount, type) => {
    const newBalance = type === "Deposit" ? balance + amount : balance - amount;
    setBalance(newBalance);

    const newTransaction = {
      date: new Date(),
      amount,
      balance: newBalance,
      type,
    };
    const updatedStatement = [newTransaction, ...statement];
    setStatement(updatedStatement);
    setFilteredStatement(updatedStatement);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    const sortedStatement = [...filteredStatement].sort((a, b) => {
      if (order === "asc") {
        return new Date(a.date) - new Date(b.date);
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });
    setFilteredStatement(sortedStatement);
  };

  const normalizeDate = (date) => {
    const normalized = new Date(date);
    normalized.setHours(0, 0, 0, 0);
    return normalized;
  };

  const handleFilter = (type, startDate, endDate) => {
    const filtered = statement.filter((item) => {
      const itemDate = normalizeDate(item.date);
      const start = startDate ? normalizeDate(startDate) : null;
      const end = endDate ? normalizeDate(endDate) : null;

      const isTypeMatch = type ? item.type === type : true;
      const isStartDateMatch = start ? itemDate >= start : true;
      const isEndDateMatch = end ? itemDate <= end : true;

      return isTypeMatch && isStartDateMatch && isEndDateMatch;
    });
    setFilteredStatement(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <TabBar addTransaction={addTransaction} balance={balance} />
      <h2 className="text-4xl font-semibold flex justify-center mb-10">
        Account Balance: ${balance}
      </h2>
      <Statement
        statement={filteredStatement}
        handleSort={handleSort}
        sortOrder={sortOrder}
        handleFilter={handleFilter}
      />
    </div>
  );
}

export default App;
