import React from "react";
import { useState } from "react";
//import Dropdown from "../components/Dropdown";
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
      <div>
        <Dropdownsec
          label="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          options={countryOptions}
          placeholder="Select country"
          //error={!country}
          helperText={!country ? "Country is required" : ""}
        />
      </div>
    </div>
  );
};

export default About;
