const RecentActivity = ({ data, type = "initials" }) => {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-yellow-500",
  ];

  return (
    <div className="w-full lg:w-[50%] min-h-[350px] sm:min-h-[400px] rounded-3xl bg-white/70 dark:bg-[rgba(74,207,189,0.39)]backdrop-blur-md shadow-lg p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-semibold">Recent Activity</h3>
        <p className="text-sm text-gray-500">Latest transactions</p>
      </div>

      <div className="overflow-y-auto border border-gray-300 rounded-2xl p-1 bg-gray-100 dark:bg-gray-300 no-scrollbar h-[240px] sm:h-[250px] pr-1">
        {data.map((item, index) => {
          const avatarColor = colors[index % colors.length];

          return (
            <div
              key={index}
              className="flex items-start sm:items-center gap-3 sm:gap-4 py-4 border-b"
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-semibold text-white shrink-0 ${avatarColor}`}
              >
                {type === "number"
                  ? index + 1
                  : item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
              </div>

              <div className="min-w-0">
                <p className="text-sm sm:text-base break-words">
                  <span className="font-semibold">{item.name}</span>{" "}
                  {item.action}
                </p>
                <span className="text-xs sm:text-sm text-gray-500">
                  {item.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
