import React, { useState } from 'react';

export default function Card2() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const handleCheck = (e) => {
    e.preventDefault();
    if (number.trim() === '') {
      setResult('Please enter a number');
    } else if (isNaN(number)) {
      setResult('Invalid input. Please enter a valid number');
    } else if (number % 2 === 0) {
      setResult(`The number ${number} is even`);
    } else {
      setResult(`The number ${number} is odd`);
    }
  };

  return (
    <>
      <div className="w3-card-4" style={{ width: "30%", margin: "10px" }}>
        <header className="w3-container w3-blue">
          <h1>Is this number odd or even?</h1>
        </header>

        <div className="w3-container">
          <form>
            Number:
            <input
              style={{
                margin: "10px",
                height: "30px",
                borderRadius: "5px",
                borderColor: "blue"
              }}
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <br />
            <button
              style={{
                margin: "10px",
                height: "30px",
                borderRadius: "5px",
                borderColor: "blue",
                marginLeft: "100px"
              }}
              onClick={handleCheck}
            >
              Check
            </button>
          </form>
        </div>

        <footer className="w3-container w3-gray" style={{ marginTop: "104px" }}>
          <h5>Output: {result}</h5>
        </footer>
      </div>
    </>
  );
}
