import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PageLayout() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-950 text-gray-200">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PageLayout;
