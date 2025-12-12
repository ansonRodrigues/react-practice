import React, { useState } from "react";

const Notes = () => {
  const [heading, setHeading] = useState("");
  const [headingStored, setHeadingStored] = useState("");
  const [desc, setDesc] = useState("");
  const [descStored, setDescStored] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
    console.log(heading);
    setHeadingStored(heading);
    setDescStored(desc);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          value={heading}
          onChange={(e) => {
            setHeading(e.target.value);
          }}
          id="formInput"
          type="text"
          placeholder="Enter your title here"
        />
        <input
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          type="text"
          placeholder="Enter your description here"
        />
        <button id="formBtn">Submit</button>
      </form>
      <h1>Heading stored is {headingStored}</h1>
      <h3>Description is {descStored}</h3>
    </div>
  );
};

export default Notes;
