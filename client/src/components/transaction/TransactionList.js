import React, { Fragment, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(t => (
          <Transaction key={t._id} transaction={t} />
        ))}
      </ul>
    </Fragment>
  );
};
