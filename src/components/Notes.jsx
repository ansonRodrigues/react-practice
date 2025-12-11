import React, { useState } from "react";

const Notes = () => {
    const [heading, setHeading] = useState('')
    const [headingStored, setHeadingStored] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
    console.log(heading)
    setHeadingStored(heading)
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input value={heading} onChange={(e)=> {setHeading(e.target.value)}} id="formInput" type="text" placeholder="Enter your title here" />
        <button id="formBtn">Submit</button>
      </form>
      <h1>Heading stored is {headingStored}</h1>
    </div>
  );
};

export default Notes;
