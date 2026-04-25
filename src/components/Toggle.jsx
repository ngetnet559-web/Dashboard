const Toggle = ({ value, onChange }) => {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`relative flex items-center w-12 sm:w-14 h-6 sm:h-7 rounded-full p-1 transition duration-300 ${
        value ? "bg-blue-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`bg-white w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-md transform transition-transform duration-300 ${
          value ? "translate-x-6 sm:translate-x-7" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default Toggle;