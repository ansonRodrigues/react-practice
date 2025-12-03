import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 className="count">{count}</h1>
      <div className="contain">
        <button className="inc" onClick={inc}>
          Increase
        </button>
        <button
          className="dec"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
