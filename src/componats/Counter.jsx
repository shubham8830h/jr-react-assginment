import React, { useState } from "react";
import "./counter.css";
const Counter = () => {
  const [count, SetCount] = useState(0);

  const handleClickInc = () => {
    SetCount(count + 3);
  };
  const handleClickDec = () => {
    SetCount(count - 3);
  };

  return (
    <>
      <div className="div">
        <div>
          <h1>Counter :</h1>
        </div>
        <button onClick={handleClickInc}>&#43;</button>
        <span>{count}</span>
        <button onClick={handleClickDec}>&#8722;</button>
      </div>
    </>
  );
};

export default Counter;
