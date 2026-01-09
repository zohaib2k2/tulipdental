import { Outlet } from "react-router-dom"
import Navbar from "../components/NavBar"
import TestNavBar from "../components/TestNavBar";
const MainLayout = () => {
  return (
    <>
         {/* <Navbar/> */}
         <TestNavBar/>
        <Outlet/>
    </>
    );
}

export default MainLayout;