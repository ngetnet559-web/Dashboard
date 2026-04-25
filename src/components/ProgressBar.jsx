const ProgressBar = ({ data }) => {
  return (
    <div className="w-full ">
      {data.map((item, index) => (
        <div key={index} className="w-full p-2">
          <h1 className="font-semibold text-base sm:text-lg">{item.title}</h1>
          <p className="font-light mb-4 text-sm sm:text-base text-gray-600">
            {item.description}
          </p>

          <div className="space-y-4">
            {item.progress.map((p, i) => (
              <div key={i} className="w-full">
                <div className="flex justify-between items-center gap-3 w-full text-sm sm:text-base">
                  <span className="wrap-break-word">{p.name}</span>
                  <span className="shrink-0">{p.value}%</span>
                </div>

                <div className="w-full bg-gray-200 h-3 sm:h-4 rounded-2xl overflow-hidden mt-2">
                  <div
                    className="bg-blue-500 h-full rounded-2xl transition-all duration-700 ease-out"
                    style={{ width: `${p.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;