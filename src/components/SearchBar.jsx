import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaSearch } from "react-icons/fa"; // Import icons
import SalaryFilter from "./SalaryFilter";

const SearchBar = () => {
  return (
    <div className="search-bar">
      {/* Search Input */}
      <div className="search-input">
        <FaSearch className="icon" />
        <input type="text" placeholder="Search By Job Title, Role" />
      </div>
      <div className="divider" />

      {/* Location Input */}
      <div className="search-input">
        <FaMapMarkerAlt className="icon" />
        <input type="text" placeholder="Preferred Location" />
      </div>
      <div className="divider" />

      {/* Job Type Dropdown */}
      <div className="search-input">
        <FaBriefcase className="icon" />
        <select>
          <option>Job type</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Freelance</option>
        </select>
      </div>
      <div className="divider" />

      {/* Salary Filter */}
      <div>
      <SalaryFilter /> 
      </div>
    </div>
  );
};

export default SearchBar;
