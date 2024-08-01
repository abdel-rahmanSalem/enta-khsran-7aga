import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PageLayout() {
  return (
    <div className="flex h-screen flex-col items-center justify-between bg-slate-950 p-6 text-gray-200">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PageLayout;
