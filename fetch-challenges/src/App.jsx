import React, { useState } from 'react'
import './App.css'

const BalanceTracker = () => {
  
  const [balance, setBalance] = useState({
    previousBalance: 1000
  })
  const [currentBalance, setCurrentBalance] = useState("");
  const [transactionDetails, setTransactionDetails] = useState(null)
  
  const handleChange = (e) => {
    setCurrentBalance(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();
    const transactionAmount = parseFloat(currentBalance);

    if (!isNaN(transactionAmount)) {
      const newTransaction = balance.previousBalance + transactionAmount;
      setBalance({ ...balance, previousBalance: newTransaction })
      setCurrentBalance("");

      setTransactionDetails({
      amount: transactionAmount,
      date: new Date().toLocaleString()
      })
      
    } else {
      alert("Please provide a valid number");
    }
    
  }
  
  
  return (
    <div className='container'>
      <h1>Transactions</h1>
      <label><strong>Previous Day Transaction: </strong>
        <span>{balance.previousBalance}</span>
      </label>
      <br />

      <label>Current Day Transaction:
        <input type="number"
          value={currentBalance}
          onChange={handleChange}
        />
      </label>

      <button onClick={handleClick}>Add Transaction</button>
      <br />

      <div id='transactionDetails'>
        <label>Current Transaction:
        <b>{transactionDetails && transactionDetails.amount}</b>
        <br />
        Date & Time: {(transactionDetails && transactionDetails.date)}
        </label>
      </div>
      <br />

      <label id='totalTransaction'>Total Transaction:
        <strong>{ balance.previousBalance}</strong>
      </label>
    </div>
  )
}

export default BalanceTracker;