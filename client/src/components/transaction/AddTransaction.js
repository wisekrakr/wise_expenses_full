import React, { Fragment, useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export const AddTransaction = () => {
  const [transaction, setTransaction] = useState({});

  const { addTransaction } = useContext(GlobalContext);

  const onChange = event => {
    setTransaction({
      ...transaction,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: transaction.text,
      amount: parseInt(transaction.amount)
    };

    addTransaction(newTransaction);
    // console.log(newTransaction);
  };

  return (
    <Fragment>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="transaction">Text</label>
          <input
            type="text"
            name="text"
            onChange={onChange}
            placeholder="Enter Text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="transaction">
            Amount <br /> (negative - expense, positive - income){" "}
          </label>
          <input
            type="number"
            name="amount"
            onChange={onChange}
            placeholder="Enter Amount..."
          />
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </Fragment>
  );
};
