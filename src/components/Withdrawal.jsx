import React, { useState } from "react";
import CustomButton from "./CustomButton.jsx";
import CustomInput from "./CustomInput.jsx";
import Modal from "./Modal.jsx";

const Withdrawal = ({ addTransaction, balance }) => {
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleWithdraw = () => {
    const withdrawAmount = parseFloat(amount);

    if (withdrawAmount > 0) {
      if (withdrawAmount > balance) {
        setAmountError("Insufficient balance");
      } else {
        setAmountError("");
        addTransaction(withdrawAmount, "Withdraw");
        setAmount("");
        setIsOpen(true);
      }
    } else {
      setAmountError("Invalid withdraw amount");
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleChange = (value) => {
    if (value !== "") {
      setAmountError("");
    }
    setAmount(value);
  };

  return (
    <div className="p-4 border rounded-md gap-2 grid shadow-md shadow-grey-500/50">
      <h3 className="text-xl font-semibold text-center mb-2">Withdraw Money</h3>
      <CustomInput
        value={amount}
        handleChange={handleChange}
        error={amountError}
      />
      <CustomButton
        text={"Withdraw"}
        handleClick={handleWithdraw}
        style={"mt-2 w-1/2"}
      />
      <Modal
        isOpen={isOpen}
        closeModal={handleCloseModal}
        title={"Amount is withdrawn successfully!"}
      />
    </div>
  );
};

export default Withdrawal;
