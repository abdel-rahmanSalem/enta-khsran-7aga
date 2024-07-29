import Logo from "../components/Logo";
import Footer from "../components/Footer";
import MainHome from "../components/MainHome";

function Home() {
  return (
    <div className="flex h-screen items-center overflow-hidden bg-gray-900 text-gray-200">
      <Logo />
      <MainHome />
      <Footer />
    </div>
  );
}

export default Home;
