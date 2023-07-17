import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

  const location = useLocation();

  const isAdminPage = location.pathname === "/admin"; 

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid mx-5">
          <img
            src="https://www.your-space.in/wp-content/themes/online-courses/images/logo.png"
            className="my-2"
            style={{ height: "2.5vw" }}
            alt=""
          />
        </div>

        {/* {isAdminPage && (
          <div className="mx-4 logoutbtn">
            <Link to={'/'}>
            <button className="btn btn-secondary">Logout</button>
            </Link>
          </div>
        )} */}
      </nav>
    </div>
  );
}
