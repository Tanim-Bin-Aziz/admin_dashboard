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
  { name: "Dashboard", to: "/", icon: <Home size={17} /> },
  { name: "Doctor", to: "/doctor", icon: <User size={17} /> },
  { name: "Nurse", to: "/nurse", icon: <User size={17} /> },
  { name: "Lab", to: "/lab", icon: <FlaskConical size={17} /> },
  { name: "Pharma Meds", to: "/pharma", icon: <ShoppingCart size={17} /> },
  { name: "Maintenance", to: "/maintenance", icon: <Wrench size={17} /> },
  { name: "Earning/Expense", to: "/earnings", icon: <DollarSign size={17} /> },
];
const Sidebar = () => {
  return (
    <div className="w-60 bg-gray-800 text-white text-[12px] min-h-screen p-4 hidden md:block">
      <h2 className="text-2xl font-bold mb-6">Next Dent</h2>
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
