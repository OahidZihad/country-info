import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, []);






  const countryStyle = {
    border: "1px solid tomato",
    borderRadius: "15px",
    margin: "20px",
    padding: "20px",
    backgroundColor: "tomato",
    textAlign: "center",
    color: "white",
  };
  return (
    <div style={countryStyle}>
      <h1>Details of {countryName}</h1>
      <h3>Name: {countryName}</h3>
      <h3>Capital: {country.capital}</h3>
      <h3>Alpha2Code: {country.alpha2Code}</h3>
    </div>
  );
};

export default CountryDetails;
