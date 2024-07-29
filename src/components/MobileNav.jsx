import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <div>
      <Link
        to="/list"
        className="text-sm font-semibold text-neutral-400 transition-colors hover:text-neutral-100"
      >
        <span>Go to your List &gt;</span>
      </Link>
    </div>
  );
}

export default MobileNav;
