// Organized imports
import { useState } from "react";
import Navbar from "../components/Navbar";
import CardData from "../components/CardData";
import Copyright from "../components/Copyright";
import SalesChart from "../components/SalesChart";
import RecentActivity from "../components/RecentActivity";
import Table from "../components/Table";
import ProgressBar from "../components/ProgressBar";
import Trafficard from "../components/Trafficard";

import dashboardData from "../data/DashboardData";
import chartData from "../data/chartData";
import analythicsData from "../data/analythicsData";
import cardData2 from "../data/cardData2";
import progressData from "../data/progressData";
import tableData from "../data/tableData";
import assets from "../assets/assets";

const Home = () => {
  const [activeTab] = useState("monthly");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c5f9fa] via-[#f0e6f5] to-[#70cce1] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(25,120,102,0.35),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(218,169,87,0.18),transparent_30%),linear-gradient(135deg,rgba(16,41,31,0.95),rgba(26,40,28,0.9),rgba(40,58,43,0.92))]">
      <div className="flex justify-between items-center p-8">
        <h1 className="text-3xl font-semibold dark:text-white">
          Dashboard Overview
        </h1>
        <Navbar />
      </div>

      <div className="flex flex-wrap justify-around gap-2 m-3">
        {dashboardData.dashboard.map((item, index) => (
          <CardData key={index} {...item} />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8 px-8 py-10">
        <SalesChart
          dataMap={chartData.home}
          filter={activeTab}
          title="Revenue Analytics"
          subtitle={`Overview of ${activeTab} revenue`}
        />
        <RecentActivity data={analythicsData.nati} />
      </div>

      <div className="bg-[rgba(255,255,255,0.82)] dark:bg-gray-300 ml-9 mr-9 rounded-xl pt-4 pb-4">
        <div className="flex justify-between items-center px-4 mb-4">
          <div>
            <h2>Recent Transactions</h2>
            <p className="font-thin">Latest orders and payments</p>
          </div>
          <div className="flex gap-3">
            <button className="border cursor-pointer bg-white text-sm px-5 py-1 rounded-xl hover:border-[rgb(16,169,230)] font-thin">
              View All
            </button>
            <button className="border cursor-pointer bg-white text-sm px-5 py-1 rounded-xl hover:border-[rgb(16,169,230)] font-thin">
              Export
            </button>
          </div>
        </div>
        <Table data={tableData.orders} />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-10 ml-8 mr-8">
        <div className="bg-blue-100 dark:bg-gray-300 rounded-xl w-full lg:w-1/2 transform-gpu transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1">
          <div className="flex justify-between items-center m-4">
            <h1 className="font-bold">March 2026</h1>
            <div className="flex gap-3">
              <button className="border border-amber-300 p-2 rounded-md flex items-center justify-center hover:bg-amber-100">
                <img className="w-4 h-4" src={assets.left} alt="previous" />
              </button>
              <button className="border border-amber-300 p-2 rounded-md flex items-center justify-center hover:bg-amber-100">
                <img className="w-4 h-4" src={assets.right} alt="next" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center p-4 mb-4">
            <span>SUN</span>
            <span>MON</span>
            <span>TUE</span>
            <span>WED</span>
            <span>THU</span>
            <span>FRI</span>
            <span>SAT</span>
            <span>29</span>
            <span>30</span>
            <span>31</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
            <span>15</span>
            <span>16</span>
            <span>17</span>
            <span>18</span>
            <span>19</span>
            <span>20</span>
            <span>21</span>
            <span>22</span>
            <span>23</span>
            <span>24</span>
            <span>25</span>
            <span>26</span>
            <span>27</span>
            <span>28</span>
            <span>29</span>
            <span>30</span>
            <span>31</span>
            <span>1</span>
          </div>
        </div>

        <div className="bg-blue-100 dark:bg-gray-300 rounded-xl w-full lg:w-1/2 transform-gpu transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1">
          {cardData2.home.map((item, index) => (
            <Trafficard key={index} data1={cardData2.home} />
          ))}
        </div>

        <div className="bg-blue-100 dark:bg-gray-300 rounded-xl w-full lg:w-1/2 transform-gpu transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1">
          <div className="p-4">
            <div className="mb-5">
              {progressData.home.map((item, index) => (
                <ProgressBar key={index} data={progressData.home} />
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

export default Home;
