import React, { useState } from "react";

const UseStateDemo = () => {
  const [num, setNum] = useState(23);
  const [name, setName] = useState("Anson");

  const ChangeName = () => {
    setName("Brendon");
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
    </div>
  );
};

export default UseStateDemo;
