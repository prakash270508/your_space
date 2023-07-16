import React from "react";
import {FaSearch} from 'react-icons/fa'

export default function Navbar() {
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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0 "
              style={{ marginLeft: "20vw" }}
            >
              <li className="nav-item d-flex">
                <input
                  class="searchInput"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="searchbtn" type="submit">
                  <FaSearch  color="white" className="m-2"/>
                </button>
              </li>
            </ul>
          </div> */}
        </div>

          <div className="d-flex mx-4">
            lsdj
          </div>

      </nav>
    </div>
  );
}
