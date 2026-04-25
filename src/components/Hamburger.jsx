import { useState, useEffect } from "react";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 🔥 Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>

      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden text-2xl sm:text-3xl font-bold p-2 sm:p-3"
      >
        ☰
      </button>


      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />


      <div
        className={`
          fixed top-0 left-0 h-full w-64 sm:w-72 z-50 sm:dark:bg-black  bg-white shadow-lg p-5 sm:p-6
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:hidden
        `}
      >


        <button
          onClick={() => setIsOpen(false)}
          className="mb-6 text-xl sm:text-2xl font-bold"
        >
          ✕
        </button>

        {/* Menu */}
        <ul className="flex flex-col gap-4 sm:gap-5 text-base sm:text-lg font-medium">
          <li className="hover:text-blue-500 cursor-pointer">Dashboard</li>
          <li className="hover:text-blue-500 cursor-pointer">Analytics</li>
          <li className="hover:text-blue-500 cursor-pointer">Users</li>
          <li className="hover:text-blue-500 cursor-pointer">Settings</li>
          <li className="hover:text-red-500 cursor-pointer">Logout</li>
        </ul>
      </div>
    </>
  );
};

export default Hamburger;