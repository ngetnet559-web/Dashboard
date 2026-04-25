import { NavLink } from "react-router-dom";
import assets from "../assets/assets";

const Sidebar = ({ setIsOpen }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 sm:gap-4 w-full px-3 sm:px-4 py-2.5 rounded-xl transition ${
      isActive
        ? "bg-blue-400 font-bold"
        : "hover:bg-[rgba(112,191,231,0.9)]"
    }`;

  return (
    <div className="h-screen w-full max-w-72 bg-gradient-to-br from-[#c5f9fa] via-[#f0e6f5] to-[#70cce1] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(25,120,102,0.35),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(218,169,87,0.18),transparent_30%),linear-gradient(135deg,rgba(16,41,31,0.95),rgba(26,40,28,0.9),rgba(40,58,43,0.92))] dark:text-white p-4 sm:p-5 overflow-y-auto">
      <div className="flex items-center justify-between mt-2 sm:mt-4 mb-4">
        <div className="flex gap-3 sm:gap-4 items-center min-w-0">
          <div className="border bg-gradient-to-r from-primary to-secondary px-2 sm:px-3 pb-1 rounded-lg text-white flex justify-center items-center text-2xl sm:text-4xl font-bold shrink-0">
            G
          </div>
          <span className="text-lg sm:text-xl font-semibold truncate">
            GlassDash
          </span>
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden text-xl sm:text-2xl font-bold shrink-0"
        >
          ✕
        </button>
      </div>

      <hr className="mb-4 mt-4 sm:mt-6 text-[#dccdcdb5]" />

      <div className="mb-4">
        <p className="mb-4 font-semibold text-sm sm:text-base">Main Menu</p>

        <ul className="flex flex-col items-start mb-6 justify-center gap-2">
          <li className="w-full">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={linkClass}
            >
              <div className="flex gap-1 shrink-0">
                <div className="flex flex-col gap-1">
                  <div className="h-2 w-2 rounded-full dark:bg-gray-200 bg-black"></div>
                  <div className="h-2 w-2 rounded-full dark:bg-gray-200 bg-black"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="h-2 w-2 rounded-full dark:bg-gray-200 bg-black"></div>
                  <div className="h-2 w-2 rounded-full dark:bg-gray-200 bg-black"></div>
                </div>
              </div>
              <h1 className="text-base sm:text-lg lg:text-xl">Dashboard</h1>
            </NavLink>
          </li>

          <li className="w-full">
            <NavLink
              to="/analytics"
              onClick={() => setIsOpen(false)}
              className={linkClass}
            >
              <img
                className="w-5 h-5 dark:invert sm:w-6 sm:h-6 shrink-0"
                src={assets.Layer}
                alt="Analytics"
              />
              <h1 className="text-base  sm:text-lg lg:text-xl">Analytics</h1>
            </NavLink>
          </li>

          <li className="w-full">
            <NavLink
              to="/users"
              onClick={() => setIsOpen(false)}
              className={linkClass}
            >
              <img
                className="w-5 h-5 dark:invert sm:w-6 sm:h-6 shrink-0"
                src={assets.us}
                alt="Users"
              />
              <h1 className="text-base sm:text-lg lg:text-xl">Users</h1>
            </NavLink>
          </li>

          <li className="w-full">
            <NavLink
              to="/settings"
              onClick={() => setIsOpen(false)}
              className={linkClass}
            >
              <img
                className="w-5 h-5 dark:invert sm:w-6 sm:h-6 shrink-0"
                src={assets.Setting}
                alt="Settings"
              />
              <h1 className="text-base sm:text-lg lg:text-xl">Settings</h1>
            </NavLink>
          </li>
        </ul>

        <p className="mb-4 font-semibold text-sm sm:text-base">Account</p>

        <div>
          <NavLink
            to="/logout"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 sm:gap-4 w-full px-3 sm:px-4 py-2.5 rounded-xl hover:bg-[rgba(112,191,231,0.9)] transition"
          >
            <img
              className="w-5 h-5 dark:invert sm:w-6 sm:h-6 shrink-0"
              src={assets.Logout}
              alt="Logout"
            />
            <h1 className="text-base sm:text-lg">Logout</h1>
          </NavLink>
        </div>
      </div>

      <hr className="text-[#dccdcdb5]" />
    </div>
  );
};

export default Sidebar;