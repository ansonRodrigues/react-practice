import React, { useEffect, useState } from "react";

const UseEffectDemo = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(100);

  useEffect(() => {
    console.log("Effect ran because component mounted or num1 changed");
  }, [num1]);

  return (
    <div>
      <h1>
        Num1 - {num1}
        Num2 - {num2}
      </h1>
      <button
        onClick={() => {
          setNum1((prev) => prev + 1);
        }}
      >
        Tap
      </button>
      <button
        onClick={() => {
          setNum2((prev) => prev + 10);
        }}
      >
        Tap 2
      </button>
    </div>
  );
};

export default UseEffectDemo;
