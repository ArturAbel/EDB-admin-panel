import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar-section">
      <section className="navbar-upper">
        <div className="navbar-upper-left"></div>
        <div className="navbar-upper-middle">
          <div className="navbar-logo">e - DigitalBank</div>
        </div>
        <div className="navbar-upper-right">
          <Link className="navbar-logout-link">log out</Link>
        </div>
      </section>
      <section className="navbar-lower"></section>
    </nav>
  );
};
