import { useContext, useEffect, useLayoutEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import SearchBar from "./components/SearchBar/SearchBar";
import UserTable from "./components/Table/UserTable";

function App() {
  return (
    <Layout>
      <h1 className="font-semibold text-4xl pt-4">Permissions</h1>
      <p className="text-gray-600 py-4">
        Create and customize rules for your interface
      </p>
      <SearchBar />
      <UserTable />
      <button className="p-4 rounded-lg bg-slate-400 w-40 h-14 my-4">
        Save
      </button>
    </Layout>
  );
}

export default App;

// import "./App.css";
// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [filteredUser, setFilteredUser] = useState([]);

//   useEffect(() => {
//     if (searchText.length) {
//       const filterUsers = users.filter((user) => {
//         return user.name.toLowerCase().includes(searchText.toLowerCase());
//       });

//       setFilteredUser(filterUsers);
//     } else {
//       setFilteredUser([]);
//     }
//   }, [searchText, users]);

//   return (
//     <div>
//       <h1>
//         Search Filter in react <span>( by weekendtutorial.com )</span>
//       </h1>
//       <input
//         className="search"
//         type="text"
//         placeholder="search user"
//         value={searchText}
//         onChange={(e) => setSearchText(e.target.value)}
//       />
//       <ul className="userList">
//         {filteredUser.length
//           ? filteredUser.map((user) => (
//               <li className="userListItem" key={user.id}>
//                 {user.name}
//               </li>
//             ))
//           : users.map((user) => (
//               <li className="userListItem" key={user.id}>
//                 {user.name}
//               </li>
//             ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
