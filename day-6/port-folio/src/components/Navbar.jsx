import { Link } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/experience", label: "Experience" },
  { path: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">My Portfolio</h2>

      <div className="nav-links">
        {links.map((link) => (
          <Link key={link.path} to={link.path}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
