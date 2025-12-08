import React, { useState } from "react";

const UseStateDemo = () => {
  const [num, setNum] = useState(23);
  const [name, setName] = useState("Anson");
  const [batch, setBatch] = useState(0);
  const [arr, setArr] = useState([23, 44, 56, 21]);

  const ChangeName = () => {
    setName("Brendon");
  };

  const batchCount = () => {
    setBatch((prev) => prev + 1);
    setBatch((prev) => prev + 1);
    setBatch((prev) => prev + 1);
  };

  const modOfArr = () => {
    const newArr = [...arr, 90];
    setArr(newArr);
    setArr(prev => [...prev, 222]);
  };

  return (
    <div>
      <div>
        UseStateDemo, {name}'s age is {num}
      </div>
      <button
        onClick={() => {
          setNum(18);
        }}
      >
        ChangeAge
      </button>
      <br />
      <button onClick={ChangeName}>ChangeName</button>
      <div>
        <h1>Batch count updating - {batch}</h1>
        <button onClick={batchCount}>Batch Update</button>
      </div>
      <div>
        <h2>New array is {arr}</h2>
        <button onClick={modOfArr}>Change array</button>
      </div>
    </div>
  );
};

export default UseStateDemo;
