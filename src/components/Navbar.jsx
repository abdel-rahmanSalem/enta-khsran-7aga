import Logo from "../components/Logo";
import NavLink from "../components/NavLink";

function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between">
      <Logo />
      <NavLink />
    </nav>
  );
}

export default Navbar;
