import React, { useContext } from "react";
import ThemeContext, { ThemeDataContext } from "../context/ThemeContext";

const NotFound = () => {
  const data = useContext(ThemeDataContext);
  console.log(data);
  return <div>NotFound</div>;
};

export default NotFound;
