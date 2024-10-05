import { Outlet } from "@tanstack/react-router";
import Sidebar from "@/components/nav/Sidebar";

function Layout() {
  return (
    <div className="container lg flex pt-10 mx-auto gap-4">
      <div className="flex flex-col">
        <img
          src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/7d4af942-2eb7-432a-ba45-3c87d527e99a_rwc_0x0x505x332x4096.png?h=6ae60d8c1ab1d4dba799240765f01f4c"
          className="w-[331px] h-[217px] mb-10"
          alt="Logo"
        />
        <Sidebar />
      </div>
      <div className="flex flex-grow w-2/4 ml-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
