import React from "react";
import { useClicker } from "hooks";
import { useRef } from "react";

const RefClicker = () => {
  const elemRef = useRef(null);
  const clicks = useClicker(elemRef);
  return (
    <div>
      <h1>Clicks: {clicks}</h1>
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
