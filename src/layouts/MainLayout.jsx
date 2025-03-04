import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen relative">
      <Navbar />
      <main className="flex-grow flex justify-center items-center">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
