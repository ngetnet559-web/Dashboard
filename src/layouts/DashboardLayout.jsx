import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-full max-w-72 z-50
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <Sidebar setIsOpen={setIsOpen} />
      </div>

      {/* Main content */}
      <div className="flex-1 w-full lg:ml-72 min-h-screen overflow-x-hidden overflow-y-auto">
        {/* Mobile top bar */}
        <div className="fixed top-0 left-0 w-full z-30 flex items-center gap-4 p-4 bg-white dark:bg-[radial-gradient(circle_at_20%_20%,rgba(25,120,102,0.35),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(218,169,87,0.18),transparent_30%),linear-gradient(135deg,rgba(16,41,31,0.95),rgba(26,40,28,0.9),rgba(40,58,43,0.92))] dark:text-white shadow-sm lg:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-2xl font-bold"
          >
            ☰
          </button>
        </div>

        {/* Page content */}
        <div className="w-full pt-16 lg:pt-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;