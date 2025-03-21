import React, { useState } from 'react';

function App() {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState('');

  const handlesubmit = async (e) => {
    e.preventDefault();

    const reponse = await fetch('http://127.0.0.1:5000/api/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, rate, years })
    });

    const data = await reponse.json();
    setResult(data.result);
  };
  return(
    <div>
      <h1>Finance-calculator</h1>
      <from onSubmit={handlesubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <input
          type="number"
          value={years}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Rate"
        />
        <button type="submit">Calculate</button>
      </from>
      {result && <p>reslut: {result}</p>}
    </div>
  )
}

export default App;