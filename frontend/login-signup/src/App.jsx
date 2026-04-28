import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "../signUp";
import Dashboard from "./components/dashboard";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false}/>
  </BrowserRouter>
  );
}

export default App;