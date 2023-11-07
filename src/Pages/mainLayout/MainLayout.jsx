import { Outlet } from "react-router-dom";
import NavBar from "./Shared/NavBar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
