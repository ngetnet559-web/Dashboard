import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const COLORS = [
  "#f87171",
  "#fbbf24",
  "#34d399",
  "#60a5fa",
  "#a78bfa",
  "#f472b6",
  "#facc15",
];

const SalesChart = ({ dataMap, filter = "monthly", title, subtitle }) => {
  const tabs = Object.keys(dataMap);
  const [activeTab, setActiveTab] = useState(
    tabs.includes(filter) ? filter : tabs[0],
  );

  const data = dataMap[activeTab];

  return (
    <div className="w-full min-h-[360px] sm:min-h-[400px] bg-white dark:bg-gray-300 rounded-3xl shadow-lg p-4 sm:p-5 lg:p-6">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-4">
        <div className="min-w-0">
          <h2 className="text-base sm:text-lg font-bold wrap-break-word">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 wrap-break-word">
            {subtitle || `Overview of ${activeTab} revenue`}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 cursor-pointer sm:px-4 py-1 rounded-lg text-xs sm:text-sm font-medium capitalize transition-all ${
                activeTab === tab
                  ? "bg-emerald-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-[260px] sm:h-[300px] lg:h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 10, left: -15, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} interval={0} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar
              dataKey="revenue"
              radius={[6, 6, 0, 0]}
              animationDuration={1500}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
