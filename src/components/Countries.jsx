import React, { useEffect, useState } from "react";
import Country from "./Country";
import { getCountries } from "../api";

export const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const countries = await getCountries();
    setCountries(countries);
  };

  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 20,
        flexWrap: "wrap",
        
        padding: 20,
      }}
    >
      {countries.map((country, index) => (
        <Country key={index} name={country.name} flag={country.flag} />
      ))}
    </div>
  );
};
