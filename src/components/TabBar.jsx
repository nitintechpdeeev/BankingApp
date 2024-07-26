import React, { useState } from "react";
import Withdrawal from "./Withdrawal.jsx";
import Transfer from "./Transfer.jsx";
import Deposit from "./Deposit.jsx";

const TabBar = ({ addTransaction, balance }) => {
  const [activeTab, setActiveTab] = useState("Withdraw");

  return (
    <div className="w-full">
      <nav className="flex justify-around p-4 bg-white shadow-md">
        <h1 className="justify-start flex w-2/3 text-blue-500 text-4xl">
          Banking App
        </h1>
        {["Withdraw", "Deposit", "Transfer"].map((tab, index) => (
          <button
            key={tab}
            className={`px-4 py-2  text-xl ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
      <div className="p-16 w-full flex justify-center">
        {activeTab === "Transfer" && (
          <div className="w-[60%]">
            <Transfer addTransaction={addTransaction} balance={balance} />
          </div>
        )}
        {activeTab === "Withdraw" && (
          <div className="w-[60%]">
            <Withdrawal addTransaction={addTransaction} balance={balance} />
          </div>
        )}
        {activeTab === "Deposit" && (
          <div className="w-[60%]">
            <Deposit addTransaction={addTransaction} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabBar;
