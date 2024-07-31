import Logo from "../components/Logo";
import NavLink from "../components/NavLink";

function Navbar() {
  return (
    <nav className="fixed top-6 flex w-screen items-center justify-between px-6">
      <Logo />
      <NavLink />
    </nav>
  );
}

export default Navbar;
