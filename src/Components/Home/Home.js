import React, { useState, useEffect } from "react";
import Country from "../Country/Country";

const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h2>Total countries {countries.length}</h2>
      {countries.map((country) => (
        <Country country={country}></Country>
      ))}
    </div>
  );
};

export default Home;
