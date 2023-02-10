import React from "react";

function TableHead() {
  return (
    <thead className="bg-slate-100  h-12 py-20">
      <tr className=" text-gray-700 ">
        <th className="w-80 text-left pl-4 rounded-l-md">User Name</th>
        <th>View</th>
        <th>Execute</th>
        <th>Modify</th>
        <th>Delete</th>
        <th className="rounded-r-md"></th>
      </tr>
    </thead>
  );
}

export default TableHead;
