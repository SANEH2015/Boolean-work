import React, { useState } from 'react';

export default function Card() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const findBiggestNumber = (num1, num2) => {
    if (num1 > num2) {
      return num1;
    } else if (num2 > num1) {
      return num2;
    } else {
      return 'Both numbers are equal';
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const biggestNumber = findBiggestNumber(parseFloat(num1), parseFloat(num2));
    setResult(`The biggest number is ${biggestNumber}`);
  };

  return (
    <div className="w3-card-4" style={{ width: "30%", margin: '10px' }}>
      <header className="w3-container w3-blue">
        <h1>What is the biggest number?</h1>
      </header>

      <div className="w3-container">
        <form onSubmit={handleCalculate}>
          <label>
            Num1:
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              style={{
                margin: "10px",
                height: "30px",
                borderRadius: "5px",
                borderColor: "blue"
              }}
            />
          </label>
          <br />
          <label>
            Num2:
            <input
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              style={{
                margin: "10px",
                height: "30px",
                borderRadius: "5px",
                borderColor: "blue"
              }}
            />
          </label>
          <br />
          <button
            type="submit"
            style={{
              margin: "10px",
              height: "30px",
              borderRadius: "5px",
              borderColor: "blue",
              marginLeft: "100px"
            }}
          >
            Calculate
          </button>
        </form>
      </div>

      <footer className="w3-container w3-gray">
        <h5>Output: {result}</h5>
      </footer>
    </div>
  );
}