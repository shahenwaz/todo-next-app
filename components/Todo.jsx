import React from "react";

const Todo = () => {
  return (
    <tr className="text-gray-600 bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        1
      </th>
      <td className="px-6 py-4">Study</td>
      <td className="px-6 py-4">Learn Next JS</td>
      <td className="px-6 py-4">Pending</td>
      <td className="px-6 py-4 flex gap-1">
        <button className="py-2 px-4 bg-red-600 text-white rounded">
          Delete
        </button>
        <button className="py-2 px-4 bg-green-600 text-white rounded">
          Done
        </button>
      </td>
    </tr>
  );
};
export default Todo;
