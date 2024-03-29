import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const [startingNumber, setStartingNumber] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(function effect() {
    console.log("did mount + did update");
    // // let intervalId = setInterval(tick, 1000)
    // document.addEventListener('click', handleClick)
    return function cleanup() {
      console.log("will unmount");
      // document.removeEventListener('click', handleClick)
    };
  });

  useEffect(() => {
    console.log("effect2");
  }, [currentNumber]);

  const handleClick = () => {
    console.log("click");
  };

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;

    setStartingNumber(+value);
  };

  const start = () => {
    if (!isStarted) {
      setIsStarted(true);
      setCurrentNumber(startingNumber);
      // setIntervalId(setInterval(tick, 1000));
    }
  };

  const stop = () => {
    clearInterval(intervalId);
    setIsStarted(false);
  };

  const tick = () => {
    setCurrentNumber((oldCurrentNumber) => oldCurrentNumber - 1);
  };

  return (
    <div>
      <p>Starting Number: {startingNumber}</p>
      <p>Current Number: {currentNumber}</p>
      <input type="text" value={startingNumber} onChange={handleChange} />
      <button onClick={start}>Start Timer</button>
      <button onClick={stop}>Stop Timer</button>
    </div>
  );
};

export default Timer;
