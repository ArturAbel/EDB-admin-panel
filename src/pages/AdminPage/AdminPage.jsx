import { Navbar } from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

import "./AdminPage.css";

export const AdminPage = () => {
  return (
    <>
      <Navbar />
      <section className="admin-page-section">
        <Outlet />
      </section>
      ;
    </>
  );
};
