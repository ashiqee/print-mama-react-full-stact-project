import { Outlet } from "react-router-dom";
import NavBar from "./Shared/NavBar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col min-h-screen">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
