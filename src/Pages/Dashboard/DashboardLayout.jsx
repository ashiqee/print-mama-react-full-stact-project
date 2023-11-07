import { Outlet } from "react-router-dom";
import SideBar from "../../Components/sharedComponents/SideBar/SideBar";
import DashboardNavBar from "../mainLayout/Shared/DashboardNavBar";
import DashboardHeader from "./DashboardHeader";

const DashboardLayout = () => {
  return (
    <div className="flex ">
      <SideBar />
      <div className="">
        <DashboardNavBar />

        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
