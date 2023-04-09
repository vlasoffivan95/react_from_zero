import React, { useEffect } from "react";
import { useClicker } from "hooks";
import { useRef } from "react";

const RefClicker = () => {
  const elemRef = useRef(null);
  const clicks = useClicker(elemRef);
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <div>
      <h1>Clicks: {clicks}</h1>
      <input type="text" ref={inputRef}></input>
      <div
        ref={elemRef}
        style={{
          width: "300px",
          height: "200px",
          background: "limegreen",
          margin: "20px",
        }}
      ></div>
    </div>
  );
};

export default RefClicker;
