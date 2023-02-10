import React, { createContext, useState } from "react";

const UserContext = createContext();

// Users data, it can be replaced with the real data from API
function createUsers() {
  const data = [];
  for (let i = 1; i <= 30; i++) {
    data.push({
      id: i,
      username: "UserName" + i,
    });
  }
  return data;
}

export const UserProvider = ({ children }) => {
  const [users, setUser] = useState(createUsers());
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    let filteredData;
    if (e.target.value.length <= 1) {
      filteredData = users;
    } else {
      filteredData = users.filter((item) =>
        item.username.toLowerCase().includes(e.target.value.toLowerCase())
      );
    }
    setFilteredData(filteredData);
  };

  return (
    <UserContext.Provider
      value={{ users, filteredData, setUser, handleChange, searchTerm }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
