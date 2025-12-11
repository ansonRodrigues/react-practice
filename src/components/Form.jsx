import React, { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [title2, setTitle2] = useState("");
  const [submittedTitle, setSubmittedTitle] = useState("");
  const conclude = (e) => {
    e.preventDefault();
    console.log("concluded");
    console.log(e);
    console.log(title);
    setSubmittedTitle(title2);
  };
  return (
    <div>
      <form onSubmit={conclude}>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Enter title here"
        />
        <button>Submit</button>
        <input
          value={title2}
          onChange={(e) => {
            setTitle2(e.target.value);
          }}
          type="text"
          placeholder="Enter to see after submit"
        />
        <button>Change on submit</button>
      </form>
      <div>
        <h1>The value that you've entered is {title}</h1>
      </div>
      <br />
      <h2>The value you have entered on submit is {submittedTitle}</h2>
    </div>
  );
};

export default Form;
