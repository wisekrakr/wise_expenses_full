import React from "react";

import { Header } from "./components/layout/Header";
import { Balance } from "./components/balance/Balance";
import { IncomeExpenses } from "./components/expense/IncomeExpenses";
import { TransactionList } from "./components/transaction/TransactionList";
import { AddTransaction } from "./components/transaction/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
