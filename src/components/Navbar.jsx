import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // for active route highlight if needed

  const sidebarItems = [
    { name: "Dashboard", path: "/" },
    { name: "Doctor", path: "/doctor" },
    { name: "Nurse", path: "/nurse" },
    { name: "Lab", path: "/lab" },
    { name: "Pharma Meds", path: "/pharma" },
    { name: "Maintenance", path: "/maintenance" },
    { name: "Earnings & Expenses", path: "/earnings" },
    { name: "Inventory", path: "/inventory" },
    // { name: "Patients", path: "/patients" },
    // { name: "Profile", path: "/profile" }, // 👤 profile option
  ];

  return (
    <div className=" bg-gray-800 shadow px-6 py-4 flex  lg:justify-end  items-center relative">
      <Link
        to="/dashboard"
        className="lg:hidden  md:hidden text-xl font-bold text-blue-600"
      >
        Next Dent
      </Link>

      {/* Desktop section */}
      <div className="hidden md:flex items-center gap-6">
        <Link
          to="/profile"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Profile
        </Link>
        <img
          src="/logo.png"
          alt="Logo"
          className="w-10 h-10 rounded-full border"
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden focus:outline-none"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50 md:hidden">
          <ul className="flex flex-col p-4 gap-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2 rounded ${
                    location.pathname === item.path
                      ? "bg-blue-100 text-blue-700 font-semibold"
                      : "text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
