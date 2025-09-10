import React from "react";
import { useNavigate } from "react-router";
import { Plus, Bell, FileText } from "lucide-react"; // Imported FileText

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/30 border-b border-gray-200 px-4 sm:px-6 py-3 flex justify-between items-center transition-all duration-300">
      {/* Left section: Logo */}
      <div className="flex items-center gap-2" onClick={() => navigate("/")}>
        <FileText size={24} className="text-indigo-600" /> {/* Added icon */}
        <span className="text-2xl font-bold text-gray-800 tracking-tight">
          NoteDash
        </span>
      </div>

      {/* Right section: Buttons */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Create Note Button */}
        <button
          className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 ease-in-out bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-lg"
          onClick={() => navigate("/create")}
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Create Note</span>
        </button>

        {/* Notifications Button */}
        <button className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 text-gray-700 transition-all duration-300 ease-in-out bg-gray-100 rounded-full hover:bg-gray-200 active:scale-95">
          <Bell size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
