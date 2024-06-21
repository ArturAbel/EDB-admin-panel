import { NavLink } from "react-router-dom";

import "./SubNavbar.css";

export const SubNavbar = ({ text, to }) => {
  const [firstText, secondText, thirdText] = text;
  const [firstLink, secondLink, thirdLink] = to;

  return (
    <nav className="subNavbar-section">
      <div className="subNavbar-links-container">
        <NavLink className="subNavbar-link" to={firstLink}>
          {firstText}
        </NavLink>
        <NavLink className="subNavbar-link" to={secondLink}>
          {secondText}
        </NavLink>
        <NavLink className="subNavbar-link" to={thirdLink}>
          {thirdText}
        </NavLink>
      </div>
    </nav>
  );
};
