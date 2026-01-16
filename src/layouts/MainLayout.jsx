import { Outlet } from "react-router-dom"
import Navbar from "../components/NavBar"
import TestNavBar from "../components/TestNavBar";
import { LanguageProvider } from "../context/LanguageContext";
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