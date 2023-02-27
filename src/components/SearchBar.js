import React from "react";

const SearchBar = () => {
  return (
    <div className="searchBarDiv">
      <div className="searchGroup">
        <img src="../assets/svg/search.svg" alt="" />
        <input
          type="text"
          name=""
          id=""
          className="SearchBar"
          placeholder="Recherche"
        />
      </div>
    </div>
  );
};

export default SearchBar;
