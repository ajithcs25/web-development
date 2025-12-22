// import { Link } from "react-router-dom";

// const links = [
//   { path: "/", label: "Home" },
//   { path: "/about", label: "About" },
//   { path: "/contact", label: "Contact" },
// ];

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <h2 className="logo">My App</h2>

//       <div className="nav-links">
//         {links.map((link) => (
//           <Link key={link.path} to={link.path}>
//             {link.label}
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


//  for lifting state

import { Link } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

function Navbar({ name }) {
  return (
    <nav className="navbar">
      <h2 className="logo">My App</h2>

      <span style={{ color: "white" }}>User: {name}</span>

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
