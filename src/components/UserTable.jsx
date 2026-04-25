const users = [
  {
    initials: "JD",
    name: "John Doe",
    email: "john@example.com",
    role: "Administrator",
    status: "Active",
    joined: "Jan 15, 2024",
    lastActive: "2 mins ago",
    color: "from-emerald-400 to-teal-500",
  },
  {
    initials: "AS",
    name: "Anna Smith",
    email: "anna@example.com",
    role: "Editor",
    status: "Active",
    joined: "Feb 22, 2024",
    lastActive: "15 mins ago",
    color: "from-orange-400 to-amber-600",
  },
  {
    initials: "MJ",
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "User",
    status: "Away",
    joined: "Mar 10, 2024",
    lastActive: "2 hours ago",
    color: "from-green-400 to-emerald-500",
  },
  {
    initials: "EW",
    name: "Emily White",
    email: "emily@example.com",
    role: "Moderator",
    status: "Active",
    joined: "Apr 5, 2024",
    lastActive: "30 mins ago",
    color: "from-rose-300 to-orange-400",
  },
  {
    initials: "RB",
    name: "Robert Brown",
    email: "robert@example.com",
    role: "User",
    status: "Offline",
    joined: "May 18, 2024",
    lastActive: "3 days ago",
    color: "from-emerald-300 to-yellow-200",
  },
  {
    initials: "SL",
    name: "Sarah Lee",
    email: "sarah@example.com",
    role: "Editor",
    status: "Active",
    joined: "Jun 8, 2024",
    lastActive: "5 mins ago",
    color: "from-yellow-400 to-amber-500",
  },
  {
    initials: "DK",
    name: "David Kim",
    email: "david@example.com",
    role: "User",
    status: "Active",
    joined: "Jul 22, 2024",
    lastActive: "1 hour ago",
    color: "from-cyan-400 to-teal-500",
    highlighted: true,
  },
  {
    initials: "LM",
    name: "Lisa Martinez",
    email: "lisa@example.com",
    role: "Moderator",
    status: "Away",
    joined: "Aug 14, 2024",
    lastActive: "4 hours ago",
    color: "from-red-500 to-orange-400",
  },
];

const statusStyles = {
  Active: "bg-emerald-500/15 text-emerald-400",
  Away: "bg-yellow-500/15 text-yellow-400",
  Offline: "bg-sky-500/15 text-sky-400",
};

const dotStyles = {
  Active: "bg-emerald-400",
  Away: "bg-yellow-400",
  Offline: "bg-sky-400",
};

const UserTable = () => {
  return (
    <div className="min-h-screen   p-3 sm:p-6">
      <div className="w-full rounded-[28px] border  dark:border-amber-300 border-white/10  backdrop-blur-xl shadow-2xl p-4 sm:p-6 lg:p-8">
        <div className="flex justify-between items-center px-4 mb-4">
          <div className="dark:text-white">
            <h1>All Users</h1>
            <p className="font-thin">Manage your user base</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="border-gray-400 border bg-gray-200 dark:bg-green-100 text-sm px-5 py-1 rounded-xl hover:border-[rgb(16,169,230)] font-thin">
              + Add User
            </button>
            <button className="border dark:bg-green-100 border-gray-400 bg-gray-200 text-sm px-5 py-1 rounded-xl hover:border-[rgb(16,169,230)] font-thin">
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto dark:text-white">
          <table className="w-full min-w-[1050px] text-left">
            <thead className="text-gray-500 text-xs sm:text-sm">
              <tr className="border-b dark:text-white">
                <th className="py-3 sm:py-4 px-2 sm:px-3 whitespace-nowrap">
                  User
                </th>
                <th className="py-3 sm:py-4 px-2 sm:px-3 whitespace-nowrap">
                  Role
                </th>
                <th className="py-3 sm:py-4 px-2 sm:px-3 whitespace-nowrap">
                  Status
                </th>
                <th className="py-3 sm:py-4 px-2 sm:px-3 whitespace-nowrap">
                  Joined
                </th>
                <th className="py-3 sm:py-4 px-2 sm:px-3 whitespace-nowrap">
                  Last Active
                </th>
                <th className="py-3 sm:py-4 px-2 sm:px-3 whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={index} className={`hover:bg-[#c1e3e4d8] dark:hover:bg-[#6d6f6e]`}>
                  <td className="py-3 sm:py-4 px-2 sm:px-3">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl bg-linear-to-br ${user.color} flex items-center justify-center text-white font-bold shrink-0`}
                      >
                        {user.initials}
                      </div>

                      <div className="flex flex-col min-w-30">
                        <p className="font-medium text-sm sm:text-base">
                          {user.name}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 wrap-break-word">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="py-3 sm:py-4 px-2 sm:px-3 text-sm sm:text-base whitespace-nowrap">
                    {user.role}
                  </td>

                  <td className="py-6 px-4">
                    <span
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${statusStyles[user.status]}`}
                    >
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${dotStyles[user.status]}`}
                      ></span>
                      {user.status}
                    </span>
                  </td>

                  <td className="py-3 sm:py-4 px-2 sm:px-3 text-sm sm:text-base whitespace-nowrap">
                    {user.joined}
                  </td>

                  <td className="py-3 sm:py-4 px-2 sm:px-3 text-sm sm:text-base whitespace-nowrap">
                    {user.lastActive}
                  </td>

                  <td className="py-6 px-4">
                    <button
                      className={`px-5 py-2 rounded-xl border text-sm font-medium  `}
                    >
                      Edit
                    </button>
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

export default UserTable;
