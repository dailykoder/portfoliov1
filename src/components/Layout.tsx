import { Outlet } from "@tanstack/react-router";
import Sidebar from "@/components/nav/Sidebar";
import { useState } from "react";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto pt-10 flex gap-4">
      {/* Sidebar Container */}
      <div
        className={`
        hidden md:flex md:flex-col
        ${isOpen ? "fixed inset-0 z-50 bg-white" : ""}
      `}
      >
        {/* Logo */}
        <img
          src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/7d4af942-2eb7-432a-ba45-3c87d527e99a_rwc_0x0x505x332x4096.png?h=6ae60d8c1ab1d4dba799240765f01f4c"
          className="w-[20rem] h-auto mb-10"
          alt="Logo"
        />
        {/* Sidebar Navigation */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 right-4 p-2 z-50 bg-white rounded-lg shadow-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          ></path>
        </svg>
      </button>

      {/* Main Content */}
      <div className="flex-grow w-full md:w-2/4 md:ml-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
