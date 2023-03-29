import React, { useState } from "react";

const Timer = (props) => {
//   const [state, setState] = useState({ count: 0, startingNumber: 0 });

  const[startingNumber, setStartingNumber] = useState(0)
  const [currentNumber, setCurrentNumber] = useState(0);

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
        

    setStartingNumber(value)
    // setState({ ...state, startingNumber: value });
  };


  return (
    <div>
      <p>Starting Number: {startingNumber}</p>
      <p>Current Number: {currentNumber}</p>
      <input type="text" value={startingNumber} onChange={handleChange} />
      <button>Start Timer {}</button>
      <button>Stop Timer</button>
    </div>
  );
};

export default Timer;
