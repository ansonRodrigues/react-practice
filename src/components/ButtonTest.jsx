import React from "react";

const ButtonTest = () => {
  return (
    <div>
      <button
        className="btnTest"
        onClick={() => {
          console.log("sup");
        }}
      >
        Click
      </button>
    </div>
  );
};

export default ButtonTest;
