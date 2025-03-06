import { useState } from "react";
import {Link} from "react-router-dom"
import {
  ChevronLeftCircle,
  LayoutDashboard,
  MapPin,
  Bookmark,
  BarChart2,
  Settings,
  LogOut,
  LucideGlobe,
} from "lucide-react";

const NavItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "Live Map", icon: MapPin, path: "/map" },
  { title: "Saved Locations", icon: Bookmark, path: "/saved" },
  { title: "Analytics", icon: BarChart2, path: "/analytics" },
  { title: "Settings", icon: Settings, path: "/settings" },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`relative h-screen bg-gray-900 text-white shadow-lg border-r border-gray-800 transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-24" : "w-60"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex flex-col h-full p-4">
        <div className="flex items-center justify-between md:justify-center mb-6">
          {!isCollapsed ?
            <h2 className="text-xl font-bold text-white tracking-wide">
              GeoTracker
            </h2>
            : <LucideGlobe className="animate-spin"/>
          }
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition absolute -right-4 top-6"
          >
            <ChevronLeftCircle
              className={`w-6 h-6 transition-transform duration-1000 ${
                isCollapsed ? "rotate-180 duration-500 transition-all" : ""
              }`}
            />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4 flex-1">
          {NavItems.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition group relative"
            >
              <item.icon className="w-6 h-6 text-gray-300" />
              {!isCollapsed && (
                <span className="text-sm font-medium text-gray-300">
                  {item.title}
                </span>
              )}
              {isCollapsed && (
                <div className="absolute left-full ml-3 px-3 py-1 bg-gray-800 text-white text-md rounded-md shadow-md hidden opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.title}
                </div>
              )}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="mt-auto">
          <button className="flex items-center gap-3 p-3 w-full text-left bg-red-600 rounded-lg hover:bg-red-700 transition">
            <LogOut className="w-6 h-6" />
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
