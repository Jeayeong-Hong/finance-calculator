import React, { useState, useEffect } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error:", err)); // 여기서 ; 제거
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:5000/api/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount, rate, years }),
    });

    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div>
      <h1>Finance Calculator</h1>
      <p>{message}</p> {/* Flask에서 온 메시지 표시 */}
      
      <form onSubmit={handleSubmit}> {/* <from> → <form> 수정 */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)} // 수정됨
          placeholder="Rate (%)"
          required
        />
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)} // 수정됨
          placeholder="Years"
          required
        />
        <button type="submit">Calculate</button>
      </form>

      {result && <p>Result: {result}</p>} {/* 오타 수정: reslut → result */}
    </div>
  );
}

export default App;
