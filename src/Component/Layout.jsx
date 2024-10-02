import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Pages/Footer";



const Layout = () => {
    return (
        <div>
           <Navbar></Navbar>
           <div className=" flex flex-col">
        <Outlet />
      </div>
      <Footer/>
        </div>
    );
};

export default Layout;