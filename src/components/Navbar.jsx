import { Search, Video, Bell, User } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="YouTube" className="h-6" />
        <span className="font-bold text-xl text-red-600">YouTube</span>
      </div>

      {/* Search Bar */}
      <div className="flex flex-1 max-w-xl mx-4">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 border border-gray-300 rounded-l-full px-4 py-1 focus:outline-none"
        />
        <button className="bg-gray-100 px-4 rounded-r-full border border-l-0 border-gray-300">
          <Search size={20} />
        </button>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4 text-gray-700">
        <Video className="cursor-pointer" />
        <Bell className="cursor-pointer" />
        <User className="cursor-pointer" />
      </div>
    </nav>
  );
}

export default Navbar;
