import React from "react";
import { Link } from "react-router-dom";

const Country = (props) => {
  const { name, capital, alpha2Code } = props.country;
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
      <h3>Name: {name}</h3>
      <p>Capital: {capital}</p>
      <p>Alpha2Code: {alpha2Code}</p>
      <Link to={`/country/${name}`}>
        <button>Details of {name}</button>
      </Link>
    </div>
  );
};

export default Country;
