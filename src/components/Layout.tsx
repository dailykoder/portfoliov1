import { Outlet } from "@tanstack/react-router";
import Sidebar from "@/components/nav/Sidebar";
import { useState, useEffect } from "react";
import MobileNavbar from "./nav/MobileNavbar";
import { Toaster } from "@/components/ui/toaster";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto flex gap-4">
      {/* Sidebar Container */}
      <div
        className={`
        hidden lg:flex lg:flex-col
        ${isOpen ? "fixed bg-white" : ""}
      `}
      >
        {/* Logo */}
        <img
          src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/7d4af942-2eb7-432a-ba45-3c87d527e99a_rwc_0x0x505x332x4096.png?h=6ae60d8c1ab1d4dba799240765f01f4c"
          className="w-[20rem] h-auto mb-10 mt-6"
          alt="Logo"
        />
        {/* Sidebar Navigation */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <MobileNavbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        className={isOpen ? "fixed inset-0 bg-white z-50" : "hidden"}
      />
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 right-4 p-2 z-50 bg-white rounded-lg shadow-lg"
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
      <div className="flex-grow w-full lg:w-2/4 lg:ml-10">
        <Toaster />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
