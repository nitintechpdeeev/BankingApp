import React, { useState } from "react";
import CustomButton from "./CustomButton.jsx";
import CustomInput from "./CustomInput.jsx";
import Modal from "./Modal.jsx";

const Transfer = ({ addTransaction, balance }) => {
  const [amount, setAmount] = useState("");
  const [iban, setIban] = useState("");
  const [amountError, setAmountError] = useState("");
  const [ibanError, setIbanError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const validateIBAN = (iban) => {
    const ibanPattern = /^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$/;
    return ibanPattern.test(iban);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleTransfer = () => {
    const transferAmount = parseFloat(amount);
    if (amount == "") {
      setAmountError("Invalid transfer amount");
    } else if (transferAmount <= 0) {
      setAmountError("Invalid transfer amount");
    } else if (transferAmount > balance) {
      setAmountError("Insufficient balance");
    } else if (!validateIBAN(iban)) {
      setIbanError("Invalid IBAN Details");
    } else {
      setAmountError("");
      setIbanError("");
      addTransaction(transferAmount, "Transfer");
      setAmount("");
      setIban("");
      setIsOpen(true);
    }
  };

  const handleChange = (value) => {
    if (value !== "") {
      setAmountError("");
      setAmount(value);
    }
    setAmount(value);
  };

  return (
    <div className="p-4 border rounded-md gap-2 grid shadow-md shadow-grey-500/50">
      <h3 className="text-xl font-semibold text-center mb-2">Transfer Money</h3>
      <CustomInput
        value={amount}
        handleChange={handleChange}
        error={amountError}
      />
      <CustomInput
        type={"text"}
        value={iban}
        placeholder={"IBAN"}
        handleChange={(value) => setIban(value)}
        error={ibanError}
      />
      <h3 className="p-2">IBAN: DE89370400440532013000 </h3>

      <CustomButton
        text={"Transfer"}
        handleClick={handleTransfer}
        style={"mt-2 w-1/2"}
      />
      <Modal
        isOpen={isOpen}
        closeModal={handleCloseModal}
        title={"Amount is transfered successfully!"}
      />
    </div>
  );
};

export default Transfer;
