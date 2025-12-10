import React, { useState } from "react";

// Component to practice useState, spread operator, arrays, and objects
const UseStateDemo = () => {
  // Simple primitive states
  const [num, setNum] = useState(23); // stores a number
  const [name, setName] = useState("Anson"); // stores a string
  const [batch, setBatch] = useState(0); // will show how batch updates work

  // Array state
  const [arr, setArr] = useState([23, 44, 56, 21]); // initial array

  // Object states
  const [obx, setObx] = useState({ color: "blue", size: 25 }); // object with two keys
  const [obx2, setObx2] = useState({ user: "dreamer", age: 88 }); // another object

  // Simple setter function
  const ChangeName = () => {
    setName("Brendon"); // directly replacing name
  };

  // Demonstrates functional updates (prev => prev + 1)
  // React batches these state updates so each receives the latest value
  const batchCount = () => {
    setBatch((prev) => prev + 1);
    setBatch((prev) => prev + 1);
    setBatch((prev) => prev + 1);
    // Final result = previous batch + 3
  };

  // Demonstrates array updates using spread operator
  const modOfArr = () => {
    // Creating a NEW array instead of mutating the old one
    const newArr = [...arr, 90]; // spreads existing items and adds 90
    setArr(newArr); // update state

    // Another valid way using functional update
    setArr((prev) => [...prev, 222]); // adds 222
  };

  // Demonstrates object spread and immutability
  const modOfObx = () => {
    // Updating object using spread operator
    setObx((prev) => ({ ...prev, color: "red", size: 66 }));
    // ...prev copies existing key-values, and then we overwrite color + size

    // Updating obx2 without mutating original
    const newObx2 = { ...obx2 }; // shallow copy
    newObx2.user = "myBoy"; // modify properties
    newObx2.age = 69;
    setObx2(newObx2); // update state
  };

  return (
    <div>
      <div>
        UseStateDemo, {name}'s age is {num}
      </div>

      {/* Button to change num */}
      <button
        onClick={() => {
          setNum(18); // directly setting new value
        }}
      >
        ChangeAge
      </button>

      <br />

      {/* Button using separate function */}
      <button onClick={ChangeName}>ChangeName</button>

      <div>
        <h1>Batch count updating - {batch}</h1>
        <button onClick={batchCount}>Batch Update</button>
      </div>

      <div>
        <h2>New array is {arr}</h2>
        <button onClick={modOfArr}>Change array</button>
      </div>

      <div>
        <h3>
          Look at how Obj changes color is {obx.color}, size is {obx.size}
          <br />
          Look at how Obj2 changes user-name {obx2.user} and age {obx2.age}
        </h3>
        <button
          onClick={() => {
            modOfObx(); // trigger object updates
          }}
        >
          Obj changes
        </button>
      </div>
    </div>
  );
};

export default UseStateDemo;
