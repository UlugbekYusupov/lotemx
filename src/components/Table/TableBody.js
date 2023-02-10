import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/context";

function TableBody() {
  const { users, filteredData } = useContext(UserContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (filteredData.length > 0) {
      setData(filteredData);
    } else {
      setData(users);
    }
  }, [filteredData, users]);

  return (
    <tbody className="w-full">
      {data.map((user) => (
        <tr className="py-6 h-12 " key={user.id}>
          <td className="border-y-2 border-l-2 border-solid border-gray-200 rounded-l-md pl-2">
            <div className="pl-1 flex flex-row gap-3 justify-start">
              <img className=" bg-black rounded-full h-6 w-6" />
              {user.username}
            </div>
          </td>
          <td className="border-y-2 border-solid border-gray-200">
            <input className="h-4 w-4" type={"checkbox"} />
          </td>
          <td className="border-y-2 border-solid border-gray-200">
            <input className="h-4 w-4" type={"checkbox"} />
          </td>
          <td className="border-y-2 border-solid border-gray-200">
            <input className="h-4 w-4" type={"checkbox"} />
          </td>
          <td className="border-y-2 border-solid border-gray-200">
            <input className="h-4 w-4" type={"checkbox"} />
          </td>
          <td className=" border-r-2 border-y-2 border-solid border-gray-200 rounded-r-md ">
            <p>•••</p>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
