import React, { useState } from "react";
import CustomButton from "./CustomButton.jsx";
import CustomInput from "./CustomInput.jsx";
import Modal from "./Modal.jsx";

const Deposit = ({ addTransaction }) => {
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleDeposit = () => {
    const depositAmount = parseFloat(amount);
    if (depositAmount > 0) {
      setAmountError("");
      addTransaction(depositAmount, "Deposit");
      setAmount("");
      setIsOpen(true);
    } else {
      setAmountError("Invalid deposit amount");
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-4 border rounded-md gap-2 grid shadow-md shadow-grey-500/50">
      <h3 className="text-xl font-semibold text-center mb-2">Deposit Money</h3>
      <CustomInput
        value={amount}
        handleChange={(value) => setAmount(value)}
        error={amountError}
      />
      <CustomButton
        text={"Deposit"}
        handleClick={handleDeposit}
        style={"mt-2 w-1/2"}
      />
      <Modal
        isOpen={isOpen}
        closeModal={handleCloseModal}
        title={"Amount is deposited successfully!"}
      />
    </div>
  );
};

export default Deposit;
