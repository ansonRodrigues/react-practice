import React, { useState } from "react";

const Form = () => {
  const conclude = (e) => {
    e.preventDefault();
    console.log("concluded");
  };
  return (
    <div>
      <form onSubmit={conclude}>
        <input type="text" placeholder="Enter title here" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
