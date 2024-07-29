import Logo from "../components/Logo";
import Footer from "../components/Footer";

function List() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-950 text-gray-200">
      <nav className="fixed top-6 flex w-screen items-center justify-between px-6">
        <Logo />
      </nav>
      <Footer />
    </div>
  );
}

export default List;
