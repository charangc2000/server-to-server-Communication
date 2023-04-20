import React, { useState } from "react";
import axios from "axios";

const Display = (props) => {
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const word = e.target.value;
    setSearch(word);
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3099/api/users/${search}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <center>
      <input type="search" value={search} onChange={handleChange} />
      {Object.keys(formData).length === 1 && (
        <span style={{ color: "red" }}>{formData.error}</span>
      )}
      <br />
      <input type="submit" value="search" onClick={handleClick} />
      <hr />
      {Object.keys(formData).length > 1 && (
        <>
          <p>UserName-{formData.name}</p>
          <p>Age-{formData.age}</p>
          <p>City-{formData.city}</p>
        </>
      )}
    </center>
  );
};

export default Display;
