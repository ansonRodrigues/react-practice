import React from "react";
import { useState } from "react";
import Dropdown from "../components/Dropdown";

const About = () => {
  const [country, setCountry] = useState("");

  const countryOptions = [
    { value: "IN", label: "India" },
    { value: "US", label: "USA" },
    { value: "UK", label: "UK" },
  ];

  return (
    <div>
      <h1>About</h1>
      <Dropdown
        label="Country"
        value={country}
        //size="medium"
        fullWidth={false}
        onChange={(e) => setCountry(e.target.value)}
        options={countryOptions}
        helperText="Please select a country"
      />
    </div>
  );
};

export default About;
