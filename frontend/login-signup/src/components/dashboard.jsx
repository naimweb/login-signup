import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl p-10">

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          👋 Welcome Back!
        </h1>

        <p className="text-gray-500 mb-8">
          You are successfully logged into your dashboard
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">

          <div className="bg-indigo-100 p-5 rounded-xl text-center">
            <h2 className="text-xl font-bold text-indigo-700">Users</h2>
            <p className="text-2xl mt-2">120+</p>
          </div>

          <div className="bg-green-100 p-5 rounded-xl text-center">
            <h2 className="text-xl font-bold text-green-700">Sales</h2>
            <p className="text-2xl mt-2">$5K</p>
          </div>

          <div className="bg-yellow-100 p-5 rounded-xl text-center">
            <h2 className="text-xl font-bold text-yellow-700">Visits</h2>
            <p className="text-2xl mt-2">1.2K</p>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">

          <button className="flex-1 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
            Profile
          </button>

          <button className="flex-1 bg-gray-800 text-white py-3 rounded-lg hover:bg-black transition">
            Settings
          </button>

          <button
            onClick={logout}
            className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;