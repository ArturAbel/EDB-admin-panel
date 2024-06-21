import { SubNavbar } from "../../components/SubNavbar/SubNavbar";
import { Outlet } from "react-router-dom";
import {
  AccountHoldersLinksText,
  AccountHoldersLinksTo,
} from "../../utilities/variables";

import "./Members.css";

export const Members = () => {
  return (
    <>
      <SubNavbar text={AccountHoldersLinksText} to={AccountHoldersLinksTo} />
      <section className="members-section">
        <Outlet />
      </section>
    </>
  );
};
