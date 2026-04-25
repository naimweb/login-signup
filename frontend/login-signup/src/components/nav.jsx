import { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { AiFillAndroid,AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
    const [open,setOpen] = useState(false)


    // logout option
     const logout = () => {
   localStorage.removeItem("token");
   navigate("/login");
 }; 

  return (
    <div className="flex h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">

      {/* Sidebar */}
      <div className="w-64 bg-white/10 backdrop-blur-md border-r border-white/20 p-5">
        <div className="flex items-center gap-2 mb-8">
          <AiFillAndroid className="text-3xl text-green-400" />
          <h1 className="text-xl font-semibold">DroidApp</h1>
        </div>

        <ul className="space-y-4">
          <li className="flex items-center gap-3 hover:bg-white/10 p-2 rounded-lg cursor-pointer">
            <AiOutlineHome /> Dashboard
          </li>
          <li className="flex items-center gap-3 hover:bg-white/10 p-2 rounded-lg cursor-pointer">
            <AiOutlineUser /> Users
          </li>
                   <li>
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center justify-between hover:bg-white/10 p-2 rounded-lg cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <AiOutlineSetting /> Settings
              </div>
              <span>{open ? "▲" : "▼"}</span>
            </div>

            {/* Dropdown */}
            {open && (
              <div className="ml-6 mt-2 bg-white/10 rounded-lg p-2 backdrop-blur-md border border-white/20">
                <div className="flex items-center gap-2 hover:bg-red-500 p-2 rounded-md cursor-pointer transition duration-300" onClick={logout}>
                  <AiOutlineLogout />
                  Logout
                </div>
              </div>
            )}
          </li>

        </ul>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">

        {/* Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <input
            type="text"
            placeholder="Search..."
            className="bg-white/10 px-4 py-2 rounded-lg outline-none"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-500 p-5 rounded-xl shadow-lg">
            <h3>Total Users</h3>
            <p className="text-2xl font-bold mt-2">1,245</p>
          </div>

          <div className="bg-green-500 p-5 rounded-xl shadow-lg">
            <h3>Revenue</h3>
            <p className="text-2xl font-bold mt-2">$8,540</p>
          </div>

          <div className="bg-purple-500 p-5 rounded-xl shadow-lg">
            <h3>Orders</h3>
            <p className="text-2xl font-bold mt-2">320</p>
          </div>
        </div>

    
        <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-lg">
          <h3 className="mb-4 text-lg font-semibold">Recent Users</h3>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/20">
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-white/10">
                <td className="p-2">Md naim</td>
                <td className="p-2">naim@gmail.com</td>
                <td className="p-2 text-green-400">Active</td>
              </tr>

              <tr className="border-b border-white/10">
                <td className="p-2">abdul korim</td>
                <td className="p-2">abdulkorim@gmail.com</td>
                <td className="p-2 text-yellow-400">Pending</td>
              </tr>

              <tr>
                <td className="p-2">md shakib</td>
                <td className="p-2">shakib@gmail.com</td>
                <td className="p-2 text-red-400">Blocked</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
