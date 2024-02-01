// Create JSON with {'previousDayBalance': 1000}
// Fetch the previousDay balance from json
// Display the previous day balance and current balance
// Create textbox with label transaction and add button
// if you add transaction it should update the current balance

import React from 'react';
import { useState } from 'react';
import './App.css';

const BalanceTracker = () => {
  const [balance, setBalance] = useState({
    previousBalance: 1000,
    currentBalance: 1000,
  });
  const [transactionInput, setTransactionInput] = useState('');
  const [transactionDetails, setTransactionDetails] = useState(null);

  const handleChange = (e) => {
    setTransactionInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const transactionAmount = parseFloat(transactionInput);
    if (isNaN(transactionAmount)) {
      alert('Please provide a valid number for transaction');
      return;
    }

    const newCurrentBalance = balance.previousBalance + transactionAmount;
    setBalance({
      ...balance,
      currentBalance: newCurrentBalance,
    });

    setTransactionInput('');

    setTransactionDetails({
      currentAmount: transactionInput,
    });
  };

  return (
    <div className="container">
      <h1>Balance Tracker</h1>
      <label><b>Previous Balance:</b> {balance.previousBalance}</label>
      <br />

      <div className>
        <label>
          <span>Current Balance Details : {balance.currentBalance}</span>
        </label>
        <br />

        <label>
          {' '}
          Transaction:
          <input type="text" value={transactionInput} onChange={handleChange} />
        </label>
      </div>

      <button onClick={handleClick}>Add Transaction</button>

      <div>
        <label>
          <h3>Total Transaction Details </h3>
          <p>
            Current transaction:
            {transactionDetails && transactionDetails.currentAmount}
          </p>
          <p>Total Balance: {balance.currentBalance} </p>
        </label>
      </div>
    </div>
  );
};

export default BalanceTracker;
