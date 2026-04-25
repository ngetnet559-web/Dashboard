import { Link } from "react-router-dom";
import dashboardData from "../data/DashboardData";
import CardData from "../components/CardData";
import Navbar from "../components/Navbar";
import SalesChart from "../components/SalesChart";
import chartData from "../data/chartData";
import RecentActivity from "../components/RecentActivity";
import analythicsData from "../data/analythicsData";
import ProgressBar from "../components/ProgressBar";
import Trafficard from "../components/Trafficard";
import cardData2 from "../data/cardData2";
import progressData from "../data/progressData";
import Copyright from "../components/Copyright";

const Analytics = () => {
  return (
    <div className="bg-linear-to-br from-[#e6f4ec] via-[#deeeef] to-[#f3e9e9] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(25,120,102,0.35),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(218,169,87,0.18),transparent_30%),linear-gradient(135deg,rgba(16,41,31,0.95),rgba(26,40,28,0.9),rgba(40,58,43,0.92))]">
      <div className="flex justify-between items-center p-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Analytics</h1>
          <p className="text-sm font-semibold text-gray-500 dark:text-white mt-1">
            <Link to="/" className="hover:underline dark:text-blue-200 text-blue-600">
              Dashboard
            </Link>
            <span className="mx-1">/</span> Analytics
          </p>
        </div>

        <Navbar />
      </div>

      <div className="flex flex-wrap justify-around gap-2  m-3">
        {dashboardData.Analytics.map((item, index) => (
          <CardData key={index} {...item} />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-8 px-8 py-10">
        <SalesChart dataMap={chartData.analyze} title="Traffic Overview" />
        <RecentActivity data={analythicsData.aman} type="number" />
      </div>

      

      <div className="flex flex-col lg:flex-row gap-8 mt-10 ml-8 mr-8">

        <div className="bg-blue-50 rounded-xl shadow-2xl w-full lg:w-1/2 transition-all duration-600 transform group-hover:scale-90 hover:scale-105 dark:bg-gray-300 hover:-translate-y-2 hover:z-10">
          <div className="p-4">
            <div className="mb-5">
              {progressData.home.map((item, index) => (
                <ProgressBar key={index} data={progressData.analytics2} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 transition-all duration-600 transform group-hover:scale-90 hover:scale-105 hover:-translate-y-2 hover:z-10 rounded-xl shadow-lg w-full lg:w-1/2">
          {cardData2.analytics.map((item, index) => (
            <Trafficard key={index} data1={cardData2.analytics} />
          ))}
        </div>
        <div className="bg-blue-50 dark:bg-gray-300 rounded-xl shadow-lg w-full lg:w-1/2 transition-all duration-600 transform group-hover:scale-90 hover:scale-110 hover:-translate-y-2 hover:z-10">
          <div className="p-4">
            <div className="mb-5">
              {progressData.home.map((item, index) => (
                <ProgressBar key={index} data={progressData.analytics} />
              ))}
            </div>
          </div>
        </div>
        
      </div>

      <div className="px-8 pb-6 text-center mt-4 text-md">
        <Copyright />
      </div>
    </div>
  );
};

export default Analytics;
