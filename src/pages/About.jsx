import React from "react";
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import Dropdownsec from "../components/Dropdownsec";

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
      <div>
        <Dropdownsec
          label="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          options={countryOptions}
          placeholder="Select country"
          error={!country}
          helperText={!country ? "Country is required" : ""}
        />
      </div>
    </div>
  );
};

export default About;
