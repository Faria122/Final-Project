import React, { useState } from 'react';
import './App.css'; // You can create this file for styling
import axios from 'axios';

function App() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [budget, setBudget] = useState(null);

  const calculateBudget = () => {
    // Assuming a simple budget calculation (income - expenses)
    const calculatedBudget = income - expenses;
    setBudget(calculatedBudget);
  };

  const handleIncomeChange = (e) => {
    setIncome(parseFloat(e.target.value) || 0);
  };

  const handleExpensesChange = (e) => {
    setExpenses(parseFloat(e.target.value) || 0);
  };

  return (
    <div className="App">
      <h1>Budget Calculator</h1>
      <div>
        <label>
          Income:
          <input type="number" value={income} onChange={handleIncomeChange} />
        </label>
      </div>
      <div>
        <label>
          Expenses:
          <input type="number" value={expenses} onChange={handleExpensesChange} />
        </label>
      </div>
      <button onClick={calculateBudget}>Calculate Budget</button>
      {budget !== null && (
        <div>
          <h2>Your Budget: ${budget}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
