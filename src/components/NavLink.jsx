import { Link } from "react-router-dom";

function NavLink() {
  return (
    <div>
      <Link
        to="/list"
        className="text-sm font-semibold text-neutral-400 transition-colors hover:text-neutral-300 sm:text-base"
      >
        <span>Go to your List &gt;</span>
      </Link>
    </div>
  );
}

export default NavLink;
