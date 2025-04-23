import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-3 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube"
          className="h-6 md:h-8"
        />
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-4 max-w-xl">
        <div className="flex border border-gray-300 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-1 outline-none"
          />
          <button className="bg-gray-100 px-4">🔍</button>
        </div>
      </div>

      {/* User Icons */}
      <div className="flex items-center gap-4 text-xl">
        <span>📹</span>
        <span>🔔</span>
        <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
          Y
        </span>
      </div>
    </header>
  );
};

export default Header;