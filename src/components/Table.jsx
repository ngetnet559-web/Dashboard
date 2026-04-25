import React from "react";

const Table = ({ data }) => {
  const statusStyles = {
    Completed: "bg-green-100 text-green-600 border-green-200",
    Pending: "bg-yellow-100 text-yellow-600 border-yellow-200",
    Processing: "bg-blue-100 text-blue-600 border-blue-200",
  };

  const dotStyles = {
    Completed: "bg-green-500",
    Pending: "bg-yellow-500",
    Processing: "bg-blue-500",
  };

  return (
    <div className="w-full px-3 sm:px-4 lg:px-6">
      <div className="bg-[rgba(255,255,255,0.98)] dark:bg-transparent rounded-xl shadow-lg border p-4 sm:p-5 lg:p-6">
        <div className="w-full overflow-x-auto">
          <table className="min-w-[600px] w-full text-left">
            {/* Header */}
            <thead className="text-gray-500 text-xs sm:text-sm">
              <tr className="border-b">
                {data.heading.map((item, index) => (
                  <th
                    key={index}
                    className="py-3 sm:py-4 px-2 sm:px-3 whitespace-nowrap"
                  >
                    {item.name}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {data.rows.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 sm:py-4 px-2 sm:px-3">
                    <div className="flex flex-col min-w-[120px]">
                      <span className="font-medium text-sm sm:text-base">
                        {item.name}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 break-words">
                        {item.email}
                      </span>
                    </div>
                  </td>

                  {/* Product */}
                  <td className="py-3 sm:py-4 px-2 sm:px-3 text-sm sm:text-base whitespace-nowrap">
                    {item.Product}
                  </td>

                  {/* Date */}
                  <td className="py-3 sm:py-4 px-2 sm:px-3 text-sm sm:text-base whitespace-nowrap">
                    {item.Date}
                  </td>

                  {/* Status */}
                  <td className="py-3 sm:py-4 px-2 sm:px-3">
                    <span
                      className={`flex items-center gap-2 px-2 sm:px-3 py-1 rounded-xl border text-xs sm:text-sm w-fit ${statusStyles[item.Status]}`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${dotStyles[item.Status]}`}
                      ></span>
                      {item.Status}
                    </span>
                  </td>

                  {/* Amount */}
                  <td className="py-3 sm:py-4 px-2 sm:px-3 font-medium text-sm sm:text-base whitespace-nowrap">
                    {item.Amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
