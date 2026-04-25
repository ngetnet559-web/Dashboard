import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CardData from '../components/CardData'
import dashboardData from '../data/DashboardData'
import Copyright from '../components/Copyright'
import UserTable from '../components/UserTable'

const Users = () => {
  return (
    <div className='bg-linear-to-br from-[#e6f4ec] via-[#d4f0f1] to-[#f3e9e9] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(25,120,102,0.35),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(218,169,87,0.18),transparent_30%),linear-gradient(135deg,rgba(16,41,31,0.95),rgba(26,40,28,0.9),rgba(40,58,43,0.92))]'>
        <div className="flex justify-between items-center p-8">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-800">Users</h1>
          <p className="text-sm font-semibold text-gray-500 mt-1">
            <Link to="/" className="hover:underline text-blue-600">
              Dashboard
            </Link>
            <span className="mx-1">/</span> Users
          </p>
        </div>

        <Navbar />
      </div>

      <div className="flex flex-wrap justify-around gap-2 m-3">
        {dashboardData.users.map((item,index) => (
            <CardData key={index} {...item} />
        ))}
      </div>
      <div>
       <UserTable />
      </div>
      <div className="px-8 pb-6 text-center mt-4 text-md">
        <Copyright />
      </div>
    </div>
  )
}

export default Users