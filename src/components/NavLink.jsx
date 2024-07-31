import { Link, useLocation } from "react-router-dom";

function NavLink() {
  const { pathname } = useLocation();
  const linkTo = pathname === "/list" ? "/" : "/list";
  const linkToMessage =
    pathname === "/list" ? "< Get Back To Add" : "Go To Your List >";
  return (
    <div>
      <Link
        to={linkTo}
        className="text-sm font-semibold text-neutral-400 transition-colors hover:text-neutral-300 sm:text-base"
      >
        <span>{linkToMessage}</span>
      </Link>
    </div>
  );
}

export default NavLink;
