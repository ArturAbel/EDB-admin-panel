import { NavLink } from "react-router-dom";

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
          <NavLink className="navbar-logout-link">log out</NavLink>
        </div>
      </section>
      <section className="navbar-lower">
        <div className="navbar-links-container">
          <NavLink className="navbar-link" to={"/"}>
            overview
          </NavLink>
          <NavLink className="navbar-link" to={"/members"}>
            account holders
          </NavLink>
          <NavLink className="navbar-link" to={"/transactions"}>
            transactions
          </NavLink>
          <NavLink className="navbar-link" to={"/admin-details"}>
            admin details
          </NavLink>
        </div>
      </section>
    </nav>
  );
};
