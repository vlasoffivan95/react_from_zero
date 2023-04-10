import React, { useCallback, useEffect } from "react";
import { useClicker } from "hooks";
import { useRef, useState } from "react";

const RefClicker = () => {
  const [value, setValue] = useState("");
  const elemRef = useRef(null);
  const clicks = useClicker(elemRef);
  const inputRef = useRef();
  const prevClicks = useRef(clicks);
  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  useEffect(() => {
    prevClicks.current = clicks;
  }, [clicks]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  //   const handleChange = (e) => {
  //     setValue(e.target.value);
  //   };

  //   const logValue = () => {
  //     console.log(`value is ${value}`);
  //   };

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    console.log("handleChange created");
  }, [handleChange]);

  const logValue = useCallback(() => {
    console.log(`${value}`);
  }, [value]);

  return (
    <div>
      <h1>Clicks: {clicks}</h1>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
      ></input>
      <div
        ref={elemRef}
        style={{
          width: "300px",
          height: "200px",
          background: "limegreen",
          margin: "20px",
        }}
      ></div>
      <p>Prev clicks: {prevClicks.current}</p>
      <p>Renders: {renders.current}</p>
      <button onClick={logValue}>LogValue</button>
    </div>
  );
};

export default RefClicker;
