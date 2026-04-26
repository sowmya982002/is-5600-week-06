import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      handleSearch("");
    }
  };

  const submitSearch = () => {
    handleSearch(searchTerm);
  };

  return (
    <div className="flex justify-center pa3">
      <div className="flex w-50">
        <input
          className="pa3 ba b--light-gray w-90"
          type="text"
          value={searchTerm}
          onChange={handleChange}
        />

        <button
          className="w-10 ba b--dark-gray bg-dark-gray white pointer"
          onClick={submitSearch}
        >
          🔍
        </button>
      </div>
    </div>
  );
};

export default Search;