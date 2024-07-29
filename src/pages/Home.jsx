import Logo from "../components/Logo";
import Footer from "../components/Footer";
import MainHome from "../components/MainHome";
import MobileNav from "../components/MobileNav";

function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-950 text-gray-200">
      <nav className="fixed top-6 flex w-screen items-center justify-between px-6">
        <Logo />
        <MobileNav />
      </nav>
      <MainHome />
      <Footer />
    </div>
  );
}

export default Home;
