import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Doctor from "./pages/Doctor.jsx";
import Login from "./pages/Login.jsx";
import Nurse from "./pages/Nurse.jsx";
import Lab from "./pages/Lab.jsx";
import Pharma from "./pages/Pharma.jsx";
import Maintenance from "./pages/Maintenance.jsx";
import Earnings from "./pages/Earnings.jsx";
// import { AuthProvider } from "./context/AuthContext";
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <main className="flex-1 p-4 bg-gray-100">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/doctor" element={<Doctor />} />
                <Route path="/nurse" element={<Nurse />} />
                <Route path="/lab" element={<Lab />} />
                <Route path="/pharma" element={<Pharma />} />
                <Route path="/maintenance" element={<Maintenance />} />
                <Route path="/earnings" element={<Earnings />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
