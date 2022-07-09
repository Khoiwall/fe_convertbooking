import react from "react";
import { HeaderDashboard } from "./header";
import SideBar from "./sidebar";

function BaseDashboard({ children }: any) {
  return (
    <div className="min-h-screen max-h-screen flex w-full bg-gray-100 dark:bg-gray-800 text-white">
      <SideBar />
      <div className="bg-dashboard flex-grow overflow-auto">
        <HeaderDashboard />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default BaseDashboard;
