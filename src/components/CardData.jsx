import { motion } from "framer-motion";
import AnimatedNumber from "./AnimatedNumber";

const cardAnimation = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const CardData = ({
  title,
  value,
  symbol,
  icon,
  percent,
  positive,
  iconBg,
  percentIcon,
}) => {
  return (
    <div className="w-full sm:w-[48%] lg:w-72">
      <motion.div
        {...cardAnimation}
        whileHover={{ scale: 1.05 }}
        className="w-full min-h-40 rounded-3xl dark:text-white bg-white/70 dark:bg-[rgba(74,207,189,0.39)] backdrop-blur-md shadow-lg p-4 sm:p-5 lg:p-6 flex flex-col justify-between"
      >
        <div className="flex justify-between items-start  gap-3">
          <h3 className="text-xs sm:text-sm dark:text-white text-gray-500 uppercase wrap-break-word">
            {title}
          </h3>

          <img
            src={icon}
            alt={title}
            className={`w-8 h-8 dark:invert-100 sm:w-10 sm:h-10 opacity-60 shrink-0 ${iconBg}`}
          />
        </div>

        <div className="mt-4">
          <div className="text-2xl sm:text-3xl font-bold wrap-break-word">
            <AnimatedNumber value={value} />
            {symbol}
          </div>

          <span
            className={`text-xs px-3 py-1 rounded-full font-medium mt-3 inline-flex items-center ${
              positive
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-500"
            }`}
          >
            <div className="flex items-center gap-2">
              <img
                className="opacity-45 size-4 sm:size-5 shrink-0"
                src={percentIcon}
                alt=""
              />
              <span>{percent}</span>
            </div>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default CardData;