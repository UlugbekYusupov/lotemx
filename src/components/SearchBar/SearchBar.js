import React, { useContext } from "react";
import UserContext from "../../context/context";

const Search = () => {
  const { filteredData, users, handleChange, searchTerm } =
    useContext(UserContext);
  return (
    <div className="flex py-4 flex-row justify-between gap-40">
      <h1 className="flex-2 text-3xl">
        Users
        <sup className="text-gray-400">
          {filteredData.length > 0 ? filteredData.length : users.length}
        </sup>
      </h1>
      <div className="relative flex-1 border-2 rounded-3xl bg-slate-200 border-solid border-gray">
        <div className="absolute p-3 inset-y-0 left-0 flex items-center">
          <svg
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          className="form-input px-9 py-3 block w-full bg-slate-100  outline-0 sm:text-md rounded-3xl sm:leading-5 "
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;
