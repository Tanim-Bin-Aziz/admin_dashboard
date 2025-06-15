import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Doctor", path: "/doctor" },
    { name: "Nurse", path: "/nurse" },
    { name: "Lab", path: "/lab" },
    { name: "Patients", path: "/patients" },
    { name: "Inventory", path: "/inventory" },
    { name: "Maintenance", path: "/maintenance" },
    { name: "Expense", path: "/expense" },
    { name: "Earning", path: "/earning" },
  ];

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold sm:text-white  md:text-gray-800 lg:text-gray-800"
        >
          Next Dent
        </Link>

        {/* Mobile menu button only visible on small screens */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown (only on small screens) */}
      {isOpen && (
        <ul className="md:hidden bg-white justify-items-center-safe ml-12 rounded-2xl mb-5 w-3/4 px-4 pb-4">
          {routes.map((route) => (
            <li key={route.name} className="py-2 border-dark">
              <Link
                to={route.path}
                onClick={() => setIsOpen(false)}
                className="block w-full"
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
