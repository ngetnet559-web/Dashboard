import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Organic Search", value: 50 },
  { name: "Social Media", value: 30 },
  { name: "Direct Traffic", value: 20 },
];

const COLORS = ["#34D399", "#E6B980", "#F87171"];

const Trafficard = ({ data1 }) => {
  return (
    <div className="w-full h-full rounded-2xl p-2 dark:bg-gray-300">
      <div>
        {data1.map((item, index) => (
          <div key={index} className="p-4 sm:p-5 lg:p-6">
            <h1 className="font-semibold text-base sm:text-lg">{item.title}</h1>
            <p className="font-light mb-4 text-sm sm:text-base text-gray-600">
              {item.description}
            </p>

            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 lg:gap-10">
              <div className="relative w-full max-w-[220px] sm:max-w-[240px] mx-auto md:mx-0">
                <div className="w-full h-[220px] sm:h-[240px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={45}
                        outerRadius={75}
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {data.map((entry, i) => (
                          <Cell key={i} fill={COLORS[i]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <h1 className="text-xl sm:text-2xl font-bold">{item.view}</h1>
                  <p className="text-xs sm:text-sm text-gray-500">{item.task}</p>
                </div>
              </div>

              <div className="space-y-3 w-full md:w-auto">
                <div className="flex items-center gap-2 text-sm sm:text-base wrap-break-word">
                  <span className="w-4 h-3 sm:w-5 sm:h-3 rounded bg-green-400 shrink-0"></span>
                  <span>{item.use1}</span>
                </div>

                <div className="flex items-center gap-2 text-sm sm:text-base wrap-break-word">
                  <span className="w-4 h-3 sm:w-5 sm:h-3 rounded bg-yellow-300 shrink-0"></span>
                  <span>{item.use2}</span>
                </div>

                <div className="flex items-center gap-2 text-sm sm:text-base wrap-break-word">
                  <span className="w-4 h-3 sm:w-5 sm:h-3 rounded bg-red-400 shrink-0"></span>
                  <span>{item.use3}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trafficard;