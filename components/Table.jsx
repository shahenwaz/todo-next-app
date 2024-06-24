import React from "react";
import Todo from "./Todo";

const Table = () => {
  return (
    <div className="relative overflow-x-auto mt-16 w-[60%] mx-auto rounded">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-800 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <Todo />
          <Todo />
          <Todo />
        </tbody>
      </table>
    </div>
  );
};
export default Table;
