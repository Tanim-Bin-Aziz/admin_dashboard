import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  FlaskConical,
  ShoppingCart,
  Wrench,
  DollarSign,
} from "lucide-react";
const menu = [
  { name: "Dashboard", to: "/", icon: <Home /> },
  { name: "Doctor", to: "/doctor", icon: <User /> },
  { name: "Nurse", to: "/nurse", icon: <User /> },
  { name: "Lab", to: "/lab", icon: <FlaskConical /> },
  { name: "Pharma Meds", to: "/pharma", icon: <ShoppingCart /> },
  { name: "Maintenance", to: "/maintenance", icon: <Wrench /> },
  { name: "Earning/Expense", to: "/earnings", icon: <DollarSign /> },
];
const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4 hidden md:block">
      <h2 className="text-2xl font-bold mb-6">Next Den</h2>
      {menu.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex items-center gap-3 p-2 rounded mb-2 ${
              isActive ? "bg-gray-700" : "hover:bg-gray-700"
            }`
          }
        >
          {item.icon}
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
